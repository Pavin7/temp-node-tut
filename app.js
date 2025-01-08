
const http = require('http')

const server = http.createServer((req,res)=>{
    

    if(req.url==='/'){
        res.end('welcome to our homepage')
    }

    if(req.ur1==='/about'){
        res.end('Here is our short story ')
    }

    res.end(
        `<h1>OOPS</h1>
        <p>wecant find what you want j</p>`


    )

    

}

)

server.listen(5000)