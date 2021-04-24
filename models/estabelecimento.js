const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// campos do estabelecimento
const EstabelecimentoSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  segmento: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  numero: {
    type: Number,
    required: true
  },
  complemento: {
    type: String
  }
})

const Estabelecimento = module.exports = mongoose.model('Estabelecimento', EstabelecimentoSchema)

// seleciona o estabelecimento por id
module.exports.getEstabelecimentoPorId = function (id, callback) {
   Estabelecimento.findById(id, callback)
 }

// encriptando a senha para salvar no banco de dados
module.exports.addEstabelecimento = function (novoEstabelecimento, callback) {
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(novoEstabelecimento.senha, salt, (error, hash) => {
      if(error) throw error
      novoEstabelecimento.senha = hash
      novoEstabelecimento.save(callback)
    })
  })
}