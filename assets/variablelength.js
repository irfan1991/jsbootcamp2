// function sum(a) {/
function sum(...a) { 
    if (!typeof a === 'Array') {
        console.log('KESALAHAN : parameter harus bertipe array !');
        return;
    }

    var total = 0.0;
    for (let element  of a) {
        total += element;
    }
    return total;
}


// parameter array dengan dua element
console.log('sum(10,20) ' + sum(10,20));

// parameter array dengan tiga element
// console.log('sum([10,20,30]) ' + sum([10,20,30]));

// parameter array dengan empat element
// console.log('sum([10,20,30,40]) ' + sum([10,20,30,40]))