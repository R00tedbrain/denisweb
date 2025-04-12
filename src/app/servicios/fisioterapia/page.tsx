import Image from 'next/image';
import Link from 'next/link';

export default function FisioterapiaPage() {
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
              src="/DennysFisio/images/servicios/fisioquiro.png"
              alt="Fisioterapia y Quiropraxia"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Fisioterapia y Quiropraxia</h1>
            <p className="text-lg text-gray-700 mb-6">
              Técnicas manuales especializadas para aliviar el dolor y mejorar la movilidad. Nuestro 
              enfoque combina la fisioterapia tradicional con técnicas quiroprácticas para ofrecer un 
              tratamiento integral para diversas dolencias.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Mediante tratamientos específicos, trabajamos para restaurar la funcionalidad, reducir el dolor 
              y mejorar la calidad de vida de nuestros pacientes, siempre con técnicas seguras y efectivas.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">¿En qué consiste?</h2>
          <p className="text-lg text-gray-700 mb-6">
            La fisioterapia y quiropraxia son disciplinas complementarias que se centran en el diagnóstico, 
            tratamiento y prevención de trastornos del sistema musculoesquelético. En nuestra clínica 
            utilizamos una combinación de ambas para proporcionar el mejor tratamiento posible:
          </p>
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
            <li>Manipulaciones articulares para restaurar la movilidad</li>
            <li>Terapia manual para aliviar la tensión muscular</li>
            <li>Técnicas de movilización para mejorar la función articular</li>
            <li>Ejercicios terapéuticos específicos</li>
            <li>Consejos ergonómicos y posturales</li>
          </ul>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Condiciones que tratamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Dolor de espalda y cuello</h3>
              <p className="text-gray-700 mb-4">
                Tratamos dolores agudos y crónicos en la columna vertebral, desde cervicalgias 
                y lumbalgias hasta hernias discales y ciáticas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Problemas articulares</h3>
              <p className="text-gray-700 mb-4">
                Abordamos dolencias en articulaciones como hombros, rodillas, tobillos y muñecas, 
                mejorando su movilidad y reduciendo la inflamación.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lesiones deportivas</h3>
              <p className="text-gray-700 mb-4">
                Recuperación de lesiones músculo-tendinosas como esguinces, tendinitis, 
                contracturas y roturas fibrilares.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Problemas posturales</h3>
              <p className="text-gray-700 mb-4">
                Corregimos desviaciones posturales como escoliosis, hiperlordosis, 
                cifosis y otros desequilibrios.
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