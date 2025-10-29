//this is a class called employee
class employee{

    //these are properties
    employeeCode: number;
    employeeName: string; 

    //calling the properties of the class by a constructor
    constructor(code:number, name:string){
        this.employeeCode=code; 
        this.employeeName=name; 
        this.employeeCode = 123457;
        

    }
//method
    getSalary():number{
        return 10000; 
    }
    
}



