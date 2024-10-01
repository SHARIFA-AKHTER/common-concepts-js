//array like object
function sum (a, b, c){
    const args = [...arguments];
    // console.log(args)
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total =sum(45,89,97,70,5,64);            
// console.log(total)
console.log(sum.length);