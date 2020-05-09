//normal function
function add(num1,num2){
    return num1+num2;
}

const total=add(15,17);
console.log(total);

//undefined function parameter
function add(num1,num2){
    if(num2==undefined){
        num2=0;
    }
    return num1+num2;
}
const total1=add(13);
console.log(total1);


//given or zero
function add(num1,num2){
    num2=num2||0;
    return num1+num2;
}
const total3=add(12);
console.log(total3);


//defined in declaration
function add(num1,num2=20){
    return num1+num2;
}
const total4 =add(14,8);
console.log(total4);