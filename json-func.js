
// Challenge
const fs = require('fs')


const readData = fs.readFileSync('jsonData.json').toString()
console.log(readData);
const pData = JSON.parse(readData)
console.log(pData);
pData.name = 'ubaid'
pData.age = 20
pData.planet = 'Mars'
pData.city = 'Nagina'
const editData = JSON.stringify(pData)
fs.writeFileSync('jsonData.json', editData)
console.log(pData);




const Boook = {
  title: 'Math',
  author: 'Shahzama'
}
const data = JSON.stringify(Boook)
console.log(data);
fs.writeFileSync('jsonData.json', data)
const dataBuffer = fs.readFileSync('jsonData.json').toString()
const buff = JSON.parse(dataBuffer)
console.log(buff.author);





// const pdata = JSON.parse(data)
// console.log(pdata.author);


