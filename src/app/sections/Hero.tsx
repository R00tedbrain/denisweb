import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full h-[70vh] md:h-[90vh] bg-cover bg-center relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-100/70"></div>
      
      {/* Imagen de fondo */}
      <div className="absolute right-0 top-[20%] h-3/5 w-2/5 hidden md:block">
        <Image 
          src="/images/dennis1.png" 
          alt="Dennys Calizaya" 
          fill 
          className="object-contain object-right"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">
            Recupera tu movilidad con Dennys
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-10">
            Recupera tu bienestar con tratamientos personalizados y atención profesional
          </p>
          <div className="mb-4">
            <a
              href="https://wa.me/34622859524?text=Hola%20Dennys,%20me%20gustaría%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-full inline-block font-medium hover:bg-primary-dark transition-colors"
            >
              Reserva tu cita
            </a>
          </div>
          <p className="text-primary font-medium mt-4">
            Desplazamiento a domicilio en toda la provincia de Barcelona
          </p>
        </div>
      </div>
    </section>
  );
}
