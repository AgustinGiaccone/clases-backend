const express = require ('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const server = app.listen (port, ()=>{
    console.log (`servidor abierto en puerto http://localhost:${port}`)
})

server.on ('error', (error)=>{
    console.log('error en el servidor', error)
})