const express = require('express'); // Importamos o Express
const Book = require('../models/Book'); // Importamos o modelo Book
const router = express.Router(); // Criamos o roteador

//*** CRIAÇÃO POST ***
router.post('/', async (req, res) => {
    const { title, author, year } = req.body; //Extraimos os dados da requisição
    try {
        const newBook = new Book({ title, author, year }); //Criamos e salvamos o livro
        await newBook.save();
        res.status(201).json(newBook); // Retornamos o livro criado
    } catch (error) {
        res.status(500).json({message: 'Erro ao criar livro' error}); // Retornamos
    }
});

//*** LEITURA GET ***
router.get('/', async (req, res) => {
    try{
        const books = await Book.find(); // Buscamos todos os livros
        res.status(200).json(books); // Retornamos a lista de livros
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar livros', error}); // Retornamos erro, se houver
    }
});

// *** ATUALIZAÇÃO PUT ***
router.put('/', async (req, res) => {
    const {title, author, year} = req.body; //Extraimos os novos dados
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.dictionary, {title, author, year}, {new: true}); // Atualizamos o livro pelo ID
        res.status(200).json(updateBook); // Retornamos o livro atualizado
    } catch (error) {
        res.status(500).json({message: 'Erro ao atualizar livro', error}); // Retornamos erro, se houver
    }
});

// *** EXCLUSÃO DELETE ***
router.delete('/', async (req, res) => {
    const {title, author, year} = req.body; //Extraimos os novos dados
    try {
        await Book.findByIdAndUpdate(req.params.id); // Deletamos o livro pelo ID
        res.status(200).json({message: 'Livro deletado com sucesso'}); // Retornamos mensagem de sucesso
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar livro', error}); // Retornamos erro, se houver
    }
});

// Exportamos o roteador para ser usado no server.js
module.exports = router;