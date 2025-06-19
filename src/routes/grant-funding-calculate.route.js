import Joi from 'joi'
import { calculateGrantTotal } from '../use-cases/calculate-grant-total.use-case.js'

const pigTypesObjectSchema = Joi.object({
  pigType: Joi.string().required(),
  quantity: Joi.number().required()
})

export const grantsFundingCalculatorRoute = {
  method: 'POST',
  path: `/grantFundingCalculator`,
  options: {
    description: 'Calculate total for funding',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        pigTypes: Joi.array().items(pigTypesObjectSchema).required()
      })
    }
  },

  async handler(request, h) {
    console.log('payload==', request.payload)
    const response = await calculateGrantTotal(request.payload)

    return h.response(response).code(200)
  }
}
