const express = require('express')
const { validateSignup } = require('./models/validator')
const app = express()

app.use(express.json())

app.post('/signup', (req, res) => {
  const { error, value } = validateSignup(req.body)

  if (error) {
    console.log(error)
    return res.send('Invalid Request')
  }
  res.send('Successfully signed up!')
})
app.listen(4000, () => {
  console.log('Server started on port 4000')
})
