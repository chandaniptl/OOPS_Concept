class Employee {
    constructor(name, empId, email) {
        this.name = name;
        this.empId = empId;
        this.email = email;
    }

    getBasicInfo() {
        return `Name: ${this.name}, ID: ${this.empId}, Email: ${this.email}`;
    }
}

class EmployeeDetails extends Employee {
    constructor(name, empId, email, city, department) {
        super(name, empId, email);
        this.city = city;
        this.department = department;
    }

    showDetails() {
        return `${this.getBasicInfo()}, City: ${this.city}, Department: ${this.department}`;
    }
}

document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const empId = document.getElementById('rollNo').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const department = document.getElementById('course').value;

    const employee = new EmployeeDetails(name, empId, email, city, department);

    const resultDiv = document.createElement('div');
    resultDiv.className = "result";
    resultDiv.textContent = employee.showDetails();

    const oldResult = document.querySelector(".result");
    if (oldResult) oldResult.remove();

    document.querySelector('.form-container').appendChild(resultDiv);

    document.getElementById('employeeForm').reset();
});
