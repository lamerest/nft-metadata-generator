let fs = require('fs');
let csv = require('jquery-csv');
let sample = './files/bears.csv';
let bearsArray

fs.readFile(sample, 'UTF-8', function (err, csvString) {
    if (err) { 
        console.log(err); 
    }

    bearsArray = JSON.stringify(csv.toObjects(csvString));

    fs.writeFile("./files/bears-JSON.json", bearsArray, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully wrote file");
        }
    })
});

//fs.writeFileSync()