const express = require('express');

const app = express();

app.set('views', '../views')

app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    res.render('nivel', req.query);
});

const port = 8080;
const server =  app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto http://localhost:${port}`);
})

server.on('error', error => console.log(`Error en servidor ${error}`));