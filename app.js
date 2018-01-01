const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();


api.get('/api', (req, res) => {
  req.json({
    message: "welcome"
  })
})

api.post('/api/posts', verifyToken, (req, res) => {
  jwt.veryify(req.token, 'secret', (err, authData) => {
    if(err) {
      res.send(403)
    }
    else {
      req.json({
        message: "post api",
        authData
      })
    }
  })
})

api.post('/api/login', (req, res) => {
  const user = {
    "id": 1,
    "name": "kiel"
  }

  jwt.sign({user: user}, 'secret', { expiresIn: "2 days" }, (err, token) => {
    res.json({
      token: "token",
    })
  })
})

verifyToken(req, res, next) => {
  typeof bh !== undefined ? req.token = bh.split(' ')[1], next() : res.send(403)
}


app.listen(5000, () => console.log('serving on 5000'))
