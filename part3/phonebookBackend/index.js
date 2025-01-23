const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();
const Person = require('./models/person');
const app = express();

const errorHandle = (err, req, res, next) => {
  console.log(err.message)
  if(err.name === 'CastError'){
    res.status(400).send({error: 'malformatted id'})
  }
  next(err)
}

const unknownEnd = (req, res) => {
  res.status(404).send({error: 'unknown endpoint'})
}

app.use(express.json());
app.use(cors())
morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let users = []

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Phonebook Backend</h1>");
});

app.get("/info", (req, res) => {
  res.send(`
      Phonebook has info for ${users.length} people
      <br/>
      ${new Date()}`);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => res.status(204).end())
    .catch(err => next(err))
});

const getRandom = () => Math.floor(Math.random() * 10000)

app.post('/api/persons', (req, res) => {
  const body = req.body
  if(!body.name)
    return res.status(400).json({error: 'name is missing'})
  if(!body.number)
    return res.status(400).json({error: 'number is missing'})
  const user = new Person({
    name: body.name,
    number: body.number
  })
  user.save().then(savedUser => {
    res.json(savedUser)
  })
})

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});
app.use(errorHandle)
app.use(unknownEnd)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server Running");
});
