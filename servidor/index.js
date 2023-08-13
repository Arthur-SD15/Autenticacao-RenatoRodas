// JWT
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
var { expressjwt: expressJWT } = require("express-jwt");
const cors = require('cors');

var cookieParser = require('cookie-parser')

const express = require('express');
const { usuario } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());
app.use(
  expressJWT({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    getToken: req => req.cookies.token
  }).unless({ path: ["/autenticar", "/logar", "/deslogar", "/usuarios/cadastrar"] })
);

app.get('/autenticar', async function(req, res){
  res.render('autenticar');
})

app.get('/', async function(req, res){
  res.render("home")
})

app.get('/usuarios/cadastrar', async function(req, res){
  res.render('cadastrar')
 })

app.post('/logar', (req, res) => {
  const { usuario, senha } = req.body
  if(usuario == 'Arthur' && senha == '12345'){
    const id = 1

    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    })

    res.cookie('token', token, {httpOnly: true});
    return res.json({
      usuario: req.body.usuario, 
      token: token 
    })
  }
  res.status(500).json({mensagem: "Usuario ou senha invalidos"})
})

app.post('/deslogar', function(req, res) {
  res.cookie('token', null, {httpOnly: true});
  return res.json({
    deslogado: true
  })
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});