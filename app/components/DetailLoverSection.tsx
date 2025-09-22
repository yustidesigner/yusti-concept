'use client'

import Image from 'next/image'

const images = [
  '/images/croquetas/1.jpg',
  '/images/croquetas/7.jpg',
  '/images/croquetas/11.jpg',
  '/images/croquetas/9.jpg',
  '/images/croquetas/5.jpg'
]

export default function DetailLoverSection() {
  const radius = 1600
  const total = images.length
  const startAngle = -20
  const endAngle = 30

  return (
    <section className='relative flex flex-col items-center justify-center overflow-hidden bg-white py-8'>
      <div className='md: relative mb-32 hidden h-[300px] w-full max-w-6xl md:block'>
        {images.map((src, i) => {
          const angleDeg =
            startAngle + ((endAngle - startAngle) / (total - 1.4)) * i
          const angle = (angleDeg * Math.PI) / 180

          // coordenadas polares
          const x = radius * Math.sin(angle) - 310
          const y = radius * (0.96 - Math.cos(angle))

          return (
            <div
              key={i}
              className='absolute top-[40%] left-1/2 aspect-square w-24 overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 md:w-32 lg:h-80 lg:w-70'
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`
              }}
            >
              <Image
                src={src}
                alt={`detalle-${i}`}
                fill
                className='object-cover'
              />
            </div>
          )
        })}
      </div>

      <div className='mt-64 pt-6 pb-42 text-center'>
        <h2 className='text-c4 mb-3 text-3xl font-bold md:text-6xl'>
          Amante de <br /> los detalles
        </h2>
        <p className='text-c4 mx-auto max-w-md text-left text-base md:text-xl'>
          Buscando siempre reflejar la <br /> esencia de cada marca
        </p>
      </div>
    </section>
  )
}
