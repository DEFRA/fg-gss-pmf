import Boom from '@hapi/boom'
import Joi from 'joi'
import { breeds, referenceLists } from '../models/reference-lists.js'

export const referenceListRoute = {
  method: 'GET',
  path: '/reference/{name}',
  options: {
    description: 'List the options for one of this service’s reference lists',
    tags: ['api'],
    validate: { params: Joi.object({ name: Joi.string().required() }) }
  },
  handler: (request, h) => {
    const options = referenceLists[request.params.name]

    if (!options) {
      throw Boom.notFound(`No reference list named "${request.params.name}"`)
    }

    return h.response({ options }).code(200)
  }
}

export const breedsRoute = {
  method: 'GET',
  path: '/breeds',
  options: {
    description: 'List the pig breeds',
    tags: ['api']
  },
  handler: (_request, h) => h.response({ breeds }).code(200)
}
