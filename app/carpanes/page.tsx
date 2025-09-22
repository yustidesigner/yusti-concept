import BrandDescription from '@/components/BrandDescription'
import CenterLogo from '@/components/CenterLogo'
import FullBackgroundHero from '@/components/FullBackgroundHero'
import SplitViewportImages from '@/components/SplitViewportImages'
import TiltedIphone from '@/components/TiltedIphone'

export default function Carpanes() {
  return (
    <>
      <CenterLogo
        logoSrc='/images/carpanes/logo.png'
        bgColor='bg-black'
        wm={false}
        alt='Carpanes 55 logo'
      />
      <BrandDescription
        logoSrc='/images/landing/logo-negro-2.png'
        paragraphs={[
          'Carpanes, una cafetería familiar en Valdebebas que, sin perder la calidez de lo cotidiano, respira elegancia y cuidado en cada detalle.',
          'Trabajé junto a BOU Coffee, una marca con base en Barcelona que entiende el café como una experiencia sensorial completa. En Carpanes, quise reflejar cómo ese café se encuentra con una pastelería que no solo es deliciosa, sino refinada: piezas delicadas, bien ejecutadas, con una estética que invita a detenerse y disfrutar.'
        ]}
      />
      <FullBackgroundHero
        imageSrc='/images/carpanes/1.jpg'
        wm={true}
        alt='Cafe y dulce de fresa'
      />
      <FullBackgroundHero
        imageSrc='/images/carpanes/2.jpg'
        wm={false}
        alt='Cafe y dulce de fresa'
      />
      <FullBackgroundHero
        imageSrc='/images/carpanes/3.jpg'
        wm={true}
        alt='Pan con crema pastelera'
      />
      <FullBackgroundHero
        imageSrc='/images/carpanes/4.jpg'
        wm={false}
        alt='Pan con crema pastelera zoom'
      />
      <FullBackgroundHero
        imageSrc='/images/carpanes/5.jpg'
        wm={false}
        alt='Croissants dulces'
      />
      <FullBackgroundHero
        imageSrc='/images/carpanes/6.jpg'
        wm={false}
        alt='Croissants dulces 2'
      />
    </>
  )
}
