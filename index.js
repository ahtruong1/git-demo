let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 100;

swap();

console.log("A: ", a);
console.log("B: ", b);

function swap()
{
    let temp = a;
    a = b;
    b = temp;
}