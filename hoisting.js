print5();
print10();
for(let i = 0; i<5; i++){
    // console.log(i)
}
// console.log('outside',i);

function print(){
    console.log('inside print5', 5);
}
var print10 = function(){
    console.log('inside print10',10);
}