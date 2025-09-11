// components/DemasiadoCuriosa.tsx

export default function DemasiadoCuriosa() {
  return (
    <section className='flex min-h-[540px] items-center justify-center bg-white px-2 py-12'>
      <div className='flex w-full max-w-6xl flex-col gap-10 rounded-3xl bg-[#392200] p-8 md:flex-row md:p-16'>
        {/* Texto */}
        <div className='flex flex-1 flex-col justify-center'>
          <h2 className='text-3xl leading-tight font-bold text-white md:text-4xl'>
            Demasiado
            <br />
            curiosa
          </h2>
          <p className='mt-6 text-lg text-white'>
            Como para hacer{' '}
            <span className='font-bold'>
              una <br /> sola cosa
            </span>
            , es por eso <br /> que <span className='font-bold'>domino:</span>
          </p>
        </div>

        {/* Cuadricula */}
        <div className='grid flex-1 grid-cols-2 gap-6'>
          <div className='bg-c1 text-dark-coffee flex h-32 items-center justify-center rounded-2xl text-center text-xl md:h-60 md:text-2xl'>
            Branding
          </div>
          <div className='bg-c2 text-dark-coffee flex h-32 items-center justify-center rounded-2xl text-center text-xl md:h-60 md:text-2xl'>
            Fotografía
          </div>
          <div className='bg-c3 flex h-32 items-center justify-center rounded-2xl text-center text-xl text-white md:h-60 md:text-2xl'>
            Social media
          </div>
          <div className='bg-c4 flex h-32 items-center justify-center rounded-2xl text-center text-xl text-white md:h-60 md:text-2xl'>
            Editorial
          </div>
        </div>
      </div>
    </section>
  )
}
