import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import LivroRoutes from './api/routes/livro.routers.js';

const app = express();

// INICIO: FUNÇÕES DE MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// FIM: FUNÇÕES DE MIDDLEWARE

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
});

app.use(LivroRoutes);

app.get("/", (req, res) => {
    // const teste = LivrosService.getLivros();
    res.status(200).send('Servidor ativo');

});

export default app;