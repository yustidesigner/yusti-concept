import BrandDescription from '@/components/BrandDescription'
import ColorPalette from '@/components/ColorPalette'
import FullBackgroundHero from '@/components/FullBackgroundHero'
import Image from 'next/image'

export default function Niria() {
  return (
    <>
      <FullBackgroundHero imageSrc='/images/niria/niria.png' wm={false} />
      {/* <FullBackgroundHero imageSrc='/images/niria/niria2.png' wm={true} /> */}
      <section className='flex h-screen w-full items-center justify-center'>
        <Image
          src='/images/niria/niria2.png'
          alt='background'
          width={800}
          height={800}
          priority
          className='object-contain'
        />
      </section>

      <BrandDescription
        logoSrc='/images/landing/logo-negro-2.png'
        paragraphs={[
          'Diseñar la identidad visual de Niria Sojo Studio fue un ejercicio de equilibrio entre fuerza y sutileza. Como diseñadora de interiores, Niria buscaba una imagen que reflejara no solo su estilo refinado, sino también la determinación con la que transforma los espacios.',
          'El logotipo fue concebido como una expresión de lujo discreto: formas elegantes, tipografía con personalidad y detalles sutiles que evocan feminidad sin caer en clichés. La paleta de color se trabajó para resaltar el carácter sofisticado del estudio, con tonos sobrios y acentos cálidos que aportan cercanía y distinción.',
          'Cada trazo, cada espacio en blanco, responde a una intención: transmitir la esencia de Niria Sojo como profesional y como marca. Una identidad visual que no solo acompaña su trabajo, sino que lo eleva.'
        ]}
      />
      <ColorPalette colors={['np1', 'np2', 'np3', 'np4']} />
    </>
  )
}
