const Boook = {
  title: 'Math',
  author: 'Shahzama'
}
const data = JSON.stringify(Boook)
console.log(data);
const pdata = JSON.parse(data)
console.log(pdata.author);