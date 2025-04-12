import React from 'react';

export default function ForWho() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">¿Para quién?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Gente Activa */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <a href="/para-quien/gente-activa">
              <img 
                src="/images/tratamientos/genteactiva1.png" 
                alt="Gente Activa" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Gente Activa</h3>
                <p className="text-gray-700">Para los que necesitan mantener un cuerpo que responda a las exigencias diarias</p>
              </div>
            </a>
          </div>
          
          {/* Deportistas */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <a href="/para-quien/deportistas">
              <img 
                src="/images/tratamientos/deportistas1.png" 
                alt="Deportistas" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Deportistas</h3>
                <p className="text-gray-700">Cuidado especializado para atletas y deportistas de todos los niveles</p>
              </div>
            </a>
          </div>
          
          {/* Tercera Edad */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <a href="/para-quien/tercera-edad">
              <img 
                src="/images/tratamientos/terceraedad.png" 
                alt="Tercera Edad" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tercera Edad</h3>
                <p className="text-gray-700">Mantén una vida activa y saludable en tu mejor etapa</p>
              </div>
            </a>
          </div>
          
          {/* Embarazadas */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <a href="/para-quien/embarazadas">
              <img 
                src="/images/tratamientos/embarazadas.png" 
                alt="Embarazadas" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Embarazadas</h3>
                <p className="text-gray-700">Atención especializada durante el embarazo y post-parto</p>
              </div>
            </a>
          </div>
          
          {/* Niños */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <a href="/para-quien/ninos">
              <img 
                src="/images/tratamientos/niños.png" 
                alt="Niños" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Niños</h3>
                <p className="text-gray-700">Tratamientos adaptados para los más pequeños</p>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
} 