import Joi from 'joi'
import { pigTypes } from '../models/pig-types.js'
import { calculatePaymentSchedule } from '../use-cases/calculate-payment-schedule.use-case.js'

const pigTypeCodes = pigTypes.map(({ type }) => type)

const pigTypeSchema = Joi.object({
  pigType: Joi.string()
    .valid(...pigTypeCodes)
    .required(),
  quantity: Joi.number().integer().min(0).required()
})

const selectedPigTypeSchema = Joi.object({
  quantity: Joi.number().integer().min(1).required()
}).unknown()

export const paymentScheduleRoute = {
  method: 'POST',
  path: '/paymentSchedule',
  options: {
    description: 'Calculate the annual PMF payment schedule',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        agreementStartDate: Joi.string().isoDate().required(),
        pigTypes: Joi.array()
          .items(pigTypeSchema)
          .min(1)
          .has(selectedPigTypeSchema)
          .required()
      })
    }
  },
  handler: async (request, h) => {
    const response = calculatePaymentSchedule(request.payload)

    return h.response(response).code(200)
  }
}
