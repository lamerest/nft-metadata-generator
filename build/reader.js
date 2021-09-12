let fs = require('fs');
let csv = require('jquery-csv');
let sample = './build/bears.csv';
let bearsArray

fs.readFileSync(sample, 'UTF-8', function (err, csvString) {
    if (err) { 
        console.log(err); 
    }
    console.log("In process");
    bearsArray = JSON.stringify(csv.toObjects(csvString));
    fs.writeFile("./build/bears-JSON.js", bearsArray, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully wrote file");
        }
    })
});

//fs.writeFileSync()