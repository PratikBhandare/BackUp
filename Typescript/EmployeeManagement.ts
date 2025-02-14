enum roles{
    Manager="Manager",
    Developer="Developer",
    Designer="Designer",
    Tester="Tester",
    HR="HR"
}

interface Employee{
    id:number;
    name:String;
    role:roles;
    salary:number;
    isActive:boolean;
}

class System{
    private emps:Employee[]=[];


    addEmployee(emp:Employee):void{
        if(this.emps.some(e=>e.id===emp.id)){
            console.log(`Employee with ID ${emp.id} is already exist`);
            return;

        }else{

            if(emp.salary>0){
                this.emps.push(emp);

                console.log(`Employee with ID ${emp.id} is registered succesfully !!`);
            }else{
                console.log("Salary Should be Greater than 0 !!");
            }

        }

    }

    listAllEmployee():Employee[]{
        return this.emps;
    }

    filterEmployeebyRole(role:String):Employee[]{
        let result:Employee[]=[];
        for(let i=0;i<this.emps.length;i++){
            if(this.emps[i].role===role){
                result.push(this.emps[i]);
            }
        }
        if(!result.length){
            console.log("Not Found");
        }return result;
        
    }

    filterEmployeebyStatus(status:boolean):Employee[]{
        let result:Employee[]=[];
        for(let i=0;i<this.emps.length;i++){
            
            if(this.emps[i].isActive===true){
                result.push(this.emps[i]);
            }
        }
        return result;
    }

    updateEmployeeStatusbyID(id:number):void{
        for(let i=0;i<this.emps.length;i++){
            if(this.emps[i].id===id){
                if(this.emps[i].isActive==true){
                    this.emps[i].isActive=false;
                }else{
                    this.emps[i].isActive=true;
                }
            }
        }
    }

    calculateSalaryofAllActiveEmp():void{
        let totalsalary:number=0;
        for(let i=0;i<this.emps.length;i++){
            if(this.emps[i].isActive==true){
                totalsalary+=this.emps[i].salary;
            }
        }
        console.log(`Total Salary of Active Employees is ${totalsalary}`)
    }

    sortbySalary():void{
        let compare = (a:number, b:number) => {
            if (this.emps[a].salary < this.emps[b].salary) {
                return -1;
            }
            if (this.emps[a].salary > this.emps[b].salary) {
                return 1;
            }
            return 0;
        };
        this.emps.sort();

    }
}

//creating System
let System1 = new System();


//Adding Employees
System1.addEmployee({id:1,name:"Akash",role:roles.Developer,salary:50000,isActive:true})
System1.addEmployee({id:2,name:"Rahul",role:roles.Developer,salary:60000,isActive:true})
System1.addEmployee({id:3,name:"Rohan",role:roles.HR,salary:60000,isActive:false})
System1.addEmployee({id:4,name:"Sarvesh",role:roles.Developer,salary:45000,isActive:true})
System1.addEmployee({id:5,name:"Akhilesh",role:roles.Developer,salary:30000,isActive:false})


//Displaying List of All Listed Employees
let a:Employee[]=System1.listAllEmployee();
console.log("List of All Employees:\n");
console.log(a);




// filtering Employees with isAvailable status true
console.log("Filtered By Active Status:\n");
let filterbyStatus=System1.filterEmployeebyStatus(true);
console.log(filterbyStatus);



//filtering Employees with the Role
console.log("Filtered By Roles:\n");
let filterbyrole=System1.filterEmployeebyRole("HR");
console.log(filterbyrole);





//filtering Employees with isAvailable status true
console.log("Filtered Result:\n");
let f=System1.filterEmployeebyStatus(true);
console.log(f);


//Update isActive status by ID
System1.updateEmployeeStatusbyID(1);
console.log(a);

// Calculate Total Salary of Active Employees
System1.calculateSalaryofAllActiveEmp();




System1.sortbySalary();
