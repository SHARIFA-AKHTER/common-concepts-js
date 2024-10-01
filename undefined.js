/**
 8 ways to get undefine
 1. variable that is not initiallized will give undefined
 2. function with no return
 3.peramiter that is not passed will be undefine
 4. if return has noting on the right side will return undefine
 5. property that  doesnot exist on an object will give yuo undefine
 6. accessing array elements outside of the indre range
 7.deleting an element inside an array 
 8. set a value directly to undefine
 */

 let first ;
 function second (a, b){
    const total = a + b;

 }
 const result = second();

 function third (a, b, c, d){
    const total = a + b + c + d;
    console.log(result);
 }

//  third (2, 5);
//  console.log(result);

function noNegative(a,b){
    if(a < 0 || b< 0){
        return
    }
    return a + b;
}
// const total = noNegative(2,5);
//  const total = noNegative(2 -5)
// console.log(total)

const total = noNegative(2, -5);
const fifth = {id: 2, name: 'ponchom', age: 40}
console.log(fifth.age, fifth.salary)

const sixth = [4,67,89,98,76];
//you should not do it.instead use splice
delete sixth[1]
console.log(sixth[1], sixth[5],sixth[200] );

const eighth = undefined;
const ninth = null;
 const data = {results: [], updated : null}
 console.log(typeof null);