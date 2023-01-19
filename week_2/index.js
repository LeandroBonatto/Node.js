const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((request, response) => {
    console.log(request.url)
    let filePath = path.join(
        __dirname,
        'public',
        request.url === '/' ? 'index.html' : request.url
    )

    fs.readFile(filePath, (err, content) => {
        if (err){ 
            if(err.code == 'EN0ENT'){
                response.writeHead(404, {'ontent-Type' : "text/html" })
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                response.end(content, 'utf8')
            })
        }

        response.writeHead(200, {"Content-Type": "text/html"})
        response.end(content, "utf8")
    })
})

.listen(8000, () => console.log('Server Running...'))
