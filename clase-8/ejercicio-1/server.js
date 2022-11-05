const express = require ('express')
const multer = require ('multer')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploads = multer({storage: storage})

app.post('/subir', uploads.single('miArchivo'), (req,res, next)=>{
    const file = req.file
    if(!file){
        const error = new Error ('Por favor subir un archivo')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(`archivo <b>${file.originalname}</b> subido correctamente`)
})


const port = 8090

const server =  app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
server.on('error', (err)=> console.log('erro en el servidor', err))