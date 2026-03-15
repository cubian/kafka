export type StepType = 'button' | 'choice' | 'text-input' | 'camera'

export interface Step {
  id: string
  description: string
  type?: StepType
  choices?: [string, string]
}

export const STEPS: Step[] = [
  {
    id: 'step-1',
    description: 'Camina durante 30 segundos dando pasos muy pequeños, como si tu cuerpo no respondiera bien y tuvieras que reaprender a moverte.',
    type: 'button',
  },
  {
    id: 'step-2',
    description: 'Camina muy lento hasta la pared más cercana y tócala con la frente, como si intentaras entender los límites de tu habitación.',
    type: 'button',
  },
  {
    id: 'step-3',
    description: 'Siéntate en el suelo y mueve solo los hombros, como si tu cuerpo intentara bailar pero ya no recordara cómo hacerlo.',
    type: 'button',
  },
  {
    id: 'step-4',
    description: 'Vuelve a levantarte.',
    type: 'button',
  },
  {
    id: 'step-5',
    description: 'Tócate el tobillo, luego la cabeza y luego otra vez el tobillo, como si estuvieras comprobando que tu cuerpo sigue siendo tuyo.',
    type: 'button',
  },
  {
    id: 'step-6',
    description: 'Repite el gesto anterior pero esta vez de manera extremadamente lenta, como si cada movimiento costara mucho esfuerzo.',
    type: 'button',
  },
  {
    id: 'step-7',
    description: 'Sal al exterior unos segundos y saluda a un desconocidx.',
    type: 'button',
  },
  {
    id: 'step-8',
    description: 'Vuelve inmediatamente al interior, como si no pertenecieras al mundo de fuera.',
    type: 'button',
  },
  {
    id: 'step-9',
    description: 'Busca un espejo y mírate durante al menos 10 segundos, intentando reconocer quién eres ahora.',
    type: 'button',
  },
  {
    id: 'step-10',
    description: 'Ábrela cámara y mírate durante al menos 10 segundos antes de continuar.',
    type: 'camera',
  },
  {
    id: 'step-11',
    description: 'Mira fijamente a alguien a los ojos durante unos segundos, como si quisieras comprobar si todavía te ven como humano.',
    type: 'button',
  },
  {
    id: 'step-12',
    description: 'No hagas absolutamente nada durante 30 segundos, imagina que eres invisible para el resto.',
    type: 'button',
  },
  {
    id: 'step-13',
    description: 'Cierra los ojos durante 30 segundos, como si quisieras despertarte de un mal sueño.',
    type: 'button',
  },
  {
    id: 'step-14',
    description: 'Imagina que has encontrado un sobre con un mensaje. Escribe qué te gustaría que dijera, como si fuera el único mensaje dirigido a ti.',
    type: 'text-input',
  },
  {
    id: 'step-15',
    description: 'Coge una de las manzanas de la mesa y muérdela. Saboreala como si fuera la última vez que lo hicieras.',
    type: 'button',
  },
  {
    id: 'step-16',
    description: 'Cómete la manzana entera lo más rápido que puedas. Si no te gustan las manzanas, puedes tirarla a la basura, pero recuerda: esta elección afectará tu puntuación final. Una vez te hayas comido la manzana o la hayas desechado, tu puntuación será revelada.',
    type: 'button',
  },
]
