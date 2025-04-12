import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/clinica.png"
              alt="Nuestra clínica"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Sobre nuestra clínica
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En nuestra clínica de fisioterapia, nos dedicamos a proporcionar un cuidado personalizado 
              y de alta calidad a cada uno de nuestros pacientes. Con años de experiencia y un equipo 
              altamente cualificado, nos comprometemos a ayudarte a recuperar tu bienestar físico.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Utilizamos las técnicas más avanzadas y un enfoque integral para tratar diversas 
              condiciones, asegurando que cada tratamiento se adapte a las necesidades específicas 
              de nuestros pacientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-48 w-full bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/clinica/instalaciones1.png"
                alt="Nuestras instalaciones"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
              Instalaciones modernas
            </h3>
            <p className="text-gray-700">
              Contamos con instalaciones completamente equipadas y un ambiente 
              acogedor para garantizar tu comodidad durante el tratamiento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-48 w-full bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/clinica/equipopro.png"
                alt="Nuestro equipo"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
              Equipo profesional
            </h3>
            <p className="text-gray-700">
              Nuestro equipo de fisioterapeutas está altamente cualificado y 
              en constante formación para ofrecerte el mejor servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
