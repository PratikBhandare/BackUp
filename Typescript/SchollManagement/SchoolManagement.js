var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Parent Class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("Hi my name is ".concat(this.name, " and my age is ").concat(this.age));
    };
    return Person;
}());
//Child Class of Class Parent
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        _this.grade = grade;
        Student.totalNoOfStudents++;
        return _this;
    }
    Student.getTotalStudents = function () {
        return Student.totalNoOfStudents;
    };
    Student.prototype.introduce = function () {
        console.log("Hi my name is ".concat(this.name, " and my age is ").concat(this.age));
    };
    //static variable to store the count of students
    Student.totalNoOfStudents = 0;
    return Student;
}(Person));
//Child Class of Class Parent
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, teacherId, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.teacherId = teacherId;
        _this.subject = subject;
        Teacher.totalNoOfTeachers++;
        return _this;
    }
    Teacher.getTotalTeachers = function () {
        return Teacher.totalNoOfTeachers;
    };
    Teacher.prototype.introduce = function () {
        console.log("Hi my name is ".concat(this.name, " and my age is ").concat(this.age));
    };
    //static variable to store the count of students
    Teacher.totalNoOfTeachers = 0;
    return Teacher;
}(Person));
var Staff = /** @class */ (function () {
    function Staff(department) {
        this.department = department;
    }
    return Staff;
}());
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(responsibility, department) {
        var _this = _super.call(this, department) || this;
        _this.department = "Management";
        _this.responsibility = responsibility;
        return _this;
    }
    Clerk.prototype.workDetails = function () {
        console.log("Clerk Manages the attendance");
    };
    return Clerk;
}(Staff));
//First get count of students
console.log(Student.getTotalStudents());
//creating new student
var stdent1 = new Student("Pratik", 21, 43, "A");
console.log(stdent1);
stdent1.introduce();
//print Count of Students
console.log(Student.getTotalStudents());
//creating new student
var stdent2 = new Student("Rahul", 21, 43, "A");
console.log(stdent2);
stdent2.introduce();
//print Count of Students
console.log(Student.getTotalStudents());
//First get count of Teachers
console.log(Teacher.getTotalTeachers());
//creating new Teacher
var teacher1 = new Teacher("Pratik", 21, 43, "Maths");
console.log(teacher1);
teacher1.introduce();
//Display Count
console.log(Teacher.getTotalTeachers());
//creating new Teacher
var teacher2 = new Teacher("Pratik", 21, 43, "Science");
console.log(teacher2);
teacher2.introduce();
console.log(Teacher.getTotalTeachers());
