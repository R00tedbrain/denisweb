import Image from 'next/image';
import Link from 'next/link';

export default function EmbarazadasPage() {
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
              src="/images/tratamientos/embarazadas.png"
              alt="Embarazadas"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Embarazadas</h1>
            <p className="text-lg text-gray-700 mb-6">
              Atención especializada durante el embarazo y post-parto. Nuestros servicios están diseñados 
              para aliviar las molestias comunes durante el embarazo y ayudar en la recuperación después 
              del parto.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Durante el embarazo, el cuerpo experimenta numerosos cambios que pueden causar molestias 
              como dolor de espalda, ciática, dolor pélvico y más. Nuestros tratamientos suaves y seguros 
              te ayudarán a sentirte mejor durante esta etapa especial.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Beneficios</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Alivio del dolor lumbar y pélvico</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Reducción de la ciática y dolores nerviosos</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mejora de la postura durante el embarazo</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Preparación física para el parto</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Recuperación más rápida después del parto</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Reducción de náuseas y molestias</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Tratamientos recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/fisioquiro.png"
                alt="Fisioterapia Prenatal"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fisioterapia Prenatal</h3>
                <p className="text-gray-700 mb-4">Técnicas seguras adaptadas a cada etapa del embarazo</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/ejercicios.png"
                alt="Ejercicios Preparto"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Ejercicios Preparto</h3>
                <p className="text-gray-700 mb-4">Programas específicos para preparar el cuerpo para el parto</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/rehabilitadeporte.png"
                alt="Recuperación Postparto"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Recuperación Postparto</h3>
                <p className="text-gray-700 mb-4">Tratamientos para ayudar al cuerpo a recuperarse después del parto</p>
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