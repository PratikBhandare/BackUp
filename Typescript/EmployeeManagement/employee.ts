// enum role{
//     Manager="Manager",
//     Developer="Developer",
//     Intern="Intern",
// }

// enum activeStatus{
//     active="active",
//     inactive="inactive"
// }



// interface Employee{
//     ID:number;
//     name:String;
//     email:String;
//     role:role;
// }

// let Managers = {};
// let Developers = {};
// let Interns = {};

// function  addEmployee(role:role,employee:Employee){

//     if(role==="Manager"){
//         Managers[employee.ID]=employee;
//     }else if(role==="Developer"){
//         Developers[employee.ID]=employee;
//     }else if(role==="Intern"){
//         Interns[employee.ID]=employee;
//     }

// }

// function updateRecords(role:role,employee:Employee,updates:Partial<Employee>){
//     return{...employee,...updates}
// }

// type UserPreview=Pick<Employee,"name"|"email">
// function summary(userPreview:UserPreview){
    

// }


// let developer1: Employee=({ID:1,name:"Pratik",email:"pratik@gmail.com",role:role.Developer})
// addEmployee(role.Developer,developer1);
// console.log(Developers)
// console.log("Updated Record",updateRecords(role.Developer,developer1,{email:"pratik"}))









