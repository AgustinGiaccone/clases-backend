const express = require('express')
const {Router} = express
const app = express()
const pets = []
const people = []
const port = 8000
app.use(express.static(__dirname +'/public'))
app.use(express.urlencoded({extended:true}))
const routerPets = new Router()

routerPets.use(express.json())

routerPets.get('/', (req,res)=>{
    res.send(pets)
})

routerPets.post('/',(req,res)=>{
    const {body}= req
    pets.push(body)
    res.send(pets)
})

const routerPeople = new Router()
routerPeople.use(express.json())

routerPeople.get('/', (req,res)=>{
    res.send(people)
})

routerPeople.post('/',(req,res)=>{
    const {body}= req
    people.push(body)
    res.send(body)
})

app.use('/mascotas', routerPets)
app.use('/people', routerPeople)


const server = app.listen(port, ()=>{
    console.log(`server http://localhost:${port}`)
})

server.on('error', (err)=> console.log('error en el servidor:', err))