const path = require("path");
const fs = require("fs");

/* fs.mkdirSync(path.join(__dirname, "/test_sync"), {}, function(err){
    if(err) {
        throw err
    }
    console.log("Async folder created")

})

fs.mkdir(path.join(__dirname, "/test_sync"))
console.log("Async folder created") */

fs.writeFile(
    path.join(__dirname, "test", "hello.txt"),
    "New Content",
    (err) => {
        if(err) {
            throw err
        }
        console.log("File written")
        }
)

fs.appendFile(
    path.join(__dirname, "test", "hello.txt"),
    "\nAppended Content",
    (err) => {
        if(err) {
            throw err
        }
        console.log("Appended Content")
        }
)

fs.readFile(
    path.join(__dirname, "test", "hello.txt"),
    "utf8",
    (err, data) => {
        if(err) {
            throw err
        }
        console.log(data)
        }
)
