var readline = require('readline-sync');

class Segitiga {
    
    //konstructor
    constructor(a,t){
        this.alas =  a;
        this.tinggi = t;
    }

    luas(){
        return this.alas * this.tinggi / 2;
    }
}


var a = readline.question('Msukkan nilai alas : ');
var t = readline.question('Masukkan nilai tinggi : ');

// membuat object 
var obj = new Segitiga(a,t);

console.log(`alas\t: ${obj.alas}`);
console.log(`tinggi\t: ${obj.tinggi}`);
console.log(`luas\t: ${obj.luas()}`);