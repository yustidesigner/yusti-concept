import Image from "next/image";

export default function Contacto() {
  return (
    <section className="bg-white py-10">
      {/* Imagen y texto arriba */}
      <div className="relative rounded-t-[140px] md:rounded-t-[160px] overflow-hidden h-[540px] md:h-[720px] flex items-center justify-center">
        <Image
          src="/images/avion.jpg"
          alt="Fondo colaboración"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            ¿<span className="font-bold">Trabajamos</span>{" "}
            <span className="font-light">Juntos?</span>
          </h2>
        </div>
      </div>

      {/* Caja de contacto */}
      <div className="relative z-10 max-w-4xl mx-auto -mt-16 md:-mt-72 bg-[#392200] rounded-2xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row gap-8">
        {/* Columna izquierda */}
        <div className="flex-1 flex flex-col items-center md:items-start relative">
          <h3 className="text-[#b9923a] text-2xl md:text-3xl font-bold mb-3 md:mb-4 ml-1 md:ml-2">
            CONTACTO
          </h3>
          <div className="relative w-full h-52 md:h-96 rounded-xl overflow-hidden">
            {/* Imagen de fondo */}
            <Image
              src="/images/avion.jpg"
              alt="Foto mia matik con equipos y sonriendo"
              fill
              className="object-cover"
              style={{ opacity: 0.38 }}
            />
            {/* Overlay beige */}
            <div className="absolute inset-0 bg-[#ffe4b8] opacity-80" />
            {/* Texto encima */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#a07d3a] text-center text-lg font-semibold leading-snug">
                foto mia matik
                <br />
                con equipos y<br />
                sonriendo
              </span>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-end mb-2">
            <span className="text-[#b9923a] font-bold">@YUSTICONCEPT</span>
          </div>
          <form className="flex flex-col gap-12">
            <label className="sr-only">NAME</label>
            <input
              type="text"
              className="bg-transparent border-b border-[#b9923a] focus:outline-none text-white placeholder-[#b9923a] text-lg"
              placeholder="Your name"
            />

            <label className="sr-only">LAST NAME</label>
            <input
              type="text"
              className="bg-transparent border-b border-[#b9923a] focus:outline-none text-white placeholder-[#b9923a] text-lg"
              placeholder="Your last name"
            />

            <label className="sr-only">PHONE</label>
            <input
              type="tel"
              className="bg-transparent border-b border-[#b9923a] focus:outline-none text-white placeholder-[#b9923a] text-lg"
              placeholder="Your phone"
            />

            <label className="sr-only">MESSAGE</label>
            <textarea
              rows={3}
              className="bg-[#705629] rounded-md p-2 text-white text-lg focus:outline-none resize-none"
              placeholder="Your message"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
