// Carregar variáveis de ambiente do .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Configuração do Body Parser (caso necessário)
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://lrodrigues:Senhor13@library.m9biu.mongodb.net/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Importação e configuração das rotas
const booksRoutes = require('./auth-api/routes/books');
const authRoutes = require('./auth-api/routes/authRoutes');

app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes);

// Definição da porta do servidor (com fallback)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
