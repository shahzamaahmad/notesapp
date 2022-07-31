
const fs = require('fs')
const Boook = {
  title: 'Math',
  author: 'Shahzama'
}
const data = JSON.stringify(Boook)
// console.log(data);
fs.writeFileSync('jsonData.json', data)
const dataBuffer = fs.readFileSync('jsonData.json').toString()
const buff = JSON.parse(dataBuffer)
console.log(buff.author);


// const pdata = JSON.parse(data)
// console.log(pdata.author);


