type Employee = {
    name: string,
    department: string
};

type Manager = {
    position:string
}

type ManagerEmployee = Employee & Manager;

let employee1: ManagerEmployee = {
    name: "Manager",
    department: "Development",
    position:"Senior Manager"
}

console.log(employee1);