import { createServer } from '../server.js'

describe('reference lists', () => {
  let server

  beforeAll(async () => {
    server = await createServer()
    await server.initialize()
  })

  afterAll(async () => {
    await server.stop({ timeout: 0 })
  })

  test.each(['fly', 'wingspan'])('lists the %s options', async (name) => {
    const response = await server.inject({
      method: 'GET',
      url: `/reference/${name}`
    })

    expect(response.statusCode).toBe(200)
    expect(response.result.options).toHaveLength(3)
    expect(response.result.options[0]).toEqual({
      id: expect.any(String),
      label: expect.stringContaining('(from fg-gss-pmf)')
    })
  })

  test('is not found for a list it does not own', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/reference/swim'
    })

    expect(response.statusCode).toBe(404)
  })

  test('lists the breeds in their own shape', async () => {
    const response = await server.inject({ method: 'GET', url: '/breeds' })

    expect(response.statusCode).toBe(200)
    expect(response.result.breeds[0]).toEqual({
      code: 'LARGE_WHITE',
      name: 'Large White (from fg-gss-pmf)'
    })
  })
})
