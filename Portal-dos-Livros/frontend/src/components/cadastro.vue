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
        <section class="login-form">
          <h2>Cadastro de Usuário</h2>
          <form @submit.prevent="cadastrarUsuario">
            <input
              type="text"
              id="nome"
              v-model="nome"
              placeholder="Nome"
              required
            />
            <input
              type="password"
              id="senha"
              v-model="senha"
              placeholder="Senha"
              required
            />
            <button type="submit">Cadastrar</button>
          </form>
        </section>
  
        <section class="lista-livros" id="lista-livros">
          <button @click="sair">Sair</button>
        </section>
      </main>
  
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3>Sobre</h3>
            <p>Portal dos Livros é seu sistema de gerenciamento de biblioteca confiável.</p>
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
        nome: '',
        senha: '',
      };
    },
    methods: {
      cadastrarUsuario() {
        // Implemente a lógica de cadastro do usuário aqui
        console.log('Usuário cadastrado:', this.nome);
      },
      sair() {
        // Lógica para sair (navegar para a página de login)
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input,
  button {
    padding: 10px;
    font-size: 16px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  