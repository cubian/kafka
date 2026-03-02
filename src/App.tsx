import { useState } from 'react'
import { STEPS } from './config/steps'
import { IntroScreen } from './components/IntroScreen'
import { StepScreen } from './components/StepScreen'
import { FinalScreen } from './components/FinalScreen'

type Screen = 'intro' | 'step' | 'final'

const FADE_DURATION = 300 // must match --transition-fade in theme.css

export default function App() {
  // currentStep is intentionally not persisted — page refresh always resets to intro
  const [screen, setScreen] = useState<Screen>('intro')
  const [stepIndex, setStepIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const transition = (fn: () => void) => {
    setVisible(false)
    setTimeout(() => {
      fn()
      setVisible(true)
    }, FADE_DURATION)
  }

  const handleStart = () => {
    transition(() => {
      setStepIndex(0)
      setScreen('step')
    })
  }

  const handleAdvance = () => {
    transition(() => {
      if (stepIndex < STEPS.length - 1) {
        setStepIndex((i) => i + 1)
      } else {
        setScreen('final')
      }
    })
  }

  return (
    <div className="app">
      <div className={`fade-wrapper ${visible ? 'fade-in' : 'fade-out'}`}>
        {screen === 'intro' && <IntroScreen onStart={handleStart} />}

        {screen === 'step' && (
          <StepScreen
            key={stepIndex}
            step={STEPS[stepIndex]}
            stepNumber={stepIndex + 1}
            totalSteps={STEPS.length}
            onAdvance={handleAdvance}
          />
        )}

        {screen === 'final' && <FinalScreen />}
      </div>
    </div>
  )
}
