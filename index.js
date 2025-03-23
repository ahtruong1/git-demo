let a = 1;
let b = 2;

swap();

console.log("A: ", a);
console.log("B: ", b);

function swap()
{
    let temp = a;
    a = b;
    b = temp;
}