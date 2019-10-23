const express = require('express');
const app = express();
const router = require('express').Router();


app.use(require('./routes'));

// Inicia o servidor na porta 3000
app.listen(3000);
console.log('Magic happens on 3000');