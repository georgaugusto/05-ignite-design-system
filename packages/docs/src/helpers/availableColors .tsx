import { colors } from '@course-ignite-ui/tokens/src/colors'

export const availableColors = (): string[] => {
  const mappedColors: string[] = []

  Object.entries(colors).map((item) => {
    mappedColors.push(item[1])
  })

  return mappedColors
}
