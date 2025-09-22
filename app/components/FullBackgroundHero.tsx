'use client'

import Image from 'next/image'

export default function FullBackgroundHero({
  imageSrc,
  wm,
  alt
}: {
  imageSrc: string
  wm: boolean
  alt: string
}) {
  return (
    <section className={`relative ${wm ? '' : '-mt-[200px]'} h-screen w-full`}>
      {/* Imagen de fondo */}
      <Image src={imageSrc} alt={alt} fill priority className='object-cover' />
    </section>
  )
}
