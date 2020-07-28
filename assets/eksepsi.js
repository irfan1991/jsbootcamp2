var readline = require('readline-sync');

// membuat kelas eksepsi
class DevisionByZeroError extends Error {
    constructor(msg){
        super(msg);
        this.name = this.constructor.name;
        this.message = msg;
    }


    getMessage(){
        return this.message;
    }
}


var a = parseInt(readline.question('Masukkan nilai a : '));
var b = parseInt(readline.question('Masukkan nilai b : '));

try {
    if (b === 0) {
        throw new DevisionByZeroError('Kesalahan : Terjadi pembagian nol');
    }
    var c = a /b ;
    console.log(`${a} / ${b} = ${c}`);
} catch (error) {
    console.log(error.getMessage());
}