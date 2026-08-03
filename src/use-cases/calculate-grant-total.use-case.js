import { findPigType } from '../models/pig-types.js'

export const calculateGrantTotal = async (command) => {
  const response = { items: [] }
  let total = 0

  command.pigTypes.forEach((breed) => {
    const matchedPigType = findPigType(breed.pigType)

    if (matchedPigType) {
      response.items.push({
        type: breed.pigType,
        description: matchedPigType.description,
        value: matchedPigType.value,
        quantity: breed.quantity,
        total: matchedPigType.value * breed.quantity
      })

      total += matchedPigType.value * breed.quantity
    }
  })

  return { ...response, grandTotal: total }
}
