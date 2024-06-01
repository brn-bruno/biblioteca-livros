import Livro from '../models/Livro.js';
const livroModel = new Livro();

class LivroController {
    async listarLivros(req, res) {
        const livros = await livroModel.listar();

        return res.status(livros.status).send(livros.response);
        
    }

    async listarLivroPorId(req, res) {
        const id = parseInt(req.params.id);
        const livro = await livroModel.listarPorId(id);

        return res.status(livro.status).send(livro.response);

    }

    async cadastrarLivro(req, res) {
        const item = req.body;
        
        if (item.titulo === null) {
            return res.status(403).send('O título do livro não pode ser nulo!');
            
        } else {
            const cadastro = await livroModel.criar(item);

            return res.status(cadastro.status).send(cadastro.response);

        }

    }

    async atualizarLivro(req, res) {
        const item = req.body;
        const id = parseInt(req.params.id);
        const livro = await livroModel.atualizar(item, id);

        return res.status(livro.status).send(livro.response);
    }

    async excluirLivro(req, res) {
        const id = parseInt(req.params.id);
        const exclusao = await livroModel.excluir(id);

        return res.status(exclusao.status).send(exclusao.response);        
    }

}

export default LivroController;