import {
  ChartColumnBig,
  SwitchCamera,
  HardDriveUpload,
  Aperture
} from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Creación de contenido para redes sociales',
    description:
      'Realizo fotografías y diseños pensados para redes, logrando un estilo visual atractivo, coherente y auténtico.',
    color: 'bg-c1',
    icon: <SwitchCamera size={40} />
  },
  {
    id: '02',
    title: 'Ilustración digital',
    description:
      'Dibujo ideas que conectan: desde detalles simples hasta composiciones creativas para dar un toque único a tus proyectos.',
    color: 'bg-c2',
    icon: <ChartColumnBig size={40} />
  },
  {
    id: '03',
    title: 'Diseño Web',
    description:
      'Diseño páginas claras y funcionales que combinan estética con una navegación sencilla y agradable.',
    color: 'bg-c4',
    icon: <HardDriveUpload size={40} />
  },
  {
    id: '04',
    title: 'Identidad visual y branding',
    description:
      'Desarrollo todo lo necesario para que tu proyecto tenga una imagen sólida, coherente y con personalidad propia.',
    color: 'bg-c3',
    icon: <Aperture size={40} />
  }
]

export default function ServicesGrid() {
  return (
    <section className='container mx-auto flex flex-col gap-4 px-4 py-64 md:flex-row'>
      {services.map(s => (
        <div
          key={s.id}
          className={`flex flex-col justify-between rounded-xl ${s.color} w-full p-6 shadow-md md:w-1/4`}
        >
          {s.icon}

          <div className='mt-6'>
            <p className='text-sm font-medium text-gray-600'>{s.id}</p>
            <h3 className='text-2xl font-semibold text-gray-900'>{s.title}</h3>
            {s.description && (
              <p className='mt-2 text-sm text-gray-700'>{s.description}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
