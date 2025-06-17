export const calculateGrantTotal = async (breedsCommand) => {
  const pigTypes = [
    {
      type: 'largeWhite',
      value: 10
    },
    {
      type: 'largeBrown',
      value: 15
    }
  ]

  const result = []
  let grandTotal = 0

  breedsCommand.pigTypes.forEach((breed) => {
    const matchedPigType = pigTypes.find(
      (pigType) => pigType.type === breed.pigType
    )

    if (matchedPigType) {
      result.push({
        type: breed.pigType,
        value: matchedPigType.value,
        quantity: breed.quantity,
        total: matchedPigType.value * breed.quantity
      })

      grandTotal += matchedPigType.value * breed.quantity
    }
  })

  return { result, grandTotal }
}
