import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Require API routes
import users from './routes/users'
import test from './routes/test'
import calc from './routes/calculations'

// Create express instance
const app = express()

// Import API Routes
app.use(cors())
app.use(bodyParser.json())
app.use(users)
app.use(test)
app.use(calc)

// Export express app
export default app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
