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
]; // esse mock vai ser substituido pela importacao do banco de dados depois

class Livro {
    listar() {
        return { status: 200, response: livros };

    }

    listarPorId(id) {
        const livro = livros.filter(livro => livro.id == id);

        return { status: 200, response: livro[0] };

    }

    criar(item) {
        const novoLivro = item;
        const id = item.id;
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
        return { status: 201, response: `Livro cadastrado com sucesso no id ${novoLivro.id}!` };
        
    }

    atualizar(item, id) {
        const livroAtualizado = item;
        const index = livros.findIndex((livro) => livro.id == id);

        if (index !== -1) {
            livros[index] = {...livroAtualizado};

            return { status: 202, response: 'Livro atualizado com sucesso!' };

        } else {
            return { status: 404, response: 'Livro não encontrado!' };

        }

    }

    excluir(id) {
        const index = livros.findIndex((livro) => livro.id == id);

        if (index !== -1) {
            livros.splice(index, 1);
            return { status: 202, response: 'Livro removido com sucesso!' };

        } else {
            return { status: 404, response: 'Falha na exclusao, livro não encontrado!' };

        }
    }
}

export default Livro;