const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Todos", TodoSchema)