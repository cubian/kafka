export type StepType = 'button' | 'choice' | 'text-input'

export interface Step {
  id: string
  description: string
  type?: StepType
  choices?: [string, string]
}

export const STEPS: Step[] = [
  {
    id: 'step-1',
    description: 'Camina dando pasos exageradamente cortos durante 30 segundos',
    type: 'button',
  },
  {
    id: 'step-2',
    description: 'Coloca un objeto que tu elijas en el suelo y camina alrededor de él como si fuera un planeta',
    type: 'button',
  },
  {
    id: 'step-3',
    description: 'Cambiate los zapatos de pie y ahora vuelve a caminar alrededor del objeto como si fuera un planeta',
    type: 'button',
  },
  {
    id: 'step-4',
    description: 'Deja el objeto en el mismo sitio donde lo encontraste',
    type: 'button',
  },
  {
    id: 'step-5',
    description: 'Siéntate en el suelo y mueve solo los hombros como si estuvieras bailando una música invisible',
    type: 'button',
  },
  {
    id: 'step-6',
    description: 'Haz exactamente lo contrario de la acción que te pedí hace 30 segundos',
    type: 'button',
  },
  {
    id: 'step-7',
    description: 'Sal a un espacio exterior y saluda a algún desconocido que encuentres.',
    type: 'button',
  },
  {
    id: 'step-8',
    description: 'Vuelve a entrar dentro del umbral.',
    type: 'button',
  },
  {
    id: 'step-9',
    description: 'Busca un espejo y mírate durante al menos 10 segundos.',
    type: 'button',
  },
  {
    id: 'step-10',
    description: 'Imagina que has encontrado un sobre con un mensaje oculto. Piensa en el mensaje que te gustaría encontrarte y escríbelo aquí.',
    type: 'text-input',
  },
  {
    id: 'step-11',
    description: 'Levanta los brazos hacia arriba lentamente, como si quisieras tocar el cielo.',
    type: 'button',
  },
  {
    id: 'step-12',
    description: 'Camina por el espacio a cámara lenta hasta tocar tu pared más próxima.',
    type: 'button',
  },
  {
    id: 'step-13',
    description: 'No hagas nada durante 30 segundos.',
    type: 'button',
  },
  {
    id: 'step-14',
    description: 'Busca un objeto de color rojo y tocalo 3 veces.',
    type: 'button',
  },
  {
    id: 'step-15',
    description: 'Tócate el tobillo.',
    type: 'button',
  },
  {
    id: 'step-16',
    description: 'Ahora tócate el tobillo, luego la cabeza y luego otra vez el tobillo.',
    type: 'button',
  },
  {
    id: 'step-17',
    description: 'Repite la acción anterior muy lentamente.',
    type: 'button',
  },
  {
    id: 'step-18',
    description: 'Mira a alguien a los ojos muy fijamente.',
    type: 'button',
  },
  {
    id: 'step-19',
    description: 'Cierra los ojos durante 30 segundos.',
    type: 'button',
  },
  {
    id: 'step-20',
    description: 'Sonríe como si alguien te obligara a hacerlo.',
    type: 'button',
  },
]
