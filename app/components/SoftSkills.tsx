// components/SoftSkills.tsx

export default function SoftSkills() {
  return (
    <section className='bg-white px-4 py-16'>
      <div className='text-center'>
        <h2 className='text-dark-coffee text-6xl leading-tight font-bold md:text-7xl'>
          Soft Skills
        </h2>
        <p className='text-dark-coffee mt-4 text-2xl'>
          que forman parte de quien soy
        </p>
      </div>

      <div className='mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='flex flex-col space-y-6'>
          <div className='bg-twine text-dark-coffee rounded-xl py-6 text-center text-xl font-medium'>
            Pensamiento estratégico
          </div>
          <div className='bg-twine text-dark-coffee rounded-xl py-6 text-center text-xl font-medium'>
            Atención al detalle
          </div>
          <div className='bg-twine text-dark-coffee rounded-xl py-6 text-center text-xl font-medium'>
            Adaptabilidad
          </div>
        </div>

        <div className='flex flex-col space-y-6'>
          <div className='bg-twine text-dark-coffee rounded-xl py-6 text-center text-xl font-medium'>
            Pensamiento creativo
          </div>
          <div className='bg-twine text-dark-coffee rounded-xl py-6 text-center text-xl font-medium'>
            Escucha activa
          </div>
          <div className='bg-twine text-dark-coffee rounded-xl py-6 text-center text-xl font-medium'>
            Comunicación efectiva
          </div>
        </div>
      </div>
    </section>
  )
}
