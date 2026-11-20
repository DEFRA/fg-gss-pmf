import { createServer } from '../server.js'

describe('GET /reference/fly', () => {
  let server

  beforeAll(async () => {
    server = await createServer()
    await server.initialize()
  })

  afterAll(async () => {
    await server.stop({ timeout: 0 })
  })

  test('lists the ways a pig can fly', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/reference/fly'
    })

    expect(response.statusCode).toBe(200)
    expect(response.result).toEqual({
      options: [
        { id: 'WINGS', label: 'Wings (from fg-gss-pmf)' },
        { id: 'ROCKET_PACK', label: 'Rocket pack (from fg-gss-pmf)' },
        { id: 'GLIDERS', label: 'Gliders (from fg-gss-pmf)' }
      ]
    })
  })
})
