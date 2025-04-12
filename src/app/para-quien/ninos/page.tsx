import Image from 'next/image';
import Link from 'next/link';

export default function NinosPage() {
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
              src="/images/tratamientos/ninos.png"
              alt="Niños"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Niños</h1>
            <p className="text-lg text-gray-700 mb-6">
              Tratamientos adaptados para los más pequeños. Nuestros servicios pediátricos están 
              diseñados específicamente para atender las necesidades de desarrollo, postura y movilidad 
              de bebés, niños y adolescentes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Los tratamientos para niños son suaves, seguros y divertidos, creando una experiencia 
              positiva que les ayuda a desarrollar hábitos saludables desde temprana edad y a prevenir 
              problemas posturales.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Beneficios</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Apoyo al desarrollo físico saludable</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Prevención de problemas posturales</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mejora de la concentración y aprendizaje</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Tratamiento de problemas específicos de la infancia</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Fortalecimiento del sistema inmunológico</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Promoción de hábitos saludables desde temprana edad</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Tratamientos recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/servicios/fisioquiro.png"
                alt="Fisioterapia Pediátrica"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fisioterapia Pediátrica</h3>
                <p className="text-gray-700 mb-4">Técnicas suaves y juegos terapéuticos adaptados a cada etapa del desarrollo</p>
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
                <p className="text-gray-700 mb-4">Programas divertidos que mejoran la postura, coordinación y desarrollo motor</p>
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