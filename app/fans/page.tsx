import BrandDescription from '@/components/BrandDescription'
import CenterLogo from '@/components/CenterLogo'
import FullBackgroundHero from '@/components/FullBackgroundHero'
import SplitViewportImages from '@/components/SplitViewportImages'
import TiltedIphone from '@/components/TiltedIphone'

export default function Fans() {
  return (
    <>
      <CenterLogo
        logoSrc='/images/fans/logo.png'
        bgColor='bg-twine'
        wm={false}
        alt='Fans Coffee & Bakery Logo'
      />
      <section className='bg-twine flex h-screen items-center justify-center'>
        <TiltedIphone
          src='/images/fans/iphone.png'
          alt='Iphone fans'
          rotate='rotate-0 md:rotate-24'
        />
      </section>
      <SplitViewportImages
        leftSrc='/images/fans/1.jpg'
        rightSrc='/images/fans/2.jpg'
        leftAlt='Tres leches Uber Eats'
        rightAlt='Beagle con jamon serrano y queso amarillo'
      />
      <BrandDescription
        logoSrc='/images/landing/logo-negro-2.png'
        paragraphs={[
          'Cada vez que entro en Fans Coffee and Bakery con la cámara, siento que no solo voy a hacer fotos, sino a capturar una atmósfera. Me inspiran la calidez de las luces, los rincones pensados para compartir y ese lazo fraternal que se respira en cada mesa.'
        ]}
      />
      <SplitViewportImages
        leftSrc='/images/fans/3.jpg'
        rightSrc='/images/fans/4.jpg'
        leftAlt='Bowl de matcha'
        rightAlt='Frappe de coco'
      />
      <SplitViewportImages
        leftSrc='/images/fans/5.jpg'
        rightSrc='/images/fans/6.jpg'
        leftAlt='Waffle'
        rightAlt='Tarta de zanahoria'
      />
      <BrandDescription
        logoSrc='/images/landing/logo-negro-2.png'
        paragraphs={[
          'Mi objetivo es que quien vea estas imágenes pueda imaginarse aquí, tomando un café, leyendo un libro o celebrando un reencuentro.',
          'Por eso trabajo con luz natural y tonos cálidos que transmitan esa sensación de hogar y de pausa en medio de la rutina. Porque para mí, cada fotografía es una forma de recordar que los pequeños momentos también merecen ser celebrados.'
        ]}
      />
      <FullBackgroundHero
        imageSrc='/images/fans/7.jpg'
        wm={true}
        alt='Mano con galleta de chocolate'
      />
      <SplitViewportImages
        leftSrc='/images/fans/8.jpg'
        rightSrc='/images/fans/9.jpg'
        leftAlt='Galleta de chocolate'
        rightAlt='Cafe con leche'
      />
      <FullBackgroundHero
        imageSrc='/images/fans/10.jpg'
        wm={false}
        alt='Smoothies'
      />
    </>
  )
}
