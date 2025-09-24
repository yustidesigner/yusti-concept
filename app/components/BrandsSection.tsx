'use client'

import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    src: '/images/landing/fans-logo.png',
    alt: 'Fans Coffee & Bakery',
    link: 'fans'
  },
  { src: '/images/landing/hi-logo.png', alt: 'Hi! Bröd Coffee', link: 'hi' },
  { src: '/images/landing/lanai-logo.png', alt: 'Lanai', link: 'lanai' },
  { src: '/images/landing/deleite-logo.png', alt: 'Deleite', link: 'deleite' },
  { src: '/images/landing/kloeh-logo.png', alt: 'Kloeh', link: 'kloeh' },
  { src: '/images/landing/bou-logo.png', alt: 'Café Bou', link: 'bou' },
  {
    src: '/images/landing/panini-logo.png',
    alt: 'The Panini Café',
    link: 'panini'
  }
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
      <h3 className='mt-20 text-lg font-light tracking-wide text-gray-800 md:text-3xl'>
        Experiencias <span className='text-dark-coffee'>con marcas como</span>
      </h3>

      {/* Logos */}
      <div className='mt-12 grid grid-cols-2 items-center gap-10 md:grid-cols-4 lg:grid-cols-7'>
        {brands.map((brand, i) => (
          <div
            key={i}
            className='relative mx-auto h-12 w-28 transition hover:scale-130'
          >
            <Link href={brand.link}>
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                className='object-contain'
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
