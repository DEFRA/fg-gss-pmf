export const pigTypes = [
  {
    type: 'largeWhite',
    description: 'Large White Pig',
    value: 10
  },
  {
    type: 'britishLandrace',
    description: 'British Landrace',
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

export const findPigType = (type) =>
  pigTypes.find((pigType) => pigType.type === type)
