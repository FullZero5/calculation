import { Router } from 'express'
import jwt from 'jsonwebtoken'

import { accessTokenSecret, refreshTokenSecret, refreshTokens } from './jwt'

import { users } from './users'

const router = Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body
  // filter user from the users array by username and password
  const user = users.find((u) => { return u.username === username && u.password === password })
  if (user) {
    // generate an access token
    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' })
    const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret)
    refreshTokens.push(refreshToken)
    console.log(refreshTokens)
    res.json({
      accessToken,
      refreshToken
    })
  } else {
    res.statusCode = 403
    res.send({ error: 'Username or password incorrect' })
  }
})

export default router
