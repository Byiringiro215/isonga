'use client'
import React, { useState, useRef } from 'react'
import { images } from '@/assets/images'
import Image from 'next/image'
import { Moon, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

const VerifyOtp = () => {
  const router = useRouter()
  const [otp, setOtp] = useState(['', '', '', ''])
  const [verificationState, setVerificationState] = useState<'input' | 'success' | 'error'>('input')
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Fake OTP for testing
  const FAKE_OTP = '1234'

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return // Only allow single digit
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus to next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpString = otp.join('')
    
    if (otpString.length !== 4) {
      setVerificationState('error')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      if (otpString === FAKE_OTP) {
        setVerificationState('success')
      } else {
        setVerificationState('error')
        setOtp(['', '', '', ''])
        inputRefs.current[0]?.focus()
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleConfirm = () => {
    // Redirect to home page after successful verification
    router.push('/')
  }

  // Success State
  if (verificationState === 'success') {
    return (
      <div className="min-h-screen flex">
        {/* Left Section - Blue Background */}
        <div className="w-1/2 bg-blue-600 rounded-l-lg relative overflow-hidden flex flex-col">
          {/* Header with Logo */}
          <div className="flex items-center gap-2 p-4">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <Image src={images.logo} alt="logo" width={24} height={24} className='w-full h-full object-cover' />
            </div>
            <span className="text-white font-bold text-sm">ISONGA</span>
          </div>

          {/* Sports Illustration */}
          <div className="flex-1 relative">
            <Image
              src={images.sports}
              alt="Sports equipment"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* Right Section - White Background */}
        <div className="w-1/2 bg-white rounded-r-lg flex flex-col">
          {/* Header with Dark Mode Toggle */}
          <div className="flex justify-between items-start px-4 relative">
            <div className="flex-1"></div>
            <div className="h-16 w-16">
              <Image src={images.biglogo} alt="logo" width={80} height={80} className='w-full h-full object-cover' />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 flex-1 flex justify-end">
              <Moon className="w-5 h-5" />
            </button>
          </div>

          {/* Success Content Container */}
          <div className="flex-1 flex flex-col justify-center items-center px-6">
            <div className="w-full max-w-md flex flex-col items-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>

              {/* Success Message */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">Success!</h2>
              <p className="text-gray-600 text-center mb-8 text-sm">
                Congratulations! You have been successfully authenticated
              </p>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all text-sm"
              >
                Continue to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Error State
  if (verificationState === 'error') {
    return (
      <div className="min-h-screen flex">
        {/* Left Section - Blue Background */}
        <div className="w-1/2 bg-blue-600 rounded-l-lg relative overflow-hidden flex flex-col">
          {/* Header with Logo */}
          <div className="flex items-center gap-2 p-4">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <Image src={images.logo} alt="logo" width={24} height={24} className='w-full h-full object-cover' />
            </div>
            <span className="text-white font-bold text-sm">ISONGA</span>
          </div>

          {/* Sports Illustration */}
          <div className="flex-1 relative">
            <Image
              src={images.sports}
              alt="Sports equipment"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* Right Section - White Background */}
        <div className="w-1/2 bg-white rounded-r-lg flex flex-col">
          {/* Header with Dark Mode Toggle */}
          <div className="flex justify-between items-start px-4 relative">
            <div className="flex-1"></div>
            <div className="h-16 w-16">
              <Image src={images.biglogo} alt="logo" width={80} height={80} className='w-full h-full object-cover' />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 flex-1 flex justify-end">
              <Moon className="w-5 h-5" />
            </button>
          </div>

          {/* Error Content Container */}
          <div className="flex-1 flex flex-col justify-center items-center px-6">
            <div className="w-full max-w-md flex flex-col items-center">
              {/* Error Icon */}
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              {/* Error Message */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">Invalid Code</h2>
              <p className="text-gray-600 text-center mb-8 text-sm">
                The verification code you entered is incorrect. Please try again.
              </p>

              {/* Try Again Button */}
              <button
                onClick={() => setVerificationState('input')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Input State (Default)
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Blue Background */}
      <div className="w-1/2 bg-blue-600 rounded-l-lg relative overflow-hidden flex flex-col">
        {/* Header with Logo */}
        <div className="flex items-center gap-2 p-4">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <Image src={images.logo} alt="logo" width={24} height={24} className='w-full h-full object-cover' />
          </div>
          <span className="text-white font-bold text-sm">ISONGA</span>
        </div>

        {/* Sports Illustration */}
        <div className="flex-1 relative">
          <Image
            src={images.sports}
            alt="Sports equipment"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>

      {/* Right Section - White Background */}
      <div className="w-1/2 bg-white rounded-r-lg flex flex-col">
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-between items-start px-4 relative">
          <div className="flex-1"></div>
          <div className="h-16 w-16">
            <Image src={images.biglogo} alt="logo" width={80} height={80} className='w-full h-full object-cover' />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 flex-1 flex justify-end">
            <Moon className="w-5 h-5" />
          </button>
        </div>

        {/* OTP Verification Form Container */}
        <div className="flex-1 flex flex-col justify-center items-center px-6">
          <div className="w-full max-w-md flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">Verification Code</h2>
            <p className="text-gray-600 text-center mb-6 text-sm">
              We have sent the verification code to your email address
            </p>
            
            {/* Test OTP Display */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <p className="text-blue-800 text-xs text-center">
                <strong>Test OTP:</strong> {FAKE_OTP}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input Fields */}
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder=""
                    disabled={isLoading}
                  />
                ))}
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                disabled={isLoading || otp.join('').length !== 4}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Verifying...' : 'Confirm'}
              </button>

              {/* Resend Code Link */}
              <div className="text-center">
                <span className="text-gray-600 text-xs">Didn't receive the code? </span>
                <button type="button" className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                  Resend
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyOtp
