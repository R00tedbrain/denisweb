import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'María López',
    image: '/images/testimonios/testimonio1.png',
    text: 'El tratamiento ha sido increíble. Después de meses de dolor, puedo volver a hacer vida normal. Recomendaría este centro a cualquiera que sufra problemas de espalda.',
    rating: 5
  },
  {
    name: 'Juan Rodríguez',
    image: '/images/testimonios/testimonio2.png',
    text: 'Acudí tras una lesión deportiva y el equipo ha sido muy profesional. La mejoría fue notable desde las primeras sesiones. Sin duda, seguiré confiando en ellos.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    image: '/images/testimonios/testimonio3.png',
    text: 'Excelente atención personalizada. Me explicaron todo el proceso de tratamiento y resolvieron todas mis dudas. Los resultados hablan por sí solos.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
