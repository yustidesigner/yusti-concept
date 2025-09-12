'use client'

import Image from 'next/image'

export default function HeroDesigner() {
  return (
    <section className='relative flex flex-col items-center justify-center overflow-hidden bg-white px-6 pt-20 pb-12 md:pt-28 md:pb-20'>
      {/* Texto grande de fondo */}
      <div className='relative top-40 z-0 text-center leading-none'>
        <h1 className='text-dark-coffee text-[clamp(2.5rem,12vw,12rem)] font-bold md:-ml-54'>
          GRAPHIC
        </h1>
        <h1 className='text-dark-coffee mt-[-0.5rem] text-[clamp(2.5rem,12vw,12rem)] tracking-wide md:ml-42'>
          DESIGNER
        </h1>
      </div>

      {/* Imagen centrada superpuesta sobre el texto */}
      <div className='relative z-10 -mt-[4rem] md:-mt-[28rem]'>
        <Image
          src='/images/landing/perfil-yan.png' // coloca tu imagen aquí
          alt='Perfil de la diseñadora'
          width={600}
          height={800}
          className='object-contain'
          priority
        />
      </div>

      {/* Subtítulo */}
      <div className='relative z-0 hidden flex-wrap justify-center gap-8 text-xl font-light tracking-widest text-gray-700 uppercase md:-mt-62 md:flex md:text-4xl'>
        <span>BRANDING</span>
        <span>WEB</span>
        <span className='block px-24'></span>
        <span className='ps-32'>PHOTOGRAPHY</span>
      </div>

      {/* Línea inferior */}
      <div className='bg-dark-coffee -mt-4 h-10 min-w-screen md:mt-46' />
    </section>
  )
}
