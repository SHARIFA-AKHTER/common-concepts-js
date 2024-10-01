/**
 Truthy:
 1: true
 2.any number (+ve, -ve) will  be truthy other than 
 3. any string other than empty string
 4. '4', 'false'
 5.{}
 6.[]

 Falsy;
 1. false 
 2. 0
 3.''(emty string)
 4.undefine 
 5.null

 */

// const x = 'false';
// if(x){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }


  let x = [5, 6];
 console.log(x);

 if(x){
         console.log('value of x is truthy')
     }
     else{
         console.log('value of x is falsy')
     }

     //optional
     //check falsy

     const y = null;
     if(!y){
        console.log('value is falsy')
     }

     const z = 50;
     //chak true
     if (!!x){
        console.log('value is truthy')
     }