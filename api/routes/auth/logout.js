import { Router } from 'express'
import { refreshTokens } from './jwt'

const router = Router()

router.post('/logout', (req, res) => {
  const { t } = req.body
  console.log(t)
  refreshTokens = refreshTokens.filter(token => t !== token)

  res.send('Logout successful')
})

export default router
