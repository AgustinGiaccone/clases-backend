const express = require('express')
const { promises: fs} = require('fs')
const { isModuleNamespaceObject } = require('util/types')

const app = express()

app.engine('cte', async(filePath, option, callback)=>{
    try {
        const content = await fs.readFile(filePath,'utf8')
        const rendered = content.toString()
        .replace('^^titulo$$', '' + option.titulo + '')
        .replace('^^mensaje$$', ''+ option.mensaje + '')
        .replace('^^autor$$', ''+ option.autor + '')
        .replace('^^version$$', ''+ option.version + '')
        return callback(null, rendered)
    } catch (err) {
        return callback(new Error (err))
    }
})

app.set('views', __dirname + '/views')
app.set('view engine', 'cte')

app.get ('/',(req,res)=>{
    const datos = {
        titulo: 'Bienvenido a mi sitio',
        mensaje:'Este es mi sitio',
        autor:'Agustin Giaccone',
        version:'1.0.0'
    }
    res.render('plantilla1', datos)
})

const port = 8010
const server = app.listen(port,()=>{
    console.log(`puerto http://localhost:${port}`)
})

server.on('error',(err)=>
console.log('error en el servidor', err))