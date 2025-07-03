import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-twine border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-dark-coffee text-sm pt-12 items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/yan-designer-logo.png"
            alt="Yusti Designer Logo"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div className="justify-center text-center">
          <p>HELLO@YUSTICONCEPT.COM</p>
          <p>+34 643 16 96 08</p>
          <p>MADRID</p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col text-center md:text-right space-y-1">
          <a href="/about" className="hover:underline">
            ABOUT
          </a>
          <a href="/services" className="hover:underline">
            SERVICES
          </a>
          <a href="/projects" className="hover:underline">
            PROJECTS
          </a>
          <a href="/contact" className="mt-4 hover:underline">
            CONTACT
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center mt-10 text-dark-coffee text-xs">
        ALL RIGHTS RESERVED
      </div>
      <div className="w-full h-12 bg-[#301E00] mt-6"></div>
    </footer>
  );
}
