var readline = require('readline-sync');

// membaca data
// var nama = readline.question('Siapakah Anda ?');
var a = readline.question('Msukkan bilangan a : ');
var b = readline.question('Masukkan bilangan b : ');


a = parseInt(a);
b = parseInt(b);

var c = a+ b;

//view
// console.log('Hai' + nama + ', Apa kabar ?');
console.log('jumlah bilangan a  & b adalah '+ c + ' tipe data c adalah '+ typeof c );


