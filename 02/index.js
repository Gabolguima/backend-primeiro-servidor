const express = require("express");

const app = express();
const porta = 8000;

let rodando = false;
let minutos = 0;
let segundos = 0;

let setIntervalIniciado = false;

const iniciarCronometro = () => {
  rodando = true;

  if (!setIntervalIniciado) {
    setInterval(() => {
      if (rodando) {
        if (segundos === 59) {
          segundos = 0;
          minutos++
        } else {
          segundos++
        }
      }
    }, 1000);

    setIntervalIniciado = true;
  }
}

app.get("/", (req, res) => {
  res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`);
});

app.get("/iniciar", (req, res) => {
  iniciarCronometro();
  return res.send("Cronômetro iniciado!");
});

app.get("/pausar", (req, res) => {
  rodando = false;
  return res.send("Cronômetro pausado!");
});

app.get("/continuar", (req, res) => {
  rodando = true;
  return res.send("Cronômetro continuando!");
});

app.get("/zerar", (req, res) => {
  minutos = 0;
  segundos = 0;
  return res.send("Cronômetro zerado!");
});

app.listen(porta,
  console.log(`O servidor está rodando na porta ${porta}.`)
);