'use client'
import React, { useState } from 'react'
import { images } from '@/assets/images'
import Image from 'next/image'
import { Moon, Play, Apple } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Fake credentials for testing
  const FAKE_CREDENTIALS = {
    email: 'test@isonga.com',
    password: 'password123'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('') // Clear error when user types
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      if (formData.email === FAKE_CREDENTIALS.email && formData.password === FAKE_CREDENTIALS.password) {
        // Successful login - redirect to OTP verification
        router.push('/verify-otp')
      } else {
        setError('Invalid email or password')
      }
      setIsLoading(false)
    }, 1000)
  }

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

        {/* Welcome Message */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-white text-2xl font-bold mb-3">Welcome back!</h1>
          <p className="text-white text-sm leading-relaxed max-w-sm">
            Sign up to continue your journey with ISONGA PROGRAM PLATFORM. A website which gives you daily to daily achievements of youth in sports!
          </p>
        </div>

        {/* Sports Illustration */}
        <div className="h-1/2 relative">
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

        {/* Login Form Container */}
        <div className="flex-1 flex flex-col justify-center items-center px-6">
          <div className="w-full max-w-md flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 text-center mb-1">Login to your account</h2>

            {/* Test Credentials Display */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <p className="text-blue-800 text-xs text-center">
                <strong>Test Credentials:</strong><br />
                Email: {FAKE_CREDENTIALS.email}<br />
                Password: {FAKE_CREDENTIALS.password}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email or phone number
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your email or phone"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Enter your password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-800 text-xs text-center">{error}</p>
                </div>
              )}

              <div className="text-right">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xs">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>

              <div className="text-center">
                <span className="text-gray-600 text-xs">Don't have an account? </span>
                <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                  Sign up
                </a>
              </div>
            </form>

            {/* App Download Buttons */}
            <div className="mt-4 flex gap-3 justify-center">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <Play className="w-5 h-5" />
                <span className="text-xs">GET IT ON<br />Google Play</span>
              </button>

              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <Apple className="w-5 h-5" />
                <span className="text-xs">Download on the<br />App Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
