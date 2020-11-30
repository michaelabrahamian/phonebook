require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(express.json())
morgan.token('payload', function (req, res) {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :payload'))
app.use(cors())
app.use(express.static('build'))

// Function to log all API requests for debugging
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

// GET: /
app.get('/', (req, res) => {
  res.send('<h1>Hi there</h1>')
})

// GET: /api/persons
// Returns all rows in the persons table.
app.get('/api/persons', (req, res) => {
  //res.json(persons)
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

// GET: /info
// Returns the number of rows in the persons table, with the current date.
app.get('/info', (req, res) => {
  Person.find({}).then(persons => {
    const body = 
    `
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `
    res.send(body)
  })
})

// GET: /api/persons/{id}
// Returns the person object for a specific ID
app.get('/api/persons/:id', (req, res, next) => {

  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

// DELETE: /api/persons/{id}
// Deletes the person with the specific ID
app.delete('/api/persons/:id', (req, res, next) => {

  // Find the person and delete them
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))

  //const id = Number(req.params.id)
  //persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

// POST: /api/persons
// Create a new person
app.post('/api/persons', (req, res, next) => {
  const body = req.body

  console.log(body)

  // Validate that name and number are given
  if (body.name === '' || body.number === '') {
    return res.status(400).json({
      error: 'name and number are required'
    })
  }

  // Create person object
  const person = new Person({
    name: body.name,
    number: body.number,
  })

  // Store in DB
  person.save()
    .then(savedPerson => {
      res.json(savedPerson) // return stored person
    })
    .catch(error => next(error))

})

// PUT: /api/persons{id}
// Replaces the person with the specific ID with a new person based on request
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
  }

  // Find the specified person and update them
  Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

// Unknown endpoint route
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

// Error handler middleware
const errorHandler = (error, request, response, next) => {
  console.log('error.message', error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(401).send( { error: error.message })
  }

  // Pass error down the stack
  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})