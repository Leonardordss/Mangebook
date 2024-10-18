import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue'; // Seu componente Home
import Login from '@/components/login.vue'; // Componente Login
import Catalogo from '@/components/catalogo.vue'; // Componente Catalogo
import Cadastro from '@/components/cadastro.vue'; // Importe o componente Cadastro

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/catalogo',
      name: 'Catalogo',
      component: Catalogo,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro, // Adicione a rota para o Cadastro
    },
  ],
});



