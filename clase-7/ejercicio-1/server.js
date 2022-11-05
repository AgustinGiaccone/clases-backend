//--------------------------------clase-7-express-avanzado------------------------------------------------------------------------------
const express = require('express')
const app = express()
const frase = "hola mundo como estan"
const port = 8080

const server = app.listen (port, ()=>{
    console.log(`server en http://localhost:${port}`)
})
app.get('/', (req,res)=>{
    res.send(frase)
})

app.get('/api/letras/:num', (req,res)=>{
    const num =parseInt(req.params.num)

    if (isNaN(num)){
        return res.send ({error: 'el parametro ingresado no es un numero'})
    }

    if(num<1 || num > frase.length){
        return res.send({error:`el numero debe ser entre 1 y ${frase.length}`})
    }

    res.send(frase[num -1])
})

app.get ('/api/palabras/:num',(req,res)=>{
    const num = parseInt(req.params.num)

    if (isNaN(num)){
        return res.send ({error: 'el parametro ingresado no es un numero'})
    }
    const palabras = frase.split(' ')
    if(num<1 || num > frase.length){
        return res.send({error:`el numero debe ser entre 1 y ${palabras.length}`})
    }

    res.send(palabras[num -1])
})

server.on('error', error =>{
    console.log('error en el servidor', error)
})




