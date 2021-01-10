const mongoose = require('mongoose')

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.bxjwg.mongodb.net/text?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})
const Person = mongoose.model('Person', personSchema)

if (!process.argv[3]) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, ' ', person.number)
        })
        mongoose.connection.close()
    })
}

if (process.argv[3]) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    person.save().then(() => {
        console.log('added ', person.name, ' number', person.number, ' to the phonebook')
        mongoose.connection.close()
    })
}