require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()
const errorHandler = (error, req, res, next) => {

    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)
app.use(express.json())
app.use(express.static('build'))
app.use(cors())
app.use(morgan('tiny'))

app.get('/info', (req, res) => {
    Person.countDocuments()
        .then(result => res.send('<h1>Info</h1><p>Phonebook has information about ' + result + ' people.</p><p>' + new Date() + '</p>'))
})

app.get('/api/persons', (req, res) => {
    Person.find()
        .then(person => res.send(person))
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => person ? res.json(person.toJSON()) : res.status(404).end())
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true })
        .then(updatedPerson => res.json(updatedPerson))
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    const person = new Person({
        name: body.name,
        number: body.number
    })
    person.save()
        .then(savedPerson => savedPerson.toJSON())
        .then(formatedPerson => res.json(formatedPerson))
        .catch(error => next(error))
})


app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(res.status(204).end())
        .catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})