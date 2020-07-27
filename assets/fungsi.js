// function greeting() {
//     console.log("Selamat Pagi");
// }


// function greeting(nama , bahasa ) {

//     if (bahasa === "English") {
//         console.log("Good Morning "+ nama + "!")
//     } else if (bahasa === "Indonesia") {
//         console.log("Selamat Pagi "+ nama + "!");
//     } else if (bahasa === "Arab") {
//         console.log("Shobahul Khoir "+ nama + "!");
//     }
   
// }

// // greeting();

// greeting("Hari", "Indonesia");

// const glob = 'a';

// function parent() {
    
//     const b = 'b';

//     function child () {
//         const c = 'c';
//     }
// }

// // function multiply(a,b) {
// //     return "Jumlah = "+ a+b;
// // }

// // let hasil = multiply(3,4);
// // console.log(hasil);

// function multiply(num) {
//     total = num * num;
//     return total
// }

// let total = 9;
// let number = multiply(20);
// console.log(total);

// pass-by-value (number,string,boolean)

// var x = 100,y = 200;
// function tukar(a,b) {
//     var c = a;
//     a = b;
//     b =c ;   
// }

// console.log('Sebelum ditukar : ');
// console.log(`x : ${x}`);
// console.log(`y : ${y}`);

// //memanggil fungsi 
// tukar(x,y);

// console.log('\nSetelah ditukar : ');
// console.log(`x : ${x}`);
// console.log(`y : ${y}`);


// pass-by-reference (object)
// function incerement(a) {
//     a.x +=1;
// }

// //membuat object
// var obj = new Object();

// // definisikan properti x pada objek yg telah dibuat
// obj.x = 10;

// console.log('Nilai sebelum dinaikkan ');
// console.log(`obj.x : ${obj.x}`);

// //panggil fungsinya
// incerement(obj);


// console.log('Nilai setelah dinaikkan ');
// console.log(`obj.x : ${obj.x}`);

//parameter deffault
// function cetak(a=10) {
   
//     console.log(a)
// }

// cetak(9999);

function cetak(s, n=3, newLine=true) {
 for (let index = 0; index < n; index++) {
    process.stdout.write(s);
    if(newLine) process.stdout.write('\n');
 }   
}


//1 parameter
console.log('1 parameter');
cetak('Javascript');

//2 parameter

console.log('2 parameter');
cetak('Javascript', 2);

//3 paremeter

console.log('3 parameter');
cetak('Pemrograman', 1 , false);
cetak('Javascript', 1 , false);