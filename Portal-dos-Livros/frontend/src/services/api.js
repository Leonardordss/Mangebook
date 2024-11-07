import axios from 'axios'; // Importa Axios para requisições HTTP

//Cria instancia do Axios com URL base da API

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books', //URL da API
    headers: {
        'Content-Type': 'application/json', //Define JSON como tipo de conteudo
    },
});

//Exporta funções CRUD usando Axios
export default {
    getBooks() {
        return apiClient.get('/'); //GET para listar livros
    },
    addBook (book) {
        return apiClient.post('/', book);
    },
    updateBook(id, book) {
        return apiClient.put(`/${id}`, book);
    },
    deleteBook (id) {
        return apiClient.delete(`/${id}`);
    },
};