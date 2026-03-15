import { useState, useEffect } from 'react'

const MESSAGES = [
  'Calculating...',
  'Almost there...',
  'Processing your results...',
  'Analysing your performance...',
  'Compiling data...',
  'Finalising score...',
  'Cross-referencing responses...',
]

const FADE_DURATION = 3000 // ms over which elements fade after the 10s wait

export function FinalScreen() {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState(MESSAGES[0])
  const [fadeOpacity, setFadeOpacity] = useState(1)

  // Asymptotic approach to 97%
  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      const remaining = 97 - current
      const increment = Math.max(remaining * 0.015, 0.05)
      current = Math.min(current + increment, 97)
      setProgress(current)

      if (current >= 96.99) {
        clearInterval(interval)
        // Wait 10 seconds, then fade everything out over FADE_DURATION
        setTimeout(() => {
          const start = performance.now()
          function animateFade(now: number) {
            const elapsed = now - start
            const opacity = Math.max(1 - elapsed / FADE_DURATION, 0)
            setFadeOpacity(opacity)
            if (opacity > 0) requestAnimationFrame(animateFade)
          }
          requestAnimationFrame(animateFade)
        }, 10000)
      }
    }, 150)
    return () => clearInterval(interval)
  }, [])

  // Cycle messages every 2.5 seconds
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % MESSAGES.length
      setMessage(MESSAGES[i])
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="screen-content">
      <p className="final-subtitle" style={{ opacity: fadeOpacity }}>
        Enhorabuena, has completado todas las acciones. Tu puntuación es…
      </p>

      <div className="progress-container" style={{ opacity: fadeOpacity }}>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <span className="progress-value">{Math.floor(progress)}%</span>

      <p key={message} className="progress-message" style={{ opacity: fadeOpacity, animation: fadeOpacity < 1 ? 'none' : undefined }}>
        {message}
      </p>
    </div>
  )
}
