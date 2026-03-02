import { useState } from 'react'
import type { Step } from '../config/steps'

interface StepScreenProps {
  step: Step
  stepNumber: number
  totalSteps: number
  onAdvance: () => void
}

export function StepScreen({ step, onAdvance }: StepScreenProps) {
  const [inputValue, setInputValue] = useState('')
  const type = step.type ?? 'button'

  return (
    <div className="screen-content">
      <p className="step-description">{step.description}</p>

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
            Continue
          </button>
        </div>
      )}
    </div>
  )
}
