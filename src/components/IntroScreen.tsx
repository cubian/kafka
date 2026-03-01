interface IntroScreenProps {
  onStart: () => void
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="screen-content">
      <h1 className="intro-title">The Play</h1>
      <p className="intro-description">
        An interactive experience. No prior knowledge required. Follow the
        prompts at your own pace.
      </p>
      <button className="btn-primary" onClick={onStart}>
        Begin
      </button>
    </div>
  )
}
