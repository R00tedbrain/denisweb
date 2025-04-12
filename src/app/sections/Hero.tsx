import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 relative w-full max-w-xl mx-auto h-[300px]">
          <Image
            src="/images/dennis1.png"
            alt="Dennys Calizaya"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
          Recupera tu movilidad con Dennys
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Recupera tu bienestar con tratamientos personalizados y atención profesional
        </p>
        <a
          href="https://wa.me/34622859524?text=Hola%20Dennys,%20me%20gustaría%20reservar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors"
        >
          Reserva tu cita
        </a>
      </div>
    </section>
  );
}
