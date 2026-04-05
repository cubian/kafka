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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let stream: MediaStream
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' } })
      .then((s) => {
        stream = s
        const video = videoRef.current!
        video.srcObject = s
        video.play().catch(() => {})
      })
      .catch(() => setError('No se ha podido acceder a la cámara.'))
    return () => {
      stream?.getTracks().forEach((t) => t.stop())
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current!
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const draw = (t: number) => {
      if (video.readyState >= 2 && video.videoWidth > 0) {
        const w = video.videoWidth
        const h = video.videoHeight
        if (canvas.width !== w) { canvas.width = w; canvas.height = h }

        const time = t * 0.001
        const sliceH = 3

        ctx.clearRect(0, 0, w, h)

        for (let y = 0; y < h; y += sliceH) {
          const offsetX = Math.sin(y * 0.035 + time * 1.4) * 14 + Math.sin(y * 0.018 + time * 0.6) * 9
          // draw mirrored slice: flip x by drawing from right to left
          ctx.save()
          ctx.translate(w, 0)
          ctx.scale(-1, 1)
          ctx.drawImage(video, 0, y, w, sliceH, offsetX, y, w, sliceH)
          ctx.restore()
        }
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="camera-container">
      <video ref={videoRef} autoPlay playsInline muted style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} />
      {error ? (
        <p className="step-description">{error}</p>
      ) : (
        <canvas ref={canvasRef} className="camera-feed" />
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
