const fs = require('fs')
let aArray = [
    {
        "Name" : "JOEY",
        "Gaduate" : "High School",
        "Homeland" : "Maxico",
        "Hobby" : "Play the game",
        "Second Hobby" : "Do the code",

    },
]
// fs.writeFileSync('./joey.txt',JSON.stringify(aArray))
const joey = fs.readFileSync('./joey.txt','utf8')
console.log(JSON.parse(joey))