import React from 'react';
import Link from 'next/link';

export default function Treatments() {
  const categories = [
    {
      title: "Gente activa",
      image: '/images/tratamientos/genteactiva1.png',
      description: "Para los que necesitan mantener un cuerpo que responda a las exigencias diarias",
      href: "/para-quien/gente-activa"
    },
    {
      title: "Deportistas",
      image: '/images/tratamientos/deportistas1.png',
      description: "Cuidado especializado para atletas y deportistas de todos los niveles",
      href: "/para-quien/deportistas"
    },
    {
      title: "Tercera Edad",
      image: '/images/tratamientos/terceraedad.png',
      description: "Mantén una vida activa y saludable en tu mejor etapa",
      href: "/para-quien/tercera-edad"
    },
    {
      title: "Embarazadas",
      image: '/images/tratamientos/embarazadas.png',
      description: "Atención especializada durante el embarazo y post-parto",
      href: "/para-quien/embarazadas"
    },
    {
      title: "Niños",
      image: '/images/tratamientos/niños.png',
      description: "Tratamientos adaptados para los más pequeños",
      href: "/para-quien/ninos"
    }
  ];

  return (
    <section className="w-full bg-background py-16" id="tratamientos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-white mb-12">Nuestros Tratamientos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="mb-4">{category.description}</p>
                <Link href={category.href} className="text-primary hover:text-primary-dark">
                  Saber más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 