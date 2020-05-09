class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="CCS";
    }
}

const student1= new student(12,"piyal");
const student2= new student(12,"biswas");
const student3=new student(22,"raja");
console.log(student1.name,student2.name);
console.log(student3);