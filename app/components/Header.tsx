'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

// Configuración de rutas → logo + color de letra
const headerStyles: Record<
  string,
  { logo: string; textColor: string; highlight: string }
> = {
  '/': {
    logo: '/images/landing/logo-negro-2.png',
    textColor: 'text-dark-coffee',
    highlight: 'hover:text-amber-600'
  },
  '/deleite': {
    logo: '/images/landing/logo-blanco-2.png',
    textColor: 'text-white',
    highlight: 'hover:text-amber-300'
  },
  '/lanai': {
    logo: '/images/landing/logo-blanco-2.png',
    textColor: 'text-white',
    highlight: 'hover:text-amber-300'
  },
  '/niria': {
    logo: '/images/landing/logo-blanco-2.png',
    textColor: 'text-white',
    highlight: 'hover:text-amber-300'
  },
  '/croquetas': {
    logo: '/images/landing/logo-blanco-2.png',
    textColor: 'text-white',
    highlight: 'hover:text-amber-300'
  },
  '/carpanes': {
    logo: '/images/landing/logo-blanco-2.png',
    textColor: 'text-white',
    highlight: 'hover:text-amber-300'
  }
  // ➕ agrega aquí las rutas que necesites
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const pathname = usePathname()
  const currentStyle = headerStyles[pathname] ?? headerStyles['/'] // fallback al home si la ruta no está en la lista

  return (
    <header className='relative z-10 w-full bg-transparent px-6 py-4 md:px-12'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        {/* Logo dinámico */}
        <Link href='/'>
          <Image
            src={currentStyle.logo}
            alt='yusti-concept-logo'
            height={255}
            width={200}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className={`hidden items-center space-x-10 text-lg font-light md:flex ${currentStyle.textColor}`}
        >
          <Link
            href='/'
            className={`${currentStyle.textColor} ${currentStyle.highlight} transition`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`${currentStyle.textColor} ${currentStyle.highlight} transition`}
          >
            About
          </Link>
          <Link
            href='/work'
            className={`${currentStyle.textColor} ${currentStyle.highlight} transition`}
          >
            Work
          </Link>
          <Link href='/#contact'>
            <span className='bg-dark-coffee hover:bg-coffee rounded-xl px-6 py-2 text-white transition'>
              Contact
            </span>
          </Link>
        </nav>

        {/* Mobile hamburger icon */}
        <button
          className={`${currentStyle.textColor} md:hidden`}
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className='mt-4 space-y-4 rounded-md bg-white px-6 py-4 text-center text-base font-light shadow-inner md:hidden'>
          <Link
            href='/'
            className={`${currentStyle.textColor} block ${currentStyle.highlight} transition`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`${currentStyle.textColor} block ${currentStyle.highlight} transition`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href='/work'
            className={`${currentStyle.textColor} block ${currentStyle.highlight} transition`}
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link href='/#contact' onClick={() => setIsOpen(false)}>
            <span className='bg-dark-coffee hover:bg-coffee block rounded-xl px-6 py-2 text-center text-white transition'>
              Contact
            </span>
          </Link>
        </div>
      )}
    </header>
  )
}
