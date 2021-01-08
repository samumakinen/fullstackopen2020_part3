const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "1"
    },
    {
        id: 2,
        name: "Boris Hellas",
        number: "22"
    },
    {
        id: 3,
        name: "Cecilia Hellas",
        number: "333"
    },
    {
        id: 4,
        name: "Daniela Hellas",
        number: "4444"
    }
]

app.get('/info', (req, res) => {
    res.send("<h1>Info</h1><p>Phonebook has information about " + persons.length + " people.</p><p>" + new Date() + "</p>")
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.post('/api/persons', (req, res) => {
    const name = req.body.name
    const number = req.body.number

    if (!name) {
        return res.status(400).json({ error: 'name missing' })
    }
    if (!number) {
        return res.status(400).json({ error: 'number missing' })
    }
    if (persons.find(p => p.name === name)) {
        return res.status(400).json({ error: 'name must be unique' })
    }

    const id = Math.floor(Math.random() * 524288) + 1
    const person = { id: id, name: name, number: number }
    persons = persons.concat(person)
    res.json(person)
})

app.get('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    const person = persons.find(p => p.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    if (persons.find(p => p.id === id)) {
        persons = persons.filter(p => p.id !== id)
        res.status(204).end()
    } else {
        res.status(404).end()
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})