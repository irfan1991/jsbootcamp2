var readline = require('readline-sync');
// string primitive 
// var s1 = 'Pemrograman JS';
// var s2 = "Node js ";
// var s3 = `Express
// adalah framework
// dari node 
// JS`;


// // console.log('s1 ' + s1);
// // console.log("s2 " +  s2);
// console.log(`s3 ${s3}`);

// var a = 8, b = 9, c = a + b;

// console.log(`${a} + ${b} = ${c}`);

// console.log(`${a} * ${b} = ${a * b}`);

// console.log('Pemrogrmana\nJavascript');

// console.log(`${a} / ${b} = ${a / b}`);

// var s2 = new String('Javascript');
// console.log(s2);
// console.log(typeof s2);
// console.log( s2 instanceof String);
// console.log(s2.length);

// var s3 = 'Javascript';
// console.log(s3.substr(0,4)); // 0-3
// console.log(s3.substr(4)); // 4 akhir
// console.log(s3.substr()); // smua

var s4 = 'Pemrograman Web dengan Node JS';
console.log(s4.replace('Node JS','Express'));

var s5 = "Ruby Python Ruby Python";
// console.log(s5.replace("Ruby","Javascript"));
// console.log(s5.charAt(0));
// console.log(s5.indexOf('R'));

function reverseString(params) {
    var temp ='';
    for(let i=params.length-1; i >=0 ; i--) temp += params[i];
    return temp;
}

console.log(reverseString(s4));
console.log(reverseString(s5));