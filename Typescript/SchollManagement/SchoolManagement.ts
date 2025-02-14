//Parent Class
class Person{
    name:String;
    age:number;

    constructor(name:String,age:number){
        this.name=name;
        this.age=age;
    }

    introduce():void{
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
}

//Child Class of Class Parent
class Student extends Person{
    //readonly property
    readonly studentId:number;

    grade:String;

    //static variable to store the count of students
    static totalNoOfStudents:number=0;

    constructor(name:String,age:number,studentId:number,grade:String){
        super(name,age);
        this.studentId=studentId;
        this.grade=grade;
        Student.totalNoOfStudents++;

    }

    static getTotalStudents():number{
        return Student.totalNoOfStudents;
    }

    introduce(): void {
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
}


//Child Class of Class Parent
class Teacher extends Person{

    teacherId:number;
    subject?:String;  //Optional

    //static variable to store the count of students
    static totalNoOfTeachers:number=0;
    constructor(name:String,age:number,teacherId:number,subject?:String){
        super(name,age);
        this.teacherId=teacherId;
        this.subject=subject;
        Teacher.totalNoOfTeachers++;
    }

    static getTotalTeachers():number{
        return Teacher.totalNoOfTeachers;
    }


    introduce(): void {
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
}



abstract class Staff{
    department:String;
    constructor(department:String){
        this.department=department;
    }

    abstract workDetails();
}

class Clerk extends Staff{
    department: String="Management";
    
    responsibility:String;
    constructor(responsibility:String,department:String){
        super(department)
        this.responsibility=responsibility;
    }
    workDetails():void {
        console.log("Clerk Manages the attendance")
    }
}

//First get count of students
console.log(Student.getTotalStudents())

//creating new student
let stdent1=new Student("Pratik",21,43,"A");
console.log(stdent1);
stdent1.introduce()
//print Count of Students
console.log(Student.getTotalStudents())

//creating new student
let stdent2=new Student("Rahul",21,43,"A");
console.log(stdent2);
stdent2.introduce()
//print Count of Students
console.log(Student.getTotalStudents())



//First get count of Teachers
console.log(Teacher.getTotalTeachers())

//creating new Teacher
let teacher1=new Teacher("Pratik",21,43,"Maths");
console.log(teacher1);
teacher1.introduce()

//Display Count
console.log(Teacher.getTotalTeachers())

//creating new Teacher
let teacher2=new Teacher("Pratik",21,43,"Science");
console.log(teacher2);
teacher2.introduce()

console.log(Teacher.getTotalTeachers())