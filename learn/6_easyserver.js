const http = require('http')

const server = http.createServer((req,res) =>{
    if (req.method == "GET"){
        res.end(`
        <h1>Form</h1>
        <form method="post" action="/">
        <input name="title" type="text">
        <button type="submit"></button>
        </form>
        `)
    }
})

server.listen(3000,() =>{
    console.log('server is running...');
})