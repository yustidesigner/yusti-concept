'use client'

import Link from 'next/link'
import Image from 'next/image'

const projects = [
  { src: '/images/landing/kloeh-logo.jpg', alt: 'Kloeh', link: 'kloeh' },
  {
    src: '/images/landing/niria-sojo-studio.png',
    alt: 'Niria Sojo',
    link: 'niria'
  },
  { src: '/images/landing/deleite.png', alt: 'Deleite', link: 'deleite' },
  { src: '/images/landing/lanai-natural.png', alt: 'Lanai', link: 'lanai' }
]

export default function LatestProjects() {
  return (
    <section className='flex flex-col items-center px-6 py-24'>
      {/* Título superior */}
      <div className='w-full max-w-5xl'>
        <h3 className='text-3xl font-extrabold text-[#8C611C] md:text-5xl'>
          Latest <br className='md:hidden' /> Projects
        </h3>
      </div>

      {/* Bloque oscuro */}
      <div className='mt-10 w-full max-w-5xl rounded-[32px] bg-[#2A1C0F] p-8 md:p-12'>
        <h2 className='text-3xl font-extrabold text-white md:text-4xl'>
          Identidades <br className='md:hidden' /> Visuales
        </h2>
        <p className='mt-2 text-base text-white/80 md:text-lg'>
          Con concepto y propósito
        </p>

        {/* Marco blanco con grilla */}
        <div className='mt-8 rounded-[22px] bg-white p-4 md:p-6'>
          <div className='grid grid-cols-2 gap-4 md:gap-6'>
            {projects.map((project, i) => (
              <Link href={project.link} key={i}>
                <div
                  key={i}
                  className='group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md'
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
