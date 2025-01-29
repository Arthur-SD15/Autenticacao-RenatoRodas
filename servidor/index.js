// index.js
const crypto = require("./crypto");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { expressjwt: expressJWT } = require("express-jwt");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const { usuario } = require("./models");

const app = express();

// Configuração do CORS
const corsOpcoes = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.set("view engine", "ejs");
app.use(cors(corsOpcoes));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Middleware de autenticação
app.use(
  expressJWT({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    getToken: (req) => req.cookies.token,
  }).unless({
    path: ["/logar", "/deslogar", "/", /^\/$/,],
  })
);

app.get("/usuarios/listar", async (req, res) => {
  try {
    const list = await usuario.findAll();
    res.json(list);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).send("Error!");
  }
});

app.post("/usuarios/cadastrar", async (req, res) => {
  try {
    const existeUser = await usuario.findOne({ where: { usuario: req.body.usuario } });
    if (existeUser) {
      return res.status(400).send("O usuário já existe."); // Retorna um erro 400
    }
    
    const senhaCrypto = crypto.encrypt(req.body.senha);
    await usuario.create({
      usuario: req.body.usuario,
      senha: senhaCrypto,
    });
    res.redirect("/autenticar");
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).send("Error!");
  }
});

app.post("/logar", async (req, res) => {
  try {
    const user = await usuario.findOne({ where: { usuario: req.body.usuario } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." }); // Retorna um erro 404
    }
    
    const userSenha = crypto.decrypt(user.senha);
    if (req.body.senha === userSenha) {
      const id = user.id;
      const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: 300 });
      res.cookie("token", token, { httpOnly: true, secure: false, path: '/' }).json({
        usuario: user.usuario,
        token,
      });
    } else {
      res.status(401).json({ error: "Senha incorreta." }); // Retorna um erro 401
    }
  } catch (error) {
    console.error("Erro ao logar:", error);
    res.status(500).send("Error!");
  }
});

app.post("/deslogar", (req, res) => {
  res.cookie("token", null, { httpOnly: true });
  res.redirect("/autenticar");
});

// Iniciar o servidor
app.listen(3001, () => {
  console.log(`App escutando na porta ${3001}!`);
});
