import Image from 'next/image';
import Link from 'next/link';

export default function DeportistasPage() {
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
              src="/images/tratamientos/deportistas1.png"
              alt="Deportistas"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Deportistas</h1>
            <p className="text-lg text-gray-700 mb-6">
              Cuidado especializado para atletas y deportistas de todos los niveles. Nuestros servicios 
              están diseñados específicamente para optimizar el rendimiento deportivo y acelerar la 
              recuperación de lesiones.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Tanto si eres un deportista profesional como aficionado, ofrecemos tratamientos 
              personalizados que te ayudarán a mantener tu cuerpo en óptimas condiciones, prevenir 
              lesiones y recuperarte más rápidamente cuando éstas ocurren.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Beneficios</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Recuperación acelerada de lesiones deportivas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mejora del rendimiento deportivo</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Prevención de lesiones recurrentes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mayor rango de movimiento y flexibilidad</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Reducción del tiempo de recuperación entre entrenamientos</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Tratamiento especializado según el tipo de deporte</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Tratamientos recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/rehabilitadeporte.png"
                alt="Rehabilitación Deportiva"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Rehabilitación Deportiva</h3>
                <p className="text-gray-700 mb-4">Recuperación y prevención de lesiones específicas para deportistas</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/fisioquiro.png"
                alt="Fisioterapia Deportiva"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fisioterapia Deportiva</h3>
                <p className="text-gray-700 mb-4">Técnicas especializadas para optimizar el rendimiento y prevenir lesiones</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/ejercicios.png"
                alt="Terapia con Ejercicios"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Terapia con Ejercicios</h3>
                <p className="text-gray-700 mb-4">Programas personalizados para fortalecer áreas específicas según tu deporte</p>
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