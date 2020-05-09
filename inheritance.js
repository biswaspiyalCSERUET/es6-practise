class Parent{
    constructor(){
        this.fatherName="Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFulName(){
        return this.name + " " + this.fatherName;
    }
}

const baby=new Child("Arnold");
const baby2=new Child("Tom");
console.log(baby.getFulName());
console.log(baby2);