'use client'

import Image from 'next/image'

export default function PhotographyShowcase() {
  return (
    <section className='flex justify-center px-4 py-16'>
      {/* Marco degradado */}
      <div className='w-full max-w-5xl rounded-[32px] bg-gradient-to-b from-[#3C2A1E] to-[#8C611C] p-1 shadow-xl'>
        {/* Contenido sobre fondo oscuro */}
        <div className='rounded-[31px] bg-[linear-gradient(180deg,#3C2A1E_0%,#8C611C_100%)] p-6 md:p-10'>
          {/* Título */}
          <h2 className='px-6 text-3xl font-extrabold text-white md:text-6xl'>
            Fotografía
          </h2>
          <p className='mt-1 px-6 pt-2 text-lg text-white'>
            Que transmite identidad
          </p>

          {/* Borde blanco grueso + grilla */}
          <div className='mt-6 rounded-[22px] bg-white p-3 md:p-5'>
            <div className='grid [grid-auto-rows:140px] grid-cols-2 gap-3 md:[grid-auto-rows:200px] md:gap-4'>
              {/* Izquierda alta (2 filas) */}
              <Tile
                src='/images/landing/ff1.png'
                alt='Fans Coffee & Bakery'
                className='row-span-2'
              />

              {/* Derecha arriba */}
              <Tile src='/images/landing/ff2.png' alt='María Croquetas' />

              {/* Derecha medio */}
              <Tile src='/images/landing/ff3.png' alt='Capanes 55' />

              {/* Abajo izquierda */}
              <Tile src='/images/landing/ff4.png' alt='Hi! Bröd Coffee' />

              {/* Abajo derecha */}
              <Tile src='/images/landing/ff5.png' alt='Binome' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Tile reusable */
function Tile({
  src,
  alt,
  className = ''
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[18px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
        className='object-cover transition-transform duration-500 group-hover:scale-105'
        priority={false}
      />
    </div>
  )
}
