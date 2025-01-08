const express = require('express')
const app = express()

let users = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req,res) => {
    res.send('<h1>Welcome to Phonebook Backend</h1>')
})

app.get('/info', (req,res) => {
    res.send(`
      Phonebook has info for ${users.length} people
      <br/>
      ${new Date()}`)
})

app.get('/api/persons', (req, res) => {
    res.json(users)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log('Server Running')
})