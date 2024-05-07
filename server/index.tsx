const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database:"banco",
});

app.get("/", (req, res) => {
  db.query(
    "INSERT INTO usuarios (email, password) VALUES ('danielle@hotmail.com', '1234567')",
    (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send("Erro ao inserir usuario.");
            return;
        }
        res.send("usuario inserido com sucesso")
    }
  );
});
/*
app.listen(3001, () => {
    console.log("Rodando na porta 3001!");
});*/