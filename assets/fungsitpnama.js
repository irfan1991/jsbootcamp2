// anonymous function
var readline = require('readline-sync');

// var tambah = function (a,b) {
//     return a + b;
// }

//arrow function
var tambah = (a,b) => a +b;

var a = parseInt(readline.question('Masukkan nilai a : '));
var b = parseInt(readline.question('Masukkan nilai b : '));

var hasil = tambah(a,b);

console.log(`${a} + ${b} = ${hasil}`);