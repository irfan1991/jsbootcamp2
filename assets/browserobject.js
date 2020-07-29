// console.log('Selamat Anda dapat menggunakan javascript pada halaman ini')

// // ini komen sebaris //
// /* 
// ini komen banyak baris
// */

// var namaSaya = "Harry";
// console.log(namaSaya);

const firstName = prompt("Siapa nama depanmu ?");
const lastName = prompt("Siapa nama belakangmu ?");
const language = prompt("Bisa berbahasa Apa ??");

const user = {
    name : {
        first : firstName,
        last : lastName,
    } ,
    language :  language
};

if (user.language === "Arabic") {
    alert("Ahlan wa sahlan "+ user.name.first + " "+ user.name.last + "!");

} else if(user.language === "French") {
    alert("Ravi de vous rencountrer "+ user.name.first + " "+ user.name.last + "!");

} else if(user.language === "Japanse") {
    alert("Hajimemashite"+ user.name.first + " "+ user.name.last + "!");

} else if(user.language === "English") {
    alert("Nice to meet you "+ user.name.first + " "+ user.name.last + "!");
} else {
    alert("Senang bertemu dengan mu "+ user.name.first + " "+ user.name.last + "!");
}