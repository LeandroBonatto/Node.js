const http = require("http")
const path = require("path")
const fs = require("fs")
const Person = require("./person.js")
const { sum } = require("lodash")

const server = http.createServer((request, response) => {
    console.log(request.url)
    let filePath = path.join(
        __dirname,
        'public',
        request.url === '/' ? 'index.html' : request.url + ".html"
    )

    if(request.url == "/person") {
        response.writeHead(200, {'Content-Type' : 'application/json'})
        let person1 = new Person("John Smith", 25)
        responde.end(JSON.stringify(person1))
    } else if (request.url == "/sum") {
        response.writeHead(200, {'Content-Type' : 'application/json'});

        nums = [1, 2, 3, 4]
        sum = 0

        nums.array.forEach(function (num) => {
            console.log(this)
            sum += num
        });

        response.end(JSON.stringify(sum)) {
    } else if (request.url == "/sum") {
            response.writeHead(200, {'Content-Type' : 'application/json'});
    }

     /*   for(var i=0; i<5; ++i){
            setTimeout(() => {
            console.log(`var i: ${i}`)
        }, 1000)
    }

        for(let i=0; i<5; ++i){
            setTimeout(() => {
            console.log(`var i: ${i}`)
        }, 1000)
    }
    */

    /*    function sum(...nums) {
            console.log(nums.reduce((total, num) => {total += num}, 0))
            console.log(sum)
            return sum
        }
            let sum = sum[1, 2, 4, 10, 30, 4, 10, 20]
            console.log(total)
        }
    
    */
        
    /* const numbers = [10, 2, 3, 1, 30]

    const [one, two, ...rest] = numbers

    console.log(one)
    console.log(two)
    console.log(rest)

    */

        responde.end("Sucess") {
    }

    fs.readFile(filePath, (err, content) => {'Content-Type' : 'text/html' })
        if (err) { 
            if(err.code == 'EN0ENT') {
                response.writeHead(404, {'Content-Type' : 'text/html' })
                if(err.code == 'EN0ENT') {
                    fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    response.end(content, 'utf8')
            })
        } else {
            response.end(`Error: ${err.code}`)
        } 
    } else {
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.end(content, 'utf8')
    }
    })
});

const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
