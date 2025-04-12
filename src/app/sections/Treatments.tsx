import Image from 'next/image';
import Link from 'next/link';

const treatments = [
  {
    title: 'Gente Activa',
    description: 'Para los que necesitan mantener un cuerpo que responda a las exigencias diarias',
    image: '/images/tratamientos/gente-activa.jpg',
    link: '/para-quien/gente-activa'
  },
  {
    title: 'Deportistas',
    description: 'Cuidado especializado para atletas y deportistas de todos los niveles',
    image: '/images/tratamientos/deportistas.jpg',
    link: '/para-quien/deportistas'
  },
  {
    title: 'Tercera Edad',
    description: 'Mantén una vida activa y saludable en tu mejor etapa',
    image: '/images/tratamientos/tercera-edad.jpg',
    link: '/para-quien/tercera-edad'
  },
  {
    title: 'Embarazadas',
    description: 'Cuidado especializado durante el embarazo y post-parto',
    image: '/images/tratamientos/embarazadas.jpg',
    link: '/para-quien/embarazadas'
  },
  {
    title: 'Niños',
    description: 'Cuidado especializado para el desarrollo saludable de los más pequeños',
    image: '/images/tratamientos/ninos.jpg',
    link: '/para-quien/ninos'
  }
];

export default function Treatments() {
  return (
    <section className="py-20 bg-gray-50" id="treatments">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          ¿Para quién?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Link
              href={treatment.link}
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {treatment.title}
                </h3>
                <p className="text-gray-600">
                  {treatment.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 