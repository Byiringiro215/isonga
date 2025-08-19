'use client'
import React from 'react'
import Image from 'next/image'
import { images } from '@/assets/images'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useNewsStore } from '@/store/newsStore'

const NewsArticlePage = () => {
  const params = useParams()
  const router = useRouter()
  const { selectedNewsCard } = useNewsStore()
  // const articleId = parseInt(params.id as string)
  
  // Use selected card from store
  const article = selectedNewsCard
  
  if (!article) {
    return (
      <div className="min-h-screen bg-white px-7 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Article not found</h1>
          <p className="text-gray-600 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/news"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="flex items-center p-4 md:p-7 border-b border-gray-200">
        <button 
          onClick={() => router.back()}
          className="w-8 h-8 md:w-10 md:h-10 border border-blue-400 rounded-full flex items-center justify-center bg-transparent cursor-pointer hover:bg-blue-400 hover:border-white mr-3 md:mr-4 transition-colors duration-200"
          aria-label="Go back"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg md:text-2xl font-bold text-gray-900">News Article</h1>
      </div>

      {/* Article Content */}
      <div className="px-4 md:px-7 py-6 md:py-10">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-600 mb-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-full overflow-hidden flex items-center justify-center">
                 <Image src={article.author.avatar} alt="" width={40} height={40} />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">{article.author.name}</div>
                  <div className="text-xs md:text-sm text-gray-500">{article.author.role}</div>
                </div>
              </div>
              <div className="text-xs md:text-sm">{article.date}</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="my-6 md:my-8 relative w-full h-64 md:h-96">
              <Image src={article.image ?? images.awarding} alt="Article image" fill className="object-cover rounded-lg" />
            </div>
            
            <p className="text-base md:text-lg leading-relaxed mb-6">
              {article.description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end space-x-3 md:space-x-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
            <button 
              className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
              aria-label="Like article"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button 
              className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
              aria-label="Share article"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsArticlePage 