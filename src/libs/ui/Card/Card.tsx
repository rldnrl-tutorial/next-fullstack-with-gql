import Image from 'next/image'
import React from 'react'

interface CardProps {
  imageUrl: string
  category?: string
  title?: string
  description?: string
  to?: string
  alt?: string
}

export default function Card({
  imageUrl,
  alt,
  category,
  title,
  description,
  to,
}: CardProps) {
  return (
    <>
      <div className="w-full h-64 relative rounded">
        <Image
          src={imageUrl}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{category}</p>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-gray-600">{description}</p>
        <a href={to} className="flex hover:text-blue-500">
          {to?.replace(/(^\w+:|^)\/\//, '')}
          <svg
            className="w-4 h-4 my-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </>
  )
}
