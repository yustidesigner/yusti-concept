import BrandDescription from '@/components/BrandDescription'
import CenterLogo from '@/components/CenterLogo'
import FullBackgroundHero from '@/components/FullBackgroundHero'
import SplitViewportImages from '@/components/SplitViewportImages'
import TiltedIphone from '@/components/TiltedIphone'

export default function Hi() {
  return (
    <>
      <CenterLogo
        logoSrc='/images/hi/logo.png'
        bgColor='bg-white'
        wm={false}
        alt='Hi! Brod Coffee logo'
      />
      <section className='flex h-screen items-center justify-center bg-white'>
        <TiltedIphone
          src='/images/hi/iphone.png'
          alt='Iphone hi'
          rotate='rotate-0 md:rotate-24'
        />
      </section>
      <SplitViewportImages
        leftSrc='/images/hi/1.jpg'
        rightSrc='/images/hi/2.jpg'
        leftAlt='Galletas plato mano'
        rightAlt='Croissant Mano'
      />
      <BrandDescription
        logoSrc='/images/landing/logo-negro-2.png'
        paragraphs={[
          'En Hi Brod Coffee busco que cada imagen transmita energía positiva y un ambiente relajado. Me inspiro en la paleta azul de la marca y en la calidez de los pequeños detalles que hacen especial cada momento. Mi intención es que las fotos inviten a desconectar, compartir risas y disfrutar de ese instante dulce que alegra el día.'
        ]}
      />
      <SplitViewportImages
        leftSrc='/images/hi/3.jpg'
        rightSrc='/images/hi/4.jpg'
        leftAlt='Pizzas plato'
        rightAlt='Pizzas mano'
      />
      <SplitViewportImages
        leftSrc='/images/hi/5.jpg'
        rightSrc='/images/hi/6.jpg'
        leftAlt='Brownie partido'
        rightAlt='Postro delicioso'
      />
      <FullBackgroundHero
        imageSrc='/images/hi/7.jpg'
        wm={true}
        alt='Croissant mas cafe en Hi! Brod'
      />
    </>
  )
}
