'use_strict'

const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')

/*  Routes  */
api.get('/product', ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', ProductController.createProduct)
api.put('/product/:productId', ProductController.updateProduct)
api.delete('/product/:productId', ProductController.deleteProduct)
api.post('/signup', UserController.signUp)
api.post('/signip', UserController.signIn)
api.get('/private', auth, function(req,res) {
  res.status(200).send({message:'Tienes acceso'})
})

module.exports = api
