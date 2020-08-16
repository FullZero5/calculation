import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Require API routes
import users from './routes/users'
import calc from './routes/calculations'
import login from './routes/auth/login'
import token from './routes/auth/token'
import logout from './routes/auth/logout'

// Create express instance
const app = express()

// Import API Routes
app.use(cors())
app.use(bodyParser.json())
app.use(users)
app.use(calc)
app.use(login)
app.use(token)
app.use(logout)

// Export express app
export default app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
