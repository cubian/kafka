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
      const increment = Math.max(remaining * 0.05, 0.001)
      current = Math.min(current + increment, 97)
      setProgress(current)
    }, 100)
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
      <h2 className="final-title">Results</h2>
      <p className="final-subtitle">Your performance is being evaluated.</p>

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
