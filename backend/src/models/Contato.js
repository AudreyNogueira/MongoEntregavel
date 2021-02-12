const connection = require('../config/connection')
const { Schema, model } = require('mongoose')

const ContatoSchema = new Schema({
    nome: {
        type: String
    },
    msg: {
        type: String
    },
    data_registro: {
        type: Date,
        default: new Date()
    }
})

const modelo = model("comentarios", ContatoSchema)

module.exports = modelo