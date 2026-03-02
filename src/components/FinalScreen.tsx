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

export function FinalScreen() {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState(MESSAGES[0])

  // Asymptotic approach to 97% — fast at first, imperceptibly slow near the end
  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      const remaining = 97 - current
      const increment = Math.max(remaining * 0.015, 0.001)
      current = Math.min(current + increment, 97)
      setProgress(current)
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
      <p className="final-subtitle">Enhorabuena, has completado todas las acciones. Tu puntuación es…</p>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <span className="progress-value">{Math.floor(progress)}%</span>

      {/* key swap triggers the CSS fade-in animation on each message change */}
      <p key={message} className="progress-message">
        {message}
      </p>
    </div>
  )
}
