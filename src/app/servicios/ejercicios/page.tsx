import Image from 'next/image';
import Link from 'next/link';

export default function EjerciciosPage() {
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
              src="/images/servicios/ejercicios.png"
              alt="Terapia con Ejercicios"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Terapia con Ejercicios</h1>
            <p className="text-lg text-gray-700 mb-6">
              Programas personalizados de ejercicios terapéuticos diseñados para mejorar la movilidad, 
              aumentar la fuerza y restaurar la función corporal. Nuestro enfoque se centra en ejercicios 
              específicos adaptados a tus necesidades individuales.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              La terapia con ejercicios es fundamental en cualquier plan de rehabilitación, ya que ayuda 
              a recuperar la funcionalidad después de lesiones, mejora el rendimiento y previene 
              problemas futuros.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Beneficios de la terapia con ejercicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start">
              <span className="text-primary text-xl mr-3">✓</span>
              <div>
                <h3 className="font-bold mb-1">Aumento de la fuerza muscular</h3>
                <p className="text-gray-700">Fortalecimiento de músculos debilitados o atrofiados</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary text-xl mr-3">✓</span>
              <div>
                <h3 className="font-bold mb-1">Mejora de la flexibilidad</h3>
                <p className="text-gray-700">Aumento del rango de movimiento de articulaciones y tejidos</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary text-xl mr-3">✓</span>
              <div>
                <h3 className="font-bold mb-1">Reducción del dolor</h3>
                <p className="text-gray-700">Disminución de molestias crónicas y agudas</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary text-xl mr-3">✓</span>
              <div>
                <h3 className="font-bold mb-1">Mejor equilibrio y estabilidad</h3>
                <p className="text-gray-700">Prevención de caídas y mejora de la coordinación</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary text-xl mr-3">✓</span>
              <div>
                <h3 className="font-bold mb-1">Mayor resistencia física</h3>
                <p className="text-gray-700">Incremento de la capacidad cardiovascular y muscular</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary text-xl mr-3">✓</span>
              <div>
                <h3 className="font-bold mb-1">Promoción de la recuperación funcional</h3>
                <p className="text-gray-700">Rehabilitación más rápida y efectiva</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Nuestros programas de ejercicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Ejercicios de rehabilitación</h3>
              <p className="text-gray-700 mb-4">
                Programas diseñados para ayudar en la recuperación después de lesiones, 
                cirugías o condiciones médicas, restaurando la funcionalidad y reduciendo el dolor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Ejercicios de fortalecimiento</h3>
              <p className="text-gray-700 mb-4">
                Rutinas enfocadas en aumentar la fuerza muscular, especialmente 
                en áreas débiles o propensas a lesiones.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Ejercicios de estabilidad</h3>
              <p className="text-gray-700 mb-4">
                Programas centrados en mejorar el equilibrio y la coordinación, 
                especialmente importantes para prevenir caídas en personas mayores.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Ejercicios posturales</h3>
              <p className="text-gray-700 mb-4">
                Rutinas enfocadas en corregir malos hábitos posturales y prevenir 
                dolores asociados a largas horas sentado o de pie.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Ejercicios de movilidad</h3>
              <p className="text-gray-700 mb-4">
                Programas diseñados para mejorar la flexibilidad y el rango de 
                movimiento de articulaciones y tejidos circundantes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Ejercicios preventivos</h3>
              <p className="text-gray-700 mb-4">
                Rutinas enfocadas en prevenir lesiones futuras, especialmente 
                para deportistas o personas con trabajos físicamente exigentes.
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