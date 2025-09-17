import Link from 'next/link'

export default function Building() {
  return (
    <div className='py-24 text-center'>
      <h1 className='mx-auto text-3xl font-bold'>En Construcción</h1>
      <p className='mx-auto mt-4 max-w-lg text-xl'>
        Esta página esta bajo construcción, sabiendo esto aún puedes contactar
        conmigo a través de mis metodos de contacto que puedes encontrar en el
        pie de esta pagina y te atenderé tan pronto como sea posible.
      </p>

      <div className='container m-auto max-w-[600px]'>
        <Link href='/'>
          <img
            className='h-[400px] w-[600px]'
            src='https://i.imgur.com/qIufhof.png'
            alt='En construcción'
          />
          <button className='font-small hover:text-md bg-green hover:bg-dark-green rounded-full px-8 py-4 text-sm text-white transition-all hover:font-medium'>
            Inicio
          </button>
        </Link>
      </div>
    </div>
  )
}
