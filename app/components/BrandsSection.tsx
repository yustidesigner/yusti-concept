'use client'

import Image from 'next/image'

const brands = [
  { src: '/images/landing/fans-logo.png', alt: 'Fans Coffee & Bakery' },
  { src: '/images/landing/hi-logo.png', alt: 'Hi! Bröd Coffee' },
  { src: '/images/landing/lanai-logo.png', alt: 'Lanai' },
  { src: '/images/landing/deleite-logo.png', alt: 'Deleite' },
  { src: '/images/landing/kloeh-logo.png', alt: 'Kloeh' },
  { src: '/images/landing/bou-logo.png', alt: 'Café Bou' },
  { src: '/images/landing/panini-logo.png', alt: 'The Panini Café' }
]

export default function BrandsSection() {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-24 text-center'>
      {/* Texto superior */}
      <div className='max-w-3xl'>
        <p className='py-42 text-xl font-light text-gray-700 md:text-3xl'>
          <span className='text-dark-coffee font-bold'>Impulso marcas</span>{' '}
          mediante visuales <br /> con{' '}
          <span className='text-dark-coffee font-bold'>
            concepto y propósito.
          </span>
        </p>
      </div>

      {/* Título marcas */}
      <h3 className='mt-20 text-lg tracking-wide text-gray-800 md:text-3xl'>
        MARCAS QUE{' '}
        <span className='text-dark-coffee font-bold'>CONFIARON EN MI</span>
      </h3>

      {/* Logos */}
      <div className='mt-12 grid grid-cols-2 items-center gap-10 md:grid-cols-4 lg:grid-cols-7'>
        {brands.map((brand, i) => (
          <div
            key={i}
            className='relative mx-auto h-12 w-28 transition hover:scale-130'
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              fill
              className='object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
