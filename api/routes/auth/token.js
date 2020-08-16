import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { accessTokenSecret, refreshTokenSecret, refreshTokens } from './jwt'

const router = Router()

router.post('/token', (req, res) => {
  const { token } = req.body

  if (!token) {
    return res.sendStatus(401)
  }

  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403)
  }

  jwt.verify(token, refreshTokenSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }

    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' })

    res.json({
      accessToken
    })
  })
})

export default router
