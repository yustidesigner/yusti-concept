import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-twine border-t border-gray-300' id='contact'>
      <div className='text-dark-coffee mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 pt-12 text-sm md:grid-cols-3'>
        {/* Logo */}
        <div className='flex justify-center md:justify-start'>
          <Link href='/'>
            <Image
              src='/images/landing/logo-black-x2.png'
              alt='Yusti Designer Logo'
              width={400}
              height={300}
              className='object-contain'
            />
          </Link>
        </div>

        {/* Info */}
        <div className='justify-center text-center'>
          <p>HELLO@YUSTICONCEPT.COM</p>
          <p>+34 643 16 96 08</p>
          <p>MADRID</p>
        </div>

        {/* Enlaces */}
        <div className='flex flex-col space-y-1 text-center'>
          <a href='/home' className='hover:underline'>
            HOME
          </a>
          <a href='/about' className='hover:underline'>
            ABOUT
          </a>
          <a href='/work' className='hover:underline'>
            WORK
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className='text-dark-coffee mt-10 text-center text-xs'>
        ALL RIGHTS RESERVED
      </div>
      <div className='mt-6 h-12 w-full bg-[#301E00]'></div>
    </footer>
  )
}
