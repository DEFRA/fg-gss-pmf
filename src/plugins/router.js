import { health } from '../routes/health.js'
import { grantsFundingCalculatorRoute } from '../routes/grant-funding-calculate.route.js'
import { paymentScheduleRoute } from '../routes/payment-schedule.route.js'
import { flyOptionsRoute } from '../routes/fly-options.route.js'

const router = {
  plugin: {
    name: 'router',
    register: (server, _options) => {
      server.route([
        health,
        grantsFundingCalculatorRoute,
        paymentScheduleRoute,
        flyOptionsRoute
      ])
    }
  }
}

export { router }
