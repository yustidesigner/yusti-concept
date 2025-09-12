import BrandDescription from '@/components/BrandDescription'
import ColorPalette from '@/components/ColorPalette'
import FullBackgroundHero from '@/components/FullBackgroundHero'

export default function Lanai() {
  return (
    <>
      <FullBackgroundHero imageSrc='/images/lanai/lanai.png' wm={false} />
      <FullBackgroundHero imageSrc='/images/lanai/lanai2.png' wm={false} />
      <BrandDescription
        logoSrc='/images/lanai/lanai3.png'
        paragraphs={[
          'El logotipo de Lanai nace de la fusión de tres elementos naturales: los rayos del sol, una montaña y el mar. Unificados en una forma armónica y orgánica, evocan la conexión profunda con la tierra, el agua y la energía solar, esenciales en la filosofía de la marca.',
          'Este símbolo representa el origen puro y natural de cada fórmula, elaborada artesanalmente en Panamá. El diseño transmite calma, bienestar y respeto por la naturaleza, en sintonía con los aromas y texturas que caracterizan a los productos Lanai.',
          'Una identidad visual que habla de equilibrio, origen y belleza natural.'
        ]}
      />
      <ColorPalette colors={['lp1', 'lp2', 'lp3', 'lp4', 'lp5']} />
    </>
  )
}
