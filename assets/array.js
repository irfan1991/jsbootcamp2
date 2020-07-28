// ini array indeks

// var a = new Array(); // nilai a elementnya 0 elements
// var b = new Array(5); // nilai b elemennya ada 5 elements
// a[0]=  70;

// var ab = [30,40,50]; // nilai ab elementnya ada 3 elements dengan element 30,40,50
// var ac = new Array(30,40,50); // sama dengan ab
// var c = []; // sama dengan a


// ini array berasosiatif
// var a = {}; // array kosong
// var b = {'satu': 1, 'dua':2,'tiga':3} // array dengan 3 elemnet

// var ab = new Array();
// ab['http'] = 'Hypertext Transfer Protocol';
// ab['html'] = 'Hypertext Markup Language';
// ab['xml'] = 'Extensible Markup Language';
// ab['json'] = 'Javascript Object Notatation';


// for (let key in ab) {
//  console.log(key.toUpperCase() + '\t= '+ab[key] ) ;
// }

// Array dua demensi
 var barang = [
     ['B001','Spidol',7000],
     ['B002','Stabilo',13000],
     ['B003','Crayon',5500],
     ['B004','Pencil',12000],
 ];

 console.log('KODE \t NAMA BARANG \t HARGA');
 console.log('-----\t--------------\t-----');
 for (let index = 0; index < barang.length; index++) {
    for (let j = 0; j< barang[index].length; j++) {
     process.stdout.write(barang[index][j].toString());
     if (j < barang[index].length-1) {
        process.stdout.write(' \t ');
     }
       
    }
    console.log();
 }