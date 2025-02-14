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
var role;
(function (role) {
    role["Manager"] = "Manager";
    role["Developer"] = "Developer";
    role["Intern"] = "Intern";
})(role || (role = {}));
var activeStatus;
(function (activeStatus) {
    activeStatus["active"] = "active";
    activeStatus["inactive"] = "inactive";
})(activeStatus || (activeStatus = {}));
var Managers = {};
var Developers = {};
var Interns = {};
function addEmployee(role, employee) {
    if (role === "Manager") {
        Managers[employee.ID] = employee;
    }
    else if (role === "Developer") {
        Developers[employee.ID] = employee;
    }
    else if (role === "Intern") {
        Interns[employee.ID] = employee;
    }
}
function updateRecords(role, employee, updates) {
    return __assign(__assign({}, employee), updates);
}
var developer1 = ({ ID: 1, name: "Pratik", email: "pratik@gmail.com", role: role.Developer });
addEmployee(role.Developer, developer1);
console.log(Developers);
console.log(updateRecords(role.Developer, developer1, { email: "pratik" }));
