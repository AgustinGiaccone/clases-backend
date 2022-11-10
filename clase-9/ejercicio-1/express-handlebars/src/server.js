const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.set('views', '../views')

app.get('/',(req,res)=>{
    res.render('datos',{
        nombre:'esteben',
        apellido:'gomes',
        edad:90,
        email:'estebangomes@gmail.com',
        telefodo:457832654
    })
})

const port = 3000
const server = app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

server.on('error', error =>{
    console.log('error en el servidor', error)
})

