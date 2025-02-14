enum Roles{
    Manager = "Manager",
    Developer = "Developer",
    Intern = "Intern"
}
interface Activity{
    activity : string,
    role : Roles
}
interface Employee{
    id : number,
    name : string,
    email : string,
    role : Roles,
    status : 'active' | 'inactive',
    activities : Activity[]
}

let employeeByRole : Record<Roles, Employee[]> = {Developer:[],Intern:[],Manager:[]};
let allEmployees : Employee[]= []

function storeEmployeeByRole(employee : Employee){
    allEmployees.push(employee);
    employeeByRole[employee.role].push(employee);
}

function updateEmployeeRecord(existingRecord : Employee, newRecord : Partial<Employee>){
    let empArray = allEmployees;
    let i = 0;
    for(; i<empArray.length; i++){
        if(empArray[i].id === existingRecord.id){
            empArray[i] = {...existingRecord, ...newRecord};            
            break;
        }
    }
    throw new Error('Employee not found');
}   
function getEmployeeSummary(){
    let empSummaryList : Pick<Employee,'name' | 'role'>[]= [];
    // let allEmployees = getAllEmployees();

    for(let i=0; i<allEmployees.length; i++){
        empSummaryList.push({'role' : allEmployees[i].role, 'name' : allEmployees[i].name});
    }
    return empSummaryList;
}   
// function getAllEmployees(){
//     return [...employeeByRole[Roles.Intern],...employeeByRole[Roles.Developer], ...employeeByRole[Roles.Manager]];
// }
function performActivity(empId : number, activity : Activity){
    for(let i=0; i<allEmployees.length; i++){
        if(allEmployees[i].id === empId && allEmployees[i].role == activity.role){
            allEmployees[i].activities.push(activity);
            return 'Activity added';
        }
    }
    return 'Unauthorized role';
}
function logActivities(id : number){
    // let allEmployees = getAllEmployees();
    for(let i=0; i<allEmployees.length; i++){
        if(allEmployees[i].id === id && allEmployees[i].status == "active"){
            return allEmployees[i].activities;
        }
    }
    throw new Error('Employee is Inactive');
}
function getCountOfTotalEmployees(){
    return allEmployees.length;
}
function getCountOfActiveEmployees(){
    return allEmployees.filter((employee) => employee.status == 'active').length;
}
function getCountByRole(){
    return {'Intern' : employeeByRole.Intern.length, 'Developer' : employeeByRole.Developer.length, 'Manager':employeeByRole.Manager.length};
}







let employee1 : Employee = {id:1, name:'Suyash', email:'abc@gmail.com', role : Roles.Intern, status:"active", activities : [{activity:"Read employee agreement", role:Roles.Intern},{activity:"Submit signed agreement", role:Roles.Intern}]};
let employee2 : Employee = {id:2, name:'Anish', email:'pqr@gmail.com', role : Roles.Developer, status:"active", activities : [{activity:"Complete assigned tasks", role:Roles.Developer}]};
let employee3 : Employee = {id:2, name:'Pratik', email:'pqr@gmail.com', role : Roles.Developer, status:"inactive", activities : [{activity:"Complete assigned tasks", role:Roles.Developer}]};



storeEmployeeByRole(employee1);
storeEmployeeByRole(employee2);
storeEmployeeByRole(employee3);


// employee1 = updateEmployeeRecord( employee1 ,{role:Roles.Manager,status:"active"});

console.log(performActivity(2, {activity:'Attend meeting', role:Roles.Developer}));


console.table(getEmployeeSummary());

//Shows if employee is active
console.table(logActivities(1));


console.log(`Total employees = ${getCountOfTotalEmployees()}`);



console.log(`Active employees = ${getCountOfActiveEmployees()}`);


console.log(getCountByRole());

// console.log(employee1);
// console.table(employeeByRole);
// console.log(getAllEmployees())