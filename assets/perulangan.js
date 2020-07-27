// // for 
// for (let index = 0; index < 5; index++) {
//    console.log(index);
    
// }

// const myArray = ["Senin", "Selasa", "Rabu", "Kamis","Jumat"];

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
    
// }


// // for of
// let namaIkan = ["teri","lele","paus","tongkol"];

// for (const ikan of namaIkan) {
//     console.log(ikan);
// }

//while 
// var i = 0 ;
// while (i < 5) {
//     console.log(`Langkah ke-${i} : Pemrograman Javascript denngan while  `);
//     i++;   
// }


// var data = [10,20,30,40,50];
// var total , i;

// total = 0;
// i = 0;
// while (i < data.length) {
//     total += data[i];
//     i++;
// }

// console.log(`Jumlah total = ${total}`);

// do-while
// do {
//     console.log(`Langkah ke-${i} : Pemrograman Javascript do-while  `);
//     i++;   
// } while(i < 5) 

// do {
//     total += data[i];
//     i++;
// }while(i < data.length);

//  console.log(`Jumlah total = ${total}`);

// for -in
//  var data = [10,20,30,40,50];

//  for (let index in data) {
//     console.log(`data[${index}] =  ${data[index]}`);
//  }

// var data = {one : 'satu', two : 'dua', three : 'tiga'};

// for (let kunci in data) {
//   console.log(`${kunci} \t: ${data[kunci]}`);
// }

// break and continue

for (let index = 0; index <10; index++) {
    if( index === 4) continue;
    process.stdout.write(index + ' ');
}