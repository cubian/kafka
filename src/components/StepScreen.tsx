import { useState, useEffect, useRef } from 'react'
import type { Step } from '../config/steps'

interface StepScreenProps {
  step: Step
  stepNumber: number
  totalSteps: number
  onAdvance: () => void
}

function CameraView({ onAdvance }: { onAdvance: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let stream: MediaStream
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' } })
      .then((s) => {
        stream = s
        if (videoRef.current) videoRef.current.srcObject = s
      })
      .catch(() => setError('No se ha podido acceder a la cámara.'))
    return () => stream?.getTracks().forEach((t) => t.stop())
  }, [])

  return (
    <div className="camera-container">
      {/* SVG filter definition — invisible, just declares the distortion */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="wave-distort" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="turbulence" baseFrequency="0.012 0.025" numOctaves="3" result="noise">
              <animate
                attributeName="baseFrequency"
                values="0.01 0.02; 0.02 0.045; 0.01 0.02"
                dur="7s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {error ? (
        <p className="step-description">{error}</p>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="camera-feed"
          style={{ filter: 'url(#wave-distort)' }}
        />
      )}
      <button className="btn-primary" onClick={onAdvance}>
        Siguiente
      </button>
    </div>
  )
}

export function StepScreen({ step, onAdvance }: StepScreenProps) {
  const [inputValue, setInputValue] = useState('')
  const type = step.type ?? 'button'

  return (
    <div className="screen-content">
      <p className="step-description">{step.description}</p>

      {type === 'camera' && <CameraView onAdvance={onAdvance} />}

      {type === 'button' && (
        <button className="btn-primary" onClick={onAdvance}>
          Siguiente
        </button>
      )}

      {type === 'choice' && step.choices && (
        <div className="choice-group">
          <button className="btn-choice" onClick={onAdvance}>
            {step.choices[0]}
          </button>
          <button className="btn-choice" onClick={onAdvance}>
            {step.choices[1]}
          </button>
        </div>
      )}

      {type === 'text-input' && (
        <div className="input-group">
          <input
            className="text-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
            autoFocus
          />
          <button
            className="btn-primary"
            onClick={onAdvance}
            disabled={inputValue.trim() === ''}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}
