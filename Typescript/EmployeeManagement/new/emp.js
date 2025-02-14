var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Roles;
(function (Roles) {
    Roles["Manager"] = "Manager";
    Roles["Developer"] = "Developer";
    Roles["Intern"] = "Intern";
})(Roles || (Roles = {}));
var employeeByRole = { Developer: [], Intern: [], Manager: [] };
var allEmployees = [];
function storeEmployeeByRole(employee) {
    allEmployees.push(employee);
    employeeByRole[employee.role].push(employee);
}
function updateEmployeeRecord(existingRecord, newRecord) {
    var empArray = allEmployees;
    var i = 0;
    for (; i < empArray.length; i++) {
        if (empArray[i].id === existingRecord.id) {
            empArray[i] = __assign(__assign({}, existingRecord), newRecord);
            break;
        }
    }
    throw new Error('Employee not found');
}
function getEmployeeSummary() {
    var empSummaryList = [];
    // let allEmployees = getAllEmployees();
    for (var i = 0; i < allEmployees.length; i++) {
        empSummaryList.push({ 'role': allEmployees[i].role, 'name': allEmployees[i].name });
    }
    return empSummaryList;
}
// function getAllEmployees(){
//     return [...employeeByRole[Roles.Intern],...employeeByRole[Roles.Developer], ...employeeByRole[Roles.Manager]];
// }
function performActivity(empId, activity) {
    for (var i = 0; i < allEmployees.length; i++) {
        if (allEmployees[i].id === empId && allEmployees[i].role == activity.role) {
            allEmployees[i].activities.push(activity);
            return 'Activity added';
        }
    }
    return 'Unauthorized role';
}
function logActivities(id) {
    // let allEmployees = getAllEmployees();
    for (var i = 0; i < allEmployees.length; i++) {
        if (allEmployees[i].id === id && allEmployees[i].status == "active") {
            return allEmployees[i].activities;
        }
    }
    throw new Error('Employee is Inactive');
}
function getCountOfTotalEmployees() {
    return allEmployees.length;
}
function getCountOfActiveEmployees() {
    return allEmployees.filter(function (employee) { return employee.status == 'active'; }).length;
}
function getCountByRole() {
    return { 'Intern': employeeByRole.Intern.length, 'Developer': employeeByRole.Developer.length, 'Manager': employeeByRole.Manager.length };
}
var employee1 = { id: 1, name: 'Suyash', email: 'abc@gmail.com', role: Roles.Intern, status: "active", activities: [{ activity: "Read employee agreement", role: Roles.Intern }, { activity: "Submit signed agreement", role: Roles.Intern }] };
var employee2 = { id: 2, name: 'Anish', email: 'pqr@gmail.com', role: Roles.Developer, status: "active", activities: [{ activity: "Complete assigned tasks", role: Roles.Developer }] };
var employee3 = { id: 2, name: 'Pratik', email: 'pqr@gmail.com', role: Roles.Developer, status: "inactive", activities: [{ activity: "Complete assigned tasks", role: Roles.Developer }] };
storeEmployeeByRole(employee1);
storeEmployeeByRole(employee2);
storeEmployeeByRole(employee3);
// employee1 = updateEmployeeRecord( employee1 ,{role:Roles.Manager,status:"active"});
console.log(performActivity(2, { activity: 'Attend meeting', role: Roles.Developer }));
console.table(getEmployeeSummary());
//Shows if employee is active
console.table(logActivities(1));
console.log("Total employees = ".concat(getCountOfTotalEmployees()));
console.log("Active employees = ".concat(getCountOfActiveEmployees()));
console.log(getCountByRole());
// console.log(employee1);
// console.table(employeeByRole);
// console.log(getAllEmployees())
