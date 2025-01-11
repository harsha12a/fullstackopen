const express = require("express");
const morgan = require('morgan');
const app = express();
app.use(express.json());

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let users = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

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

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.status(204).end();
});

const getRandom = () => Math.floor(Math.random() * 10000)

app.post('/api/persons', (req, res) => {
  const body = req.body
  if(!body.name)
    return res.status(400).json({error: 'name is missing'})
  if(!body.number)
    return res.status(400).json({error: 'number is missing'})
  if(users.find(user => user.name === body.name))
    return res.status(400).json({error: 'name must be unique'})
  const user = {
    id: getRandom(),
    name: body.name,
    number: body.number
  }
  users = users.concat(user)
  res.json(user)
})

app.get("/api/persons", (req, res) => {
  res.json(users);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server Running");
});
