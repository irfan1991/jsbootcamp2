// membuat tipe object 
function Segitiga(a,t) {
    //properti
    this.alas = a;
    this.tinggi = t;
    
}
// method luas 
Segitiga.prototype.luas = function () {
    return this.alas * this.tinggi / 2;
}

// buat objeck dari tipe Segitiga
var obj = new Segitiga(4,5);

console.log('Sebelum nilai properti diubah');
console.log(`alas\t: ${obj.alas}`);
console.log(`tinggi\t: ${obj.tinggi}`);
console.log(`luas\t: ${obj.luas()}`);

//mengubah properti alas dan tinggi 
obj.alas = 10;
obj.tinggi = 8;

console.log('Sesudah nilai properti diubah');
console.log(`alas\t: ${obj.alas}`);
console.log(`tinggi\t: ${obj.tinggi}`);
console.log(`luas\t: ${obj.luas()}`);


