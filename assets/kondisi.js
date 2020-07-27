// let x = 50;

// if (x > 70) {
//     console.log(x);
// } else {
//     console.log("Nilai anda kurang dari 70");
// }

// let bahasa = "Arab";
// let salam = "Selamat Pagi!";

// if (bahasa === "Indonesia") {
//     salam = "Selamat Malam Syang !";
// } else if (bahasa === "English"){
//     salam = "Good Morning";
// } else if (bahasa === "Arab") {
//     salam = "Shobahul khoir";
// }

// console.log(salam);

var readline = require('readline-sync');

// var noBulan = parseInt(readline.question('Masukkan nomor bulan : '));
// var namaBulan;

// switch (noBulan) {
//     case 1:
//         namaBulan = 'Januari';
//         break;

//     case 2:
//         namaBulan = 'Februari';
//         break;

//     case 3:
//         namaBulan = 'Maret';
//         break;
    
//     case 4:
//         namaBulan = 'April';
//         break;

//     default: {
//         console.log(`Tidak ada bulan ke-${noBulan}`);
//         process.exit(1);
//     }
       
// }

// console.log(`Nama bulan ke-${noBulan} adalah ${namaBulan}`);

// if (noBulan === 1 || noBulan === 2 || noBulan === 3) {
//     console.log('Triwulan 1');
// }else if(noBulan === 4 || noBulan === 5 || noBulan === 6) {
//     console.log('Triwulan 11');
// }else if(noBulan === 7 || noBulan === 8 || noBulan === 9) {
//     console.log('Triwulan 111');
// } else {
//     console.log(`Tidak ada triwulan ke-${noBulan}`);
// }

// switch (noBulan) {
//     case 1:
//     case 2:
//     case 3:console.log('Triwulan 1');break;
//     case 4:
//     case 5:
//     case 6: console.log('Triwulan 11');break;
//     case 7:
//     case 8:
//     case 9:console.log('Triwulan 111');break;
//         break;

//     default:
//         console.log(`Tidak ada triwulan ke-${noBulan}`);
//         break;
// }

var hari = readline.question('Masukkan nama hari : '), noHari;
switch (hari.toLowerCase()) {
    case 'minggu':
        noHari = 1;
        break;

    case 'senin':
        noHari = 2;
        break;
    default:{
        console.log(`Nama hari yang ditunjukkan salah`);
        process.exit(1)

    }
      
}

console.log(`${hari} adalah hari ke ${noHari}`);