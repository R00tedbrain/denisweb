import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Fisioterapia y Quiropraxia',
    description: 'Técnicas manuales especializadas para aliviar el dolor y mejorar la movilidad',
    image: '/images/servicios/fisioquiro.png',
    href: '/servicios/fisioterapia'
  },
  {
    title: 'Rehabilitación Deportiva',
    description: 'Recuperación y prevención de lesiones para deportistas',
    image: '/images/servicios/rehabilitadeporte.png',
    href: '/servicios/rehabilitacion'
  },
  {
    title: 'Terapia con Ejercicios',
    description: 'Programas personalizados de ejercicios terapéuticos',
    image: '/images/servicios/ejercicios.png',
    href: '/servicios/ejercicios'
  }
];

export default function Services() {
  return (
    <section className="w-full bg-[#87d2d2] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Link href={service.href}>
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
