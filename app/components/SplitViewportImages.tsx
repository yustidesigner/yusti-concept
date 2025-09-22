// app/components/SplitViewportImages.tsx
import Image from 'next/image'

type Props = {
  leftSrc: string
  rightSrc: string
  leftAlt?: string
  rightAlt?: string
  // Opcional: que la izquierda cargue con prioridad (hero)
  leftPriority?: boolean
  rightPriority?: boolean
}

export default function SplitViewportImages({
  leftSrc,
  rightSrc,
  leftAlt = 'Left image',
  rightAlt = 'Right image',
  leftPriority = true,
  rightPriority = false
}: Props) {
  return (
    <section className='grid h-screen grid-cols-1 md:grid-cols-2'>
      {/* Left */}
      <div className='relative h-[50vh] md:h-full'>
        <Image
          src={leftSrc}
          alt={leftAlt}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 50vw'
          priority={leftPriority}
        />
      </div>

      {/* Right */}
      <div className='relative h-[50vh] md:h-full'>
        <Image
          src={rightSrc}
          alt={rightAlt}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 50vw'
          priority={rightPriority}
        />
      </div>
    </section>
  )
}
