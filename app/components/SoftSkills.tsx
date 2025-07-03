// components/SoftSkills.tsx

export default function SoftSkills() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center">
        <h2 className="text-6xl md:text-7xl font-bold text-dark-coffee leading-tight">
          Soft
          <br />
          Skills
        </h2>
        <p className="mt-4 text-2xl text-dark-coffee">
          que forman parte de quien soy
        </p>
      </div>

      <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-6">
          <div className="bg-twine text-dark-coffee rounded-xl py-6 text-xl font-medium text-center">
            Pensamiento creativo
          </div>
          <div className="bg-twine text-dark-coffee rounded-xl py-6 text-xl font-medium text-center">
            Pensamiento estratégico
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-twine text-dark-coffee rounded-xl py-6 text-xl font-medium text-center">
            Atención al detalle
          </div>
          <div className="bg-twine text-dark-coffee rounded-xl py-6 text-xl font-medium text-center">
            Adaptabilidad
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-twine text-dark-coffee rounded-xl py-6 text-xl font-medium text-center">
            Escucha activa
          </div>
          <div className="bg-twine text-dark-coffee rounded-xl py-6 text-xl font-medium text-center">
            Comunicación efectiva
          </div>
        </div>
      </div>
    </section>
  );
}
