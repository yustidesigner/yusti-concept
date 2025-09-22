import BrandDescription from '@/components/BrandDescription'
import CenterLogo from '@/components/CenterLogo'
import FullBackgroundHero from '@/components/FullBackgroundHero'
import SplitViewportImages from '@/components/SplitViewportImages'
import TiltedIphone from '@/components/TiltedIphone'

export default function Croquetas() {
  return (
    <>
      <CenterLogo
        logoSrc='/images/croquetas/logo.png'
        bgColor='bg-black'
        wm={false}
        alt='Maria Croquetas Gastro Bar'
      />
      <section className='flex h-screen items-center justify-center bg-black'>
        <TiltedIphone
          src='/images/croquetas/iphone.png'
          alt='Iphone croquetas'
          rotate='rotate-0 md:rotate-24'
        />
      </section>
      <SplitViewportImages
        leftSrc='/images/croquetas/1.jpg'
        rightSrc='/images/croquetas/2.jpg'
        leftAlt='Hamburguesa lejana'
        rightAlt='Hamburquesa plano cerca'
      />
      <BrandDescription
        logoSrc='/images/landing/logo-negro-2.png'
        paragraphs={[
          'Para mí, las imágenes de María Croquetas tienen que contar una historia de sabor y buena energía. Me inspiro en la atmósfera única del bar: luces cálidas, un aura nocturna que envuelve cada detalle y platos que brillan por su frescura y su personalidad. Quiero que cada foto invite a relajarse, a compartir tapas con amigos y a disfrutar de ese momento que se convierte en recuerdo.'
        ]}
      />
      <SplitViewportImages
        leftSrc='/images/croquetas/9.jpg'
        rightSrc='/images/croquetas/7.jpg'
        leftAlt='Croqueta 1'
        rightAlt='Croqueta 2'
      />
      <SplitViewportImages
        leftSrc='/images/croquetas/8.jpg'
        rightSrc='/images/croquetas/12.jpg'
        leftAlt='Croqueta 3'
        rightAlt='Aperol botella'
      />
      <FullBackgroundHero
        imageSrc='/images/croquetas/4.jpg'
        wm={true}
        alt='Burger mano'
      />
      <FullBackgroundHero
        imageSrc='/images/croquetas/14.jpg'
        wm={false}
        alt='Tortilla'
      />
    </>
  )
}
