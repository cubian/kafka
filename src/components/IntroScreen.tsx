interface IntroScreenProps {
  onStart: () => void
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="screen-content">
      <h1 className="intro-title">La Metamorfosis</h1>
      <p className="intro-description">
        Bienvenidx al umbral. Tu cuerpo y tu entorno serán tu escenario. Durante los próximos 10 minutos, cada acción que hagas cuenta. Intenta completar tantas como puedas. Tu puntuación se registrará automáticamente y la primera persona en alcanzar el máximo número de acciones recibirá una recompensa. Cuando estés listx para empezar, pulsa el botón.
      </p>
      <button className="btn-primary" onClick={onStart}>
        Listx
      </button>
    </div>
  )
}
