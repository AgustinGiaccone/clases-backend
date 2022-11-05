const express = require('express')

const app = express()
app.get("/", (req,res)=>{
    res.send('<h1 style="color:red;">Hola mundo</h1>')
})

var visitas = 0
app.get('/visitas', (req, res)=>{
res.send(`la cantidad de visitas es: ${++visitas}`)
})

// app.get('/fecha-hora',(req,res)=>{
//     res.send({fyh: new Data().toLocaleString()})
// })

app.get('/saludo', (req, res)=>{
    let person = req.query.person
    res.send(`hola ${person}`)
})

const port = 8081;

const server = app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
})

server.on('error', (error) =>console.log(`error en el servidor ${error}`))
