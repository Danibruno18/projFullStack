const express = require('express');
const cors = require('cors');

const app = express();
const porta = 8800;
const autor_router = require('./routes/autor.js'); 
const livro_router = require('./routes/livro.js'); 
const usuario_router = require('./routes/usuario.js'); 

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use("/autor", autor_router);
app.use("/livro", livro_router);
app.use("/usuario", usuario_router);
app.listen(porta, ()=> {
    console.log("Link do Servidor: http://localhost:"+porta);
})
























