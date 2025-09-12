'use client'

import Image from 'next/image'

interface BrandDescriptionProps {
  logoSrc: string
  paragraphs: string[]
}

export default function BrandDescription({
  logoSrc,
  paragraphs
}: BrandDescriptionProps) {
  return (
    <section className='flex flex-col items-center px-6 py-20 text-center'>
      {/* Logo */}
      <div className='mb-4'>
        <Image
          src={logoSrc}
          alt='brand-logo'
          width={600}
          height={400}
          className='mx-auto h-auto w-auto'
        />
      </div>

      {/* Texto descriptivo */}
      <div className='mt-10 max-w-2xl space-y-6 text-justify text-gray-800'>
        {paragraphs.map((text, i) => (
          <p key={i} className='text-xl leading-relaxed'>
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
