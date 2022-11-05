const http = require ('http')

const getMensage = ()=>{
    let hour = new Date().getHours()

    if (hour >= 6 && hour <=12){
        return 'buenos dias'
    } else if (hour >= 13 && hour <=19){
        return 'buenas tardes'
    }else if ((hour >= 20 && hour <= 23)||(hour >= 0 && hour <= 5)){
        return 'buenas noches'
    }
}



const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-Type': ' text/plain'})
    res.end(getMensage())
})

server.listen(8080,()=>{
    console.log('servidor corriendo en http://localhost:8080')
})