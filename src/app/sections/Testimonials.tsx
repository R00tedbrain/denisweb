import Image from 'next/image';

const testimonials = [
  {
    name: 'María García',
    text: 'Gracias a los tratamientos, he recuperado la movilidad y puedo volver a hacer deporte.',
    image: '/images/testimonios/testimonio1.jpg'
  },
  {
    name: 'Juan Pérez',
    text: 'El equipo profesional y el trato personalizado han sido clave en mi recuperación.',
    image: '/images/testimonios/testimonio2.jpg'
  },
  {
    name: 'Ana Martínez',
    text: 'Excelente atención y resultados. Totalmente recomendado para cualquier problema físico.',
    image: '/images/testimonios/testimonio3.jpg'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary w-full" id="testimonials" style={{backgroundColor: '#87d2d2'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)] transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
