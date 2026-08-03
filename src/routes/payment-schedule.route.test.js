import { createServer } from '../server.js'

describe('POST /paymentSchedule', () => {
  let server

  beforeAll(async () => {
    server = await createServer()
    await server.initialize()
  })

  afterAll(async () => {
    await server.stop({ timeout: 0 })
  })

  test('returns the PMF annual payment schedule expected by GAS', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/paymentSchedule',
      payload: {
        agreementStartDate: '2026-08-01T10:30:00.000Z',
        pigTypes: [
          { pigType: 'largeWhite', quantity: 2 },
          { pigType: 'britishLandrace', quantity: 0 },
          { pigType: 'berkshire', quantity: 1 },
          { pigType: 'other', quantity: 0 }
        ]
      }
    })

    expect(response.statusCode).toBe(200)
    expect(response.result).toEqual({
      payment: {
        agreementStartDate: '2026-08-01',
        agreementEndDate: '2027-07-31',
        agreementTotalPence: 3800,
        payments: [
          {
            dueDate: '2026-11-06',
            totalAmountPence: 3800,
            invoiceLines: [
              {
                pigType: 'largeWhite',
                description: 'Large White Pig',
                quantity: 2,
                unitPricePence: 1000,
                amountPence: 2000
              },
              {
                pigType: 'berkshire',
                description: 'Berkshire',
                quantity: 1,
                unitPricePence: 1800,
                amountPence: 1800
              }
            ]
          }
        ]
      }
    })
  })
})
