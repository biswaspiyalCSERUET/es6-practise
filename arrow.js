// function doubleIt(num){
//     return num*2;
// }

// const doubleIt=function(num){
//     return num*2;
// }

//single parameter
const doubleIt=num =>num*2;
const result=doubleIt(51);
console.log(result);

//multiple parameters 
const add=(x,y)=>x+y;
const result1=add(51,49);
console.log(result1);

//no parameter
const give5=()=>5;
const result3=give5(51);
console.log(result3);

//details return type
const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff
    return result;
}
const result4=doMath(5,4);
console.log(result4);