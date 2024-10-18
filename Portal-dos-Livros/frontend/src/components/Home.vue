<template>
  <div>
    <header>
      <div class="logo">
        <img src="./img/logo.JPG" alt="Logo" />
        <h1>Portal dos Livros</h1>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/catalogo">Catálogo</router-link></li>
          <li><router-link to="/login">Usuários</router-link></li>
          <li><a href="#">Relatórios</a></li>
        </ul>
      </nav>
    </header>

    <section class="search-bar">
      <input type="text" placeholder="Pesquisar livros..." v-model="searchQuery" />
      <button @click="searchBooks">Pesquisar</button>
    </section>

    <main>
      <section class="notifications">
        <h2>Notificações</h2>
        <p>Nenhuma nova notificação.</p>
      </section>

      <section class="featured-books">
        <h2>Livros em Destaque</h2>
        <div v-for="book in featuredBooks" :key="book.id" class="book">
          <img :src="book.image" :alt="book.title" />
          <p>{{ book.title }}</p>
        </div>
      </section>

      <section class="stats">
        <h2>Estatísticas</h2>
        <p>Livros cadastrados: {{ stats.books }}</p>
        <p>Usuários ativos: {{ stats.users }}</p>
      </section>
    </main>

    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>Sobre</h3>
          <p>
            Portal dos Livros é seu sistema de gerenciamento de biblioteca
            confiável.
          </p>
        </div>
        <div class="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/catalogo">Catálogo</router-link></li>
            <li><router-link to="/login">Usuários</router-link></li>
            <li><a href="#">Relatórios</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@portaldoslivros.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Portal dos Livros. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      featuredBooks: [
        { id: 1, title: 'É assim que começa', image: './img/livro1.jpg' },
        { id: 2, title: 'O homem mais rico da Babilônia', image: './img/livro2.jpg' },
      ],
      stats: {
        books: 1500,
        users: 500,
      },
    };
  },
  methods: {
    searchBooks() {
      console.log('Pesquisar livros:', this.searchQuery);
      // Aqui você pode adicionar lógica para buscar livros.
    },
  },
};
</script>

<style scoped>
/* Adicione aqui o estilo do seu CSS */
</style>

