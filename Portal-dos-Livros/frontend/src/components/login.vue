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
          <h2>Login</h2>
          <form @submit.prevent="validarLogin">
            <label for="username">Usuário:</label>
            <input type="text" id="username" v-model="username" required />
  
            <label for="password">Senha:</label>
            <input type="password" id="password" v-model="password" required />
  
            <button type="submit">Entrar</button>
  
            <li class="primeiro-acesso">
              <router-link to="/cadastro">Primeiro Acesso - Cadastrar</router-link>
            </li>
          </form>
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
        username: '',
        password: '',
      };
    },
    methods: {
      validarLogin() {
        // Adicione aqui a lógica para validar o login
        console.log('Usuário:', this.username);
        console.log('Senha:', this.password);
        // Aqui você pode fazer uma chamada à API para validar o login.
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
    gap: 10px; /* Espaço entre elementos */
  }
  
  .primeiro-acesso {
    margin-bottom: 15px; /* Espaço vertical específico */
    list-style: none;
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
  