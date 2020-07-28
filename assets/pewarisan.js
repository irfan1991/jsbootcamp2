var readline = require('readline-sync');
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

    cetakProperti(){
        console.log(`alas\t: ${this.alas}`);
        console.log(`tinggi\t: ${this.tinggi}`);
    }
}

class SegitigaWarna extends Segitiga {

    constructor(a,t,w){
        super(a,t);
        this.warna = w ;
    }


    cetakPropertiWarna(){
        super.cetakProperti();
        console.log(`Warna\t: ${this.warna}`);
    }


}


var a = readline.question('Msukkan nilai alas : ');
var t = readline.question('Masukkan nilai tinggi : ');

// membuat object 
var obj = new SegitigaWarna(a,t, 'merah');

obj.cetakPropertiWarna();
console.log(`luas\t: ${obj.luas()}`);