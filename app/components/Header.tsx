'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className='relative z-50 w-full bg-white px-6 py-4 shadow-md md:px-12'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/images/landing/logo-black.png'
            alt='yusti-concept-logo'
            height={255}
            width={200}
          />
        </Link>

        {/* Desktop nav */}
        <nav className='hidden items-center space-x-10 text-lg font-light md:flex'>
          <Link
            href='/'
            className='text-dark-coffee transition hover:text-amber-600'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='text-dark-coffee transition hover:text-amber-600'
          >
            About
          </Link>
          <Link
            href='/work'
            className='text-dark-coffee transition hover:text-amber-600'
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
          className='text-dark-coffee md:hidden'
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
            className='text-dark-coffee block transition hover:text-amber-600'
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href='/about'
            className='text-dark-coffee block transition hover:text-amber-600'
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href='/work'
            className='text-dark-coffee block transition hover:text-amber-600'
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
