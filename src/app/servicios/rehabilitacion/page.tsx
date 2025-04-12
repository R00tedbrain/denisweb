import Image from 'next/image';
import Link from 'next/link';

export default function RehabilitacionPage() {
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
              src="/images/servicios/rehabilitadeporte.png"
              alt="Rehabilitación Deportiva"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Rehabilitación Deportiva</h1>
            <p className="text-lg text-gray-700 mb-6">
              Recuperación y prevención de lesiones para deportistas de todos los niveles. Nuestro 
              programa de rehabilitación deportiva está diseñado para ayudarte a recuperarte de 
              lesiones y volver a tu actividad deportiva lo antes posible.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Combinamos técnicas de terapia manual, ejercicios específicos y tecnología avanzada 
              para acelerar la recuperación y fortalecer tu cuerpo, reduciendo el riesgo de futuras lesiones.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Nuestro enfoque</h2>
          <p className="text-lg text-gray-700 mb-6">
            En nuestra clínica entendemos las necesidades específicas de los deportistas y las exigencias 
            de cada disciplina. Por eso, nuestro programa de rehabilitación deportiva incluye:
          </p>
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
            <li>Evaluación biomecánica completa</li>
            <li>Plan de tratamiento personalizado según el deporte practicado</li>
            <li>Terapia manual especializada</li>
            <li>Ejercicios de fortalecimiento progresivos</li>
            <li>Técnicas de recuperación acelerada</li>
            <li>Programa de prevención de lesiones</li>
            <li>Recomendaciones para el retorno seguro a la actividad</li>
          </ul>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Lesiones deportivas comunes que tratamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lesiones musculares</h3>
              <p className="text-gray-700 mb-4">
                Contracturas, elongaciones, roturas fibrilares y otras lesiones que afectan al tejido muscular.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lesiones ligamentosas</h3>
              <p className="text-gray-700 mb-4">
                Esguinces y distensiones en tobillos, rodillas, muñecas y otras articulaciones.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Tendinopatías</h3>
              <p className="text-gray-700 mb-4">
                Tendinitis, tendinosis y otras afecciones que afectan a los tendones como codo de tenista, 
                tendinitis aquílea o rotuliana.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lesiones de sobrecarga</h3>
              <p className="text-gray-700 mb-4">
                Problemas derivados del sobreuso como fascitis plantar, síndrome del túnel carpiano 
                o síndrome patelofemoral.
              </p>
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