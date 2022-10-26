var websites = [
    'w3schools',
    'stackoverflow',
    'mdn',
    'freecodecamp',
    'udemy'
];

for (let index in websites) {
    console.log(index);
    // console.log(websites[index])
}

console.log('---------------------------------')

for (let aarIndex of websites) {
    console.log(aarIndex)
}




let num = 0; 
while (num <= 1000) {

    let rem = num % 2;

    if (rem == 0) {
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is an odd number`)
    }

    num++;
}




let existingRef = 6;
let newRef = 0;


function generateReference(max) {
    return Math.floor(Math.random() * max) + 1;
}

do{
    newRef = generateReference(10);
    console.log(`the reference is ${newRef}`)
} while(newRef != existingRef)

console.log('our new transaction reference is:' + newRef);


var transaction = {
    reference: newRef,
    amount: 5000,
    account_number: 2376453218,
    bank_name: 'Zenith'
}


console.log(transaction)


