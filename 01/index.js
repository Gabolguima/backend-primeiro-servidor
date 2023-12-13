const express = require("express");

const app = express();
const porta = 3000;

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorAtual = 0;

app.get("/", (req, res) => {
  const nomeDoJogador = jogadores[jogadorAtual];
  jogadorAtual++;

  if (jogadorAtual >= jogadores.length) {
    jogadorAtual = 0;
  }

  return res.send(`É a vez de ${nomeDoJogador} jogar!`);
});

app.listen(porta,
  console.log(`Servidor rodando na porta ${porta}.`)
);