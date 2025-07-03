// components/DemasiadoCuriosa.tsx

export default function DemasiadoCuriosa() {
  return (
    <section className="flex justify-center items-center min-h-[540px] py-12 px-2 bg-white">
      <div className="bg-[#392200] rounded-3xl w-full max-w-6xl p-8 md:p-16 flex flex-col md:flex-row gap-10">
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Demasiado
            <br />
            curiosa
          </h2>
          <p className="mt-6 text-white text-lg">
            como para hacer <span className="font-bold">una sola cosa</span>,
            <br />
            es por eso que <span className="font-bold">domino:</span>
          </p>
          <a
            href="#"
            className="inline-block mt-8 bg-dark-coffee text-coffee font-bold rounded-md px-8 py-3 text-base hover:bg-dark-coffee hover:text-white transition"
          >
            CURRICULUM VITAE
          </a>
        </div>

        {/* Cuadricula */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="rounded-2xl bg-twine h-32 md:h-40 flex items-center justify-center text-dark-coffee font-bold text-xl md:text-2xl text-center">
            Branding
          </div>
          <div className="rounded-2xl bg-twine h-32 md:h-40 flex items-center justify-center text-dark-coffee font-bold text-xl md:text-2xl text-center">
            Fotografía
          </div>
          <div className="rounded-2xl bg-twine h-32 md:h-40 flex items-center justify-center text-dark-coffee font-bold text-xl md:text-2xl text-center">
            Social media
          </div>
          <div className="rounded-2xl bg-twine h-32 md:h-40 flex items-center justify-center text-dark-coffee font-bold text-xl md:text-2xl text-center">
            Editorial
          </div>
        </div>
      </div>
    </section>
  );
}
