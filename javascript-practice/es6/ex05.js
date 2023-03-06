/*
    Arrow Function
*/

const power = function(x) {
    return x * x;
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n) {
    process.stdout.write(`${n}: ${power(n)} \t `)
});

/* ex1 */
console.log("\n ========== \n ");

numbers.forEach(function(n) {
    // let result = ((x) => {return x * x});
    // process.stdout.write(`${n}: ${result(n)}\t`);

    // let result = ((x) => {return x * x})(n);
    // process.stdout.write(`${n}: ${result}\t`);

    let result = (x => x*x)(n);
    process.stdout.write(`${n}: ${result}\t`);
});

/* ex2 */
console.log("\n ========== \n ");
numbers.forEach(n  => process.stdout.write(`${n}: ${(x => x*x)(n)}\t`));

/* ex3 여러 행 함수 */
console.log("\n ========== \n ");
[5, 3, 15, 1045, 43, 92].forEach(el  => {
    if(!(el % 5)) {
        process.stdout.write(`${el}: ${(x => x*x)(el)}\t`)
    }
});