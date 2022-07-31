// import chalk from 'chalk';
const yargs = require('yargs')
// import yargs from 'yargs'
// import vali from 'validator';
// const log = console.log
// console.log(process.argv);
// console.log(yargs.version);
// yargs.version()
const argv = yargs.command({
  command: 'add',
  description: 'Adding new note',
  handler: function () {
    console.log("Added New note Done !");
  }
})
yargs.parse();




// console.log(vali.isEmail('hhgmail.com'));
// // console.log(vali.isURL('hhgmail.com'));


// console.log(chalk.bold.red.bgBlue.inverse('Hello Worlds !'));
// console.log(+process.argv[2] + +process.argv[3]);


// const getNotes = require('./Notes')
// console.log(getNotes());


// const add = require('./utils')
// const sum = add(3, 6)
// console.log(sum);


// import fs from 'fs'
// const fs = require('fs')
// fs.appendFileSync('Notes.txt', "I love You")