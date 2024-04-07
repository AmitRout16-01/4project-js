// const score = 500
// console.log(score);

// const balance = new Number(456)
// console.log("balance = "+balance);
// console.log("Length of converted String: "+balance.toString().length);
// console.log("Fixed by decimal point: "+balance.toFixed(2));
// console.log("Convert to String: "+balance.toString);


/*
    Precision() method
*/

// const num = 123.8789
// let pNum = num.toPrecision(6)
// console.log(pNum);

/*
    toLocalString() method
*/

// const num = 1000000
// console.log(num.toLocaleString());

/****************** Math ******************/

// console.log(Math.round(4.5));

// console.log(Math.floor(0.67));

// I want to print a numbe between 1 to 10

const max = 6
const min = 1

console.log(Math.floor(Math.random() * (max - min + 1) + min));