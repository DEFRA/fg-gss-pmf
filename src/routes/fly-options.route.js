import { flyOptions } from '../models/fly-options.js'

export const flyOptionsRoute = {
  method: 'GET',
  path: '/reference/fly',
  options: {
    description: 'List the ways a pig can fly',
    tags: ['api']
  },
  handler: (_request, h) => h.response({ options: flyOptions }).code(200)
}
