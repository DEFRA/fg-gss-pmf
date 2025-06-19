export const calculateGrantTotal = async (command) => {
  const pigTypes = [
    {
      type: 'largeWhite',
      description: 'Large White Pig',
      value: 10
    },
    {
      type: 'largeBrown',
      description: 'Large Brown Pig',
      value: 15
    }
  ]

  const response = { items: [] }
  let total = 0

  command.pigTypes.forEach((breed) => {
    const matchedPigType = pigTypes.find(
      (pigType) => pigType.type === breed.pigType
    )

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
