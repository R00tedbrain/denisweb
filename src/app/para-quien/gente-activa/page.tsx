import Image from 'next/image';
import Link from 'next/link';

export default function GenteActivaPage() {
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
              src="/images/tratamientos/genteactiva1.png"
              alt="Gente Activa"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Gente Activa</h1>
            <p className="text-lg text-gray-700 mb-6">
              Para los que necesitan mantener un cuerpo que responda a las exigencias diarias. Nuestros 
              servicios para personas activas están diseñados para quienes llevan un estilo de vida dinámico 
              y necesitan mantenerse en óptimas condiciones físicas.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Ofrecemos tratamientos personalizados que ayudan a mantener la movilidad, prevenir lesiones 
              y aliviar dolores causados por la actividad física cotidiana, el estrés o malas posturas.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Beneficios</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mejora de la postura y prevención de dolores crónicos</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Aumento de la flexibilidad y rango de movimiento</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Reducción del estrés muscular</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mayor energía y vitalidad en el día a día</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Prevención de lesiones comunes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mejora del descanso y calidad del sueño</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Tratamientos recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/fisioquiro.png"
                alt="Fisioterapia y Quiropraxia"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fisioterapia y Quiropraxia</h3>
                <p className="text-gray-700 mb-4">Técnicas manuales especializadas para aliviar el dolor y mejorar la movilidad</p>
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
                <p className="text-gray-700 mb-4">Programas personalizados de ejercicios para mantener un cuerpo activo y funcional</p>
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