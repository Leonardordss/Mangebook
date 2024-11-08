<template>
    <div class="book-list-container">
        <!-- Lista de Livros -->
        <ul class="book-list" v-if="!loading">
            <li v-for="book in books" :key="book._id" class="book-item">
                <span>{{ book.title }} - {{ book.author }} ({{ book.year }})</span>
                <button @click="editBook(book)" class="edit-button">Editar</button>
                <button @click="deleteBook(book._id)" class="delete-button">Excluir</button> 
            </li>
        </ul>
        <div v-else>Loading...</div> <!-- Show loading message -->
    </div>
</template>



<script>

import api from '../services/api';

export default {
    data() {
        return {books: []};
    },
    methods: {
        fetchBooks() {
            api.getBooks().then(response => {
                this.books = response.data;
            });
        },
        deleteBook(id) {
            api.deleteBook(id).then(() => {
                this.fetchBooks();
            });
        },
        editBook(book) {
            this.$emit('edit-book', book);
        },
    },
    mounted() {
        this.fetchBooks();
    },
};
</script>

<style scoped>

.book-list-container {
max-width: 600px;
margin: 0 auto;
padding: 20px;
background-color: #f9f9f9;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.book-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.book-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.edit-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
}

.delete-button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
}

.edit-button:hover, .edit-button:hover {
    opacity: 0.8;
}

</style>