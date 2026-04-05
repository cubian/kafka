interface IntroScreenProps {
  onStart: () => void
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="screen-content">
      <h1 className="intro-title">La Metamorfosis</h1>
      <p className="intro-description">
        Bienvenidx a este espacio. A partir de ahora tu cuerpo y tu entorno serán tu escenario. Durante los próximos 10 minutos, cada acción que hagas cuenta. Intenta completar todas las acciones de la mejor manera posible y tómate el tiempo que necesites para hacerlo bien. Tu puntuación se registrará automáticamente en función de los puntos que acumules. Cuando estés listx para empezar, pulsa el botón.
      </p>
      <button className="btn-primary" onClick={onStart}>
        Listx
      </button>
    </div>
  )
}
