import React from 'react';

export default function QuiropracticaPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Que es la...
        </h1>
        <h2 className="text-5xl font-bold text-center mb-16">
          QUIROPRÁCTICA
        </h2>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            La quiropráctica es la profesión que se ocupa de corregir y prevenir las alteraciones del sistema músculo-esquelético, y los efectos que producen estos desórdenes en la función del sistema nervioso y en la salud en general. Pone especial énfasis en la capacidad inherente de curación del organismo y en el predominio del sistema nervioso en relación con los demás sistemas en cuanto al control del equilibrio general del cuerpo humano. Las correcciones son fundamentalmente manuales, siendo característica única de nuestra profesión el ajuste vertebral manual específico.
          </p>

          <div className="relative h-96 mb-12">
            <img
              src="/images/quiropractica-columna.jpg"
              alt="Diagrama del sistema nervioso"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold mb-6">Que es una SUBLUXACIÓN?</h2>

          <p className="text-lg mb-8">
            Una subluxación vertebral se da cuando una o más vértebras espinales pierden su alineación. Ello produce una interferencia en la médula espinal o los nervios espinales que se encuentran ahí y afecta directamente al sistema nervioso y posiblemente las áreas del cuerpo relacionadas y que están controladas por el sistema nervioso.
          </p>

          <p className="text-lg mb-8">
            En el 90% de los casos la subluxación no produce dolor físico ya que sólo un 10% de los nervios están asociados a fibras de dolor. Sin embargo su efecto dañino es inmediato debilitando el cuerpo y su rendimiento a todos los niveles.
          </p>

          <div className="relative h-96 mb-12">
            <img
              src="/images/tratamiento-quiropractico.jpg"
              alt="Tratamiento quiropráctico"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mb-6">De DONDE vienen las Subluxaciones?</h2>

          <h3 className="text-2xl font-semibold mb-4">Físico</h3>
          <p className="text-lg mb-8">
            El más fácil de entender. Relacionado directamente a las caídas, posturas laborales, malos hábitos posturales, sobreesfuerzos deportivos sin control, etc. No debemos olvidar que el propio parto ya es un estrés físico en los primeros días de nuestra vida, como las caídas al aprender a caminar o aprender a montar en bicicleta
          </p>

          <h3 className="text-2xl font-semibold mb-4">Químico</h3>
          <p className="text-lg mb-8">
            "Somos lo que comemos" Debemos tomar conciencia de que todo lo que le damos al cuerpo puede a corto o largo plazo tener una repercusión importante en nuestro organismo. Este estrés va relacionado con la alimentación, la deshidratación, el alcohol, el tabaco, la polución, efectos secundarios de vacunas, tomar demasiados medicamentos, etc...Todos estos comportamientos disminuyen notablemente el funcionamiento del sistema nervioso.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Emocional</h3>
          <p className="text-lg mb-8">
            Un accidente, una agresión, una separación, la muerte de un ser querido, el estrés del trabajo etc... causan un bloqueo importante en la estructura y pueden condicionar vuestro comportamiento y salud de por vida. La acumulación de estrés emocional hace funcionar excesivamente el sistema nervioso simpático el cual lleva la sangre a los músculos pero no al cerebro! Llevándonos a actuar por inercia sin pensar, estar en lucha constante con nosotros mismos. En este estado es el miedo, la frustración y la culpabilidad quienes guían nuestra vida. Según muchos especialistas, este tipo de comportamiento puede ser una causa importante de cáncer.
          </p>
        </div>
      </div>
    </div>
  );
} 