const fs = require('fs')
const JsonPath = require('./index.json')
const mapping = Buffer.from(`
    const hello = () => {
        console.log("${JsonPath.name}")
        ${JsonPath.$print.map(x => `console.log('${x}')`).join(';')}
    }
    module.exports = hello
    `)
    // fs.writeFileSync('./index1.js',mapping.toString())
    const hello = require('./index1')
    hello()