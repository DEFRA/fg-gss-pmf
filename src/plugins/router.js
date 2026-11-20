import { health } from '../routes/health.js'
import { grantsFundingCalculatorRoute } from '../routes/grant-funding-calculate.route.js'
import { paymentScheduleRoute } from '../routes/payment-schedule.route.js'
import { breedsRoute, referenceListRoute } from '../routes/reference.route.js'

const router = {
  plugin: {
    name: 'router',
    register: (server, _options) => {
      server.route([
        health,
        grantsFundingCalculatorRoute,
        paymentScheduleRoute,
        referenceListRoute,
        breedsRoute
      ])
    }
  }
}

export { router }
