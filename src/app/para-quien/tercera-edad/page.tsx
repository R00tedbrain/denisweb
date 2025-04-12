import Image from 'next/image';
import Link from 'next/link';

export default function TerceraEdadPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline mb-8 inline-block">
            ← Volver a inicio
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <Image
              src="/images/tratamientos/terceraedad.png"
              alt="Tercera Edad"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Tercera Edad</h1>
            <p className="text-lg text-gray-700 mb-6">
              Mantén una vida activa y saludable en tu mejor etapa. Nuestros servicios para personas 
              mayores están diseñados para mejorar la calidad de vida, reducir dolores y mantener la 
              movilidad e independencia.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Con tratamientos adaptados específicamente a las necesidades de las personas mayores, 
              trabajamos para mejorar la autonomía, reducir los dolores articulares y musculares, y 
              prevenir complicaciones asociadas al envejecimiento.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Beneficios</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mejora de la movilidad y capacidad funcional</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Reducción de dolores articulares y musculares</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mayor independencia en actividades diarias</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mejora del equilibrio y prevención de caídas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Menor dependencia de medicamentos para el dolor</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Aumento de la vitalidad y bienestar general</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Tratamientos recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/fisioquiro.png"
                alt="Fisioterapia Geriátrica"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fisioterapia Geriátrica</h3>
                <p className="text-gray-700 mb-4">Tratamientos suaves adaptados a las necesidades específicas de personas mayores</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/ejercicios.png"
                alt="Ejercicios Terapéuticos"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Ejercicios Terapéuticos</h3>
                <p className="text-gray-700 mb-4">Programas de movimiento suave para mantener la movilidad y prevenir rigidez</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <Link 
            href="/" 
            className="bg-primary text-white px-8 py-3 rounded-full inline-block font-medium hover:bg-primary-dark transition-colors"
          >
            Reserva tu cita ahora
          </Link>
        </div>
      </div>
    </main>
  );
} 