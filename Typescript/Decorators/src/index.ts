enum roles{
    manager = "Manager",
    developer = "Developer",
    intern = "Intern"
}
 
 
const employee={
    id :1,
    role:roles.developer
}
 
 
function allowAccess(activityAccess: string[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const isRoleHasAccess = activityAccess.some(role => role === employee.role);
 
            if (!isRoleHasAccess) {
                throw new Error(`User does not have access`);
            } else {
                console.log("User has access");
            }
            return method.apply(this, args);
        }
 
        return descriptor;
    }
}
 
class Access{
    @allowAccess(["admin"])
    report(){
       
    }
}
 