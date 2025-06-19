import { health } from '../routes/health.js'
import { grantsFundingCalculatorRoute } from '../routes/grant-funding-calculate.route.js'

const router = {
  plugin: {
    name: 'router',
    register: (server, _options) => {
      server.route([health, grantsFundingCalculatorRoute])
    }
  }
}

export { router }
