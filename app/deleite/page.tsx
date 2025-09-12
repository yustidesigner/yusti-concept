import BrandDescription from '@/components/BrandDescription'
import ColorPalette from '@/components/ColorPalette'
import FullBackgroundHero from '@/components/FullBackgroundHero'
import Image from 'next/image'

export default function Deleite() {
  return (
    <>
      <FullBackgroundHero imageSrc='/images/deleite/deleite.png' wm={false} />
      <FullBackgroundHero imageSrc='/images/deleite/deleite2.png' wm={false} />
      <BrandDescription
        logoSrc='/images/deleite/deleite3.png'
        paragraphs={[
          'El logotipo de Deleite está formado por dos gotas de crema que juntas crean una “D” sutil y elegante, evocando el merengue característico de la alta repostería.',
          'Este símbolo transmite la delicadeza, precisión y belleza de los postres elaborados con técnica y pasión. Su diseño minimalista y refinado refleja el estilo de un chef pastelero que convierte lo simple en arte.',
          '“Deleite” es sabor, elegancia y pura experiencia visual.'
        ]}
      />
      <ColorPalette colors={['dp1', 'dp2', 'dp3', 'dp4']} />
    </>
  )
}
