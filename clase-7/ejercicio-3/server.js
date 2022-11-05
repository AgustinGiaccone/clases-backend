const express =require ('express')
const app = express ()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const palabras = ['frase', 'inicial']

//-----
app.get('/api/frase',(req,res)=>{
    res.send({frase: palabras.join(' ')})
})

//-----
app.get('/api/palabras/:pos', (req,res)=>{
    const {pos}= req.params
    res.send({busca: palabras[parseInt(pos)-1]})
})

//-----
app.post('/api/palabras', (req,res)=>{
    const {palabra} = req.body
    palabras.push(palabra)
    res.send({agregada: palabra, posicion: palabras.length -1})
})

//-----
app.put('/api/palabras/:pos', (req,res)=>{
    const { palabra} = req.body
    const {pos} = req.params
    const palabraAnterior = palabras[parseInt(pos)-1]
    palabras[parseInt(pos)-1]=palabra
    res.send({anterior: palabraAnterior, nueva: palabra})
})

//-----
app.delete('/api/palabras/:pos', (req,res)=>{
    const {pos}=req.params
    const palabra = palabras.splice(parseInt(pos)-1,1)
    res.send({borrada: palabra})
})




const server = app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

server.on ('error', (err)=>console.log(`error:${err}`))
