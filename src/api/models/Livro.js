import db from '../../database/db.js';

class Livro {
    async listar() {
        try {
            const res = await db.promise().query(`select * from livros`);

            return { status: 200, response: res[0] };

        } catch (error) {
            return { status: 500, response: `Erro ao obter livros do banco de dados! Detalhes: ${error}` };

        }

    }

    async listarPorId(id) {
        try {
            const res = await db.promise().query(`select * from livros where id = ${id}`);
            
            return { status: 200, response: res[0][0] };

        } catch (error) {
            return { status: 404, response: `Erro ao obter livros do banco de dados! Detalhes: ${error}` };

        }
    }

    async criar(item) {
        try {
            await db.promise().query(`  insert into livros (titulo, num_paginas, isbn, editora) 
                                        values ('${item.titulo}', ${item.num_paginas}, '${item.isbn}', '${item.editora}')`);
            
            return { status: 201, response: `Livro cadastrado com sucesso!` };

        } catch (error) {
            return { status: 406, response: `Falha ao cadastrar o livro! Detalhes: ${error}` };

        }
    }

    async atualizar(item, id) {
        try {
            await db.promise().query(`  update livros set titulo = '${item.titulo}'
                                                        , num_paginas = ${item.num_paginas}
                                                        , isbn = '${item.isbn}'
                                                        , editora = '${item.editora}'
                                        where id = ${id}`);
            
            return { status: 202, response: `Livro atualizado com sucesso!` };

        } catch (error) {
            return { status: 404, response: `Falha ao atualizar o livro! Detalhes: ${error}` };

        }
    }

    async excluir(id) {
        try {
            const res = await db.promise().query(`delete from livros where id = ${id}`);
            
            return { status: 202, response: 'Livro removido com sucesso!' };

        } catch (error) {
            return { status: 404, response: `Falha na exclusao, livro não encontrado! Detalhes: ${error}` };

        }
    }
}

export default Livro;