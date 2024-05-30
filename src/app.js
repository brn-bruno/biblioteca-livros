import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { LivrosService } from './api/LivrosService.js';

const app = express();

const livros = [
    {
        id:1,
        titulo:'Expressões Regulares - Uma abordagem divertida 5ª Edição',
        num_paginas: Number(248),
        isbn: '978-85-7522-474-8',
        editora: 'Novatec'
    },
    {
        id:2,
        titulo:'Estruturas de Dados e Algoritmos com JavaScript',
        num_paginas: Number(408),
        isbn: '978-85-7522-693-3',
        editora: 'Novatec'
    }
];

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(LivrosService);

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    //app.use(cors());
    next();
});

app.get("/livros", (req, res) => {
    // const teste = LivrosService.getLivros();
    res.status(200).json(livros);

});

app.get("/livros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const livro = livros.filter(element => element.id == id);

    res.status(200).json(livro[0]);
});

app.post("/livros", (req, res) => {
    const novoLivro = req.body;
    const id = req.body.id;
    let maxId = 0;
    const index = livros.findIndex((livro) => livro.id == id);

    if (index !== -1) {
        livros.forEach(livro => {
            if (livro.id > maxId) {
                maxId = livro.id;
            }
        });

        novoLivro.id = maxId + 1;
    }

    livros.push(novoLivro);
    res.status(201).send(`Livro cadastrado com sucesso no id ${novoLivro.id}!`);
});

app.put("/livros/:id", (req, res) => {
    const livroAtualizado = req.body;
    const id = req.body.id;
    const index = livros.findIndex((livro) => livro.id == id);

    if (index !== -1) {
        livros[index] = livroAtualizado;
        res.status(202).send('Livro atualizado com sucesso!');
    } else {
        res.status(404).send('Livro não encontrado!');
    }

});

app.delete("/livros/:id", (req, res) => {
    const id = req.params.id;
    const index = livros.findIndex((livro) => livro.id == id);

    if (index !== -1) {
        livros.splice(index, 1);
        res.status(202).send('Livro removido com sucesso!');

    } else {
        res.status(404).send('Falha na exclusao!');
        // return null;

    }

});

export default app;