import Image from 'next/image'

type CenterLogoProps = {
  logoSrc: string
  bgColor?: string
  alt?: string
  wm?: boolean
}

export default function CenterLogo({
  logoSrc,
  bgColor = 'bg-white',
  alt = 'Logo',
  wm = true
}: CenterLogoProps) {
  return (
    <section
      className={`flex h-screen w-full items-center justify-center ${bgColor} ${wm ? '' : '-mt-[200px]'}`}
    >
      <div className='relative top-10'>
        <Image
          src={logoSrc}
          alt={alt}
          width={600}
          height={300}
          className='mx-auto object-contain'
          priority
        />
      </div>
    </section>
  )
}
