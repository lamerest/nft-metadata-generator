const fs = require('fs')

fs.readFile('./files/bears-JSON.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    let bears  = JSON.parse(jsonString)) 
})
