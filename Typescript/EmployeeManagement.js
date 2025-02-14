var roles;
(function (roles) {
    roles["Manager"] = "Manager";
    roles["Developer"] = "Developer";
    roles["Designer"] = "Designer";
    roles["Tester"] = "Tester";
    roles["HR"] = "HR";
})(roles || (roles = {}));
var System = /** @class */ (function () {
    function System() {
        this.emps = [];
    }
    System.prototype.addEmployee = function (emp) {
        if (this.emps.some(function (e) { return e.id === emp.id; })) {
            console.log("Employee with ID ".concat(emp.id, " is already exist"));
            return;
        }
        else {
            if (emp.salary > 0) {
                this.emps.push(emp);
                console.log("Employee with ID ".concat(emp.id, " is registered succesfully !!"));
            }
            else {
                console.log("Salary Should be Greater than 0 !!");
            }
        }
    };
    System.prototype.listAllEmployee = function () {
        return this.emps;
    };
    System.prototype.filterEmployeebyRole = function (role) {
        var result = [];
        for (var i = 0; i < this.emps.length; i++) {
            if (this.emps[i].role === role) {
                result.push(this.emps[i]);
            }
        }
        if (!result.length) {
            console.log("Not Found");
        }
        return result;
    };
    System.prototype.filterEmployeebyStatus = function (status) {
        var result = [];
        for (var i = 0; i < this.emps.length; i++) {
            if (this.emps[i].isActive === true) {
                result.push(this.emps[i]);
            }
        }
        return result;
    };
    System.prototype.updateEmployeeStatusbyID = function (id) {
        for (var i = 0; i < this.emps.length; i++) {
            if (this.emps[i].id === id) {
                if (this.emps[i].isActive == true) {
                    this.emps[i].isActive = false;
                }
                else {
                    this.emps[i].isActive = true;
                }
            }
        }
    };
    System.prototype.calculateSalaryofAllActiveEmp = function () {
        var totalsalary = 0;
        for (var i = 0; i < this.emps.length; i++) {
            if (this.emps[i].isActive == true) {
                totalsalary += this.emps[i].salary;
            }
        }
        console.log("Total Salary of Active Employees is ".concat(totalsalary));
    };
    System.prototype.sortbySalary = function () {
    };
    return System;
}());
var System1 = new System();
System1.addEmployee({ id: 1, name: "Akash", role: roles.Developer, salary: 50000, isActive: true });
System1.addEmployee({ id: 2, name: "Rahul", role: roles.Developer, salary: 60000, isActive: true });
System1.addEmployee({ id: 3, name: "Rohan", role: roles.HR, salary: 60000, isActive: false });
System1.addEmployee({ id: 4, name: "Sarvesh", role: roles.Developer, salary: 45000, isActive: true });
System1.addEmployee({ id: 5, name: "Akhilesh", role: roles.Developer, salary: 30000, isActive: false });
var a = System1.listAllEmployee();
console.log("List of All Employees:\n");
console.log(a);
// filtering Employees with isAvailable status true
console.log("Filtered By Roles\n");
var filterbyrole = System1.filterEmployeebyRole("HR");
console.log(filterbyrole);
//filtering Employees with isAvailable status true
console.log("Filtered Result:\n");
var f = System1.filterEmployeebyStatus(true);
console.log(f);
System1.updateEmployeeStatusbyID(1);
console.log(a);
System1.calculateSalaryofAllActiveEmp();
System1.sortbySalary();
