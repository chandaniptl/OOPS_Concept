class Student {
    constructor(name, rollNo, email) {
        this.name = name;
        this.rollNo = rollNo;
        this.email = email;
    }

    getBasicInfo() {
        return `Name: ${this.name}, Roll No: ${this.rollNo}, Email: ${this.email}`;
    }
}

class StudentDetails extends Student {
    constructor(name, rollNo, email, city, course) {
        super(name, rollNo, email);
        this.city = city;
        this.course = course;
    }

    showDetails() {
        return `${this.getBasicInfo()}, City: ${this.city}, Course: ${this.course}`;
    }
}

document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const course = document.getElementById('course').value;

    const student = new StudentDetails(name, rollNo, email, city, course);

    const resultDiv = document.createElement('div');
    resultDiv.className = "result";
    resultDiv.textContent = student.showDetails();

    const oldResult = document.querySelector(".result");
    if (oldResult) oldResult.remove();

    document.querySelector('.form-container').appendChild(resultDiv);

    document.getElementById('studentForm').reset();

});
