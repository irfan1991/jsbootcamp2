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


    //method statis
    static buatObject(a,t){
        return new Segitiga(a,t);
    }
}


var a = readline.question('Msukkan nilai alas : ');
var t = readline.question('Masukkan nilai tinggi : ');

// manggil method static
var obj = Segitiga.buatObject(a,t);

console.log(`alas\t: ${obj.alas}`);
console.log(`tinggi\t: ${obj.tinggi}`);
console.log(`luas\t: ${obj.luas()}`);