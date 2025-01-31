const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const packageJson = require('../../package.json')
const logger = require('../signale')

logger.info('Starting...')
logger.info('Version : ' + packageJson.version)

// Create express instance
const app = express()
app.use(cors())
app.use(cookieParser())

// Require API routes
const calendar = require('./routes/calendar')
const urls = require('./routes/urls')
const crous = require('./routes/crous')

// Import API Routes
app.use(calendar)
app.use(urls)
app.use(crous)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    logger.info(`API server listening on port ${port}`)
  })
}
