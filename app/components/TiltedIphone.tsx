import Image from 'next/image'

type TiltedIphoneProps = {
  src: string // imagen de pantalla que irá dentro del iPhone
  alt?: string
  rotate?: string // grado de inclinación
}

export default function TiltedIphone({
  src,
  alt = 'iPhone',
  rotate = '-rotate-12'
}: TiltedIphoneProps) {
  return (
    <div className='relative mx-auto w-[400px] pt-64 md:w-[800px]'>
      <div className={`relative transform ${rotate}`}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={300}
          className='pointer-events-none select-none'
          priority
        />
      </div>
    </div>
  )
}
