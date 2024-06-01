import { Router } from 'express';
import LivroController from '../controllers/LivroController.js';

const LivroRoutes = Router();
let livroController = new LivroController();

LivroRoutes.get('/livros', livroController.listarLivros);

LivroRoutes.get('/livros/:id', livroController.listarLivroPorId);

LivroRoutes.post('/livros', livroController.cadastrarLivro);

LivroRoutes.put('/livros/:id', livroController.atualizarLivro);

LivroRoutes.delete('/livros/:id', livroController.excluirLivro);

export default LivroRoutes;