import BrandDescription from '@/components/BrandDescription'
import ColorPalette from '@/components/ColorPalette'
import FullBackgroundHero from '@/components/FullBackgroundHero'

export default function Binome() {
  return (
    <>
      <FullBackgroundHero imageSrc='/images/binome/binome.png' wm={false} />

      <BrandDescription
        logoSrc='/images/landing/logo-negro-2.png'
        paragraphs={[
          'Mi objetivo con estas imágenes es que puedas sentir la historia detrás de cada pieza, como si caminaras por las calles de Atocha y entraras en el universo íntimo de Binome. Una galería donde el tiempo se detiene, donde dos creadoras dan forma a joyas que hablan con sutileza y alma.',
          'Trabajo con luz natural y composiciones limpias que reflejen su esencia: minimalismo, elegancia y autenticidad. Porque cada fotografía busca transmitir esa conexión profunda entre el objeto y quien lo elige, celebrando la belleza de lo hecho a mano y los vínculos que perduran.'
        ]}
      />
      <FullBackgroundHero imageSrc='/images/binome/binome2.png' wm={true} />
      <FullBackgroundHero imageSrc='/images/binome/binome3.png' wm={true} />
      <FullBackgroundHero imageSrc='/images/binome/binome4.png' wm={true} />
      <FullBackgroundHero imageSrc='/images/binome/binome5.png' wm={true} />
      <FullBackgroundHero imageSrc='/images/binome/binome6.png' wm={true} />
      <FullBackgroundHero imageSrc='/images/binome/binome7.png' wm={true} />
    </>
  )
}
