'use client'

import Image from 'next/image'

export default function FullBackgroundHero({
  imageSrc,
  wm
}: {
  imageSrc: string
  wm: boolean
}) {
  return (
    <section className={`relative ${wm ? '' : '-mt-[200px]'} h-screen w-full`}>
      {/* Imagen de fondo */}
      <Image
        src={imageSrc}
        alt='background'
        fill
        priority
        className='object-cover'
      />
    </section>
  )
}
