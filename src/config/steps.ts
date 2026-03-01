export type StepType = 'button' | 'choice' | 'text-input'

export interface Step {
  id: string
  title: string
  description: string
  type?: StepType
  choices?: [string, string]
}

export const STEPS: Step[] = [
  {
    id: 'preparation',
    title: 'Preparation',
    description:
      'Find a comfortable position. Make sure you have enough space around you. This experience works best when you are present and unhurried.',
    type: 'button',
  },
  {
    id: 'role',
    title: 'Choose Your Role',
    description:
      'Every performance requires a perspective. For tonight, which role calls to you?',
    type: 'choice',
    choices: ['The Observer', 'The Participant'],
  },
  {
    id: 'name',
    title: 'Your Character',
    description:
      'Every character needs a name. What will yours be for this evening?',
    type: 'text-input',
  },
  {
    id: 'stage',
    title: 'The Stage',
    description:
      'Close your eyes for a moment. Imagine an empty stage. A single spotlight cuts through the dark. Someone has left something behind. You are the only one who can see it.',
    type: 'button',
  },
  {
    id: 'conflict',
    title: 'The Conflict',
    description:
      'A stranger steps into the light and hands you an envelope. It has your name on it. What do you do?',
    type: 'choice',
    choices: ['Open it', 'Walk away'],
  },
  {
    id: 'reveal',
    title: 'The Reveal',
    description:
      'Whatever choice you made, something has shifted. In one sentence, what did the envelope contain?',
    type: 'text-input',
  },
  {
    id: 'resolution',
    title: 'The Resolution',
    description:
      'You have made your choices. The audience has been watching. The lights begin to dim. Take a breath. The play is almost over.',
    type: 'button',
  },
]
