'use client'

import Image from 'next/image'

export default function IntroCard() {
  return (
    <section className='bg-twine flex min-h-3/4 items-center justify-center px-4 py-12'>
      <div className='flex w-full max-w-6xl flex-col items-center rounded-3xl rounded-tl-[80px] bg-white p-8 shadow-md md:flex-row md:p-12'>
        {/* Texto a la izquierda */}
        <div className='text-center md:w-1/2 md:text-left'>
          <h1 className='text-dark-coffee text-6xl font-extrabold'>¡HOLA!</h1>
          <p className='my-12 mr-6 text-justify text-base leading-relaxed text-gray-800 md:text-xl'>
            Me llamo <strong className='text-c4'>Yangely Yusti</strong> y soy
            Diseñador Gráfico con <strong className='text-c4'> +6 años</strong>{' '}
            <strong>de experiencia</strong>, he desempeñado mi rol en diferentes
            áreas lo cual me hace tener la habilidad de ser una{' '}
            <strong>diseñadora integral</strong>.
          </p>

          {/* Botón de descarga */}
          <div className='mt-6'>
            <a
              href='/pdfs/Yangely Yusti Villegas Diseñador Gráfico.pdf' // coloca aquí el nombre real de tu PDF en /public
              download
              className='bg-dark-coffee rounded-xl px-12 py-3 font-semibold text-white transition duration-300 hover:bg-black'
            >
              CURRICULUM VITAE
            </a>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className='mt-10 flex justify-center md:mt-0 md:w-1/2'>
          <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-inner'>
            <Image
              src='/images/landing/yan-front.png'
              alt='Yangely Yusti'
              width={600}
              height={700}
              className='rounded-2xl object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
