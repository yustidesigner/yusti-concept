import BrandDescription from '@/components/BrandDescription'
import ColorPalette from '@/components/ColorPalette'
import FullBackgroundHero from '@/components/FullBackgroundHero'

export default function Kloeh() {
  return (
    <>
      <FullBackgroundHero imageSrc='/images/landing/kloeh-logo.jpg' />
      <BrandDescription
        logoSrc='/images/landing/kloeh-logo.png'
        paragraphs={[
          'El logotipo de Kloeh combina elegancia y carácter con una tipografía serif delgada que transmite poder y delicadeza. Un sutil juego en la letra "O" aporta un toque distintivo y moderno, sin perder la armonía del conjunto.',
          'La paleta en tonos tierra y acentos dorados refuerza la sensación de sofisticación, calidez y exclusividad, conectando con lo natural y lo atemporal.'
        ]}
      />
      <ColorPalette colors={['kp1', 'kp2', 'kp3', 'kp4']} />
    </>
  )
}
