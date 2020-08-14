import { Router } from 'express'

const router = Router()

router.post('/calculations', (req, res) => {
  const result = {}
  result.sum = Number(req.body.x) + Number(req.body.y)
  result.diff = Number(req.body.x) - Number(req.body.y)
  res.json(result)
})

export default router
