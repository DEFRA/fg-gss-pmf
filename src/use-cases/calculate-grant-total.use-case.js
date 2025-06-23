export const calculateGrantTotal = async (command) => {
  const pigTypes = [
    {
      type: 'largeWhite',
      description: 'Large White Pig',
      value: 10
    },
    {
      type: 'landace',
      description: 'British Landace',
      value: 15
    },
    {
      type: 'berkshire',
      description: 'Berkshire',
      value: 18
    },
    {
      type: 'other',
      description: 'Other',
      value: 10
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
