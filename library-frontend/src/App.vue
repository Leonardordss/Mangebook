<template>
  <div id="app">
    <!-- Formulário para adicionar ou editar um livro -->
    <BookForm 
      :bookToEdit="bookToEdit" 
      @book-added="fetchBooks" 
      @book-updated="fetchBooks" 
    />
    
    <BookList 
      @edit-book="setBookToEdit" 
      ref="bookList" 
    />
  </div>
</template>

<script>
import BookList from './components/BookList.vue';
import BookForm from './components/BookForm.vue';

export default {
  data() {
    return {
      bookToEdit: null,
    };
  },
  components: {
    BookList,
    BookForm,
  },
  methods: {
    setBookToEdit(book) {
      this.bookToEdit = book;
    },
    fetchBooks() {
      this.$refs.bookList.fetchBooks();
      this.bookToEdit = null; // Reseta bookToEdit após buscar livros
    },
  },
};
</script>

