//objek segitiga

var obj = {
    alas : 4,
    tinggi : 5,
    luas :  function () {
        return this.alas * this.tinggi / 2;
    }
}



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