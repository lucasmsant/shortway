const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const Estabelecimento = require('../models/estabelecimento')

// cadastrando um novo estabelecimento
router.post('/cadastro', (req, res, next) => {
  let novoEstabelecimento = new Estabelecimento({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    senha: req.body.senha,
    segmento: req.body.segmento,
    cnpj: req.body.cnpj,
    cep: req.body.cep,
    numero: req.body.numero,
    complemento: req.body.complemento,
  })
  Estabelecimento.addEstabelecimento(novoEstabelecimento, (error, estabelecimento) => {
    if(error) {
      res.json({success: false, msg: 'Falha ao registrar estabelecimento'})
    } else {
      res.json({success: true, msg: 'estabelecimento registrado com sucesso!'})
    }
  })
})

module.exports = router;