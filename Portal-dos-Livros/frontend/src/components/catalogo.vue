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
  
      <main>
        <section class="catalogo-container">
          <div class="livro" v-for="livro in livros" :key="livro.id">
            <img :src="livro.imagem" alt="Livro" />
            <p>{{ livro.titulo }}</p>
          </div>
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
        livros: [
          {
            id: 1,
            titulo: 'É assim que começa',
            imagem: './img/livro1.jpg', // Ajuste o caminho conforme necessário
          },
          {
            id: 2,
            titulo: 'O homem mais rico da Babilônia',
            imagem: './img/livro2.jpg', // Ajuste o caminho conforme necessário
          },
          // Adicione mais livros conforme necessário
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .catalogo-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
  }
  
  .livro {
    flex: 1 1 calc(33.333% - 32px); /* 3 livros por linha com espaço */
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 16px;
    text-align: center;
  }
  
  .livro img {
    max-width: 100%;
    height: auto;
  }
  
  .livro p {
    margin: 8px 0;
  }
  </style>
  