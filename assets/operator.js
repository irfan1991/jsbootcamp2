var readline = require('readline-sync');

// var a = parseInt(readline.question('Msukkan bilangan a : ')) ;
// var b = parseInt(readline.question('Masukkan bilangan b : '));



// console.log(`${a} * ${b} = ${a * b}`);
// console.log(`${a} / ${b} = ${a / b}`);
// console.log(`${a} + ${b} = ${a + b}`);
// console.log(`${a} - ${b} = ${a - b}`);
// console.log(`${a} % ${b} = ${a % b}`);
// console.log(`${a} ** ${b} = ${a ** b}`);


// function intdiv(a, b) {
//     var c = a / b ;
//     if (c >=  0) {
//         return Math.floor(c);

//     } else {
//         return Math.ceil(c);
//     }
// }

// console.log(`${a} / ${b} = ${intdiv(a,b)}`);

//operator string
// var data = ['Apel', 'Durian' , 'Jeruk'];

// var s ='[';
// for (let index = 0; index < data.length; index++) {
//    s += '\'' +data[index] + '\'';
//     if (index < data.length-1) s += ', ';
// }
// s += ']';

// console.log('s = ' +s);

//opertor kondisional
// var a = 10;
// var b = 20 ;
// var maks;

// maks = (a > b )? a : b;
// console.log(maks);
// var a = parseInt(readline.question('Masukkan bilangan bulat : '));

// process.stdout.write(`${a} adalah bilangan `);
// console.log((a % 2 == 0 )? 'genap' : 'ganjil');


//operator in
// var data = ['Javascript', 'Python','Ruby'];

// console.log(5 in data);
// console.log('length' in String);
// var data = {one : 'satu', two : 'dua', three : 'tiga'};
// console.log('one' in data);
// console.log('five' in data);

//operator instanceof
var s = new String('Javascript');

console.log(s instanceof String);