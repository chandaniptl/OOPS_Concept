    class Person {
      constructor(name, empId) {
        this.name = name;
        this.empId = empId;
      }
      showBasic() {
        return `Name: ${this.name}<br>Employee ID: ${this.empId}`;
      }
    }

    class JobDetails extends Person {
      constructor(name, empId, department, designation) {
        super(name, empId);
        this.department = department;
        this.designation = designation;
      }
      showJob() {
        return `${this.showBasic()}<br>Department: ${this.department}<br>Designation: ${this.designation}`;
      }
    }

    class SalaryDetails extends Person {
      constructor(name, empId, salary, experience) {
        super(name, empId);
        this.salary = salary;
        this.experience = experience;
      }
      showSalary() {
        return `${this.showBasic()}<br>Salary: ₹${this.salary}<br>Experience: ${this.experience} years`;
      }
    }

    document.getElementById('empForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const empId = document.getElementById('empId').value;
      const department = document.getElementById('department').value;
      const designation = document.getElementById('designation').value;
      const salary = document.getElementById('salary').value;
      const experience = document.getElementById('experience').value;

      const job = new JobDetails(name, empId, department, designation);
      const sal = new SalaryDetails(name, empId, salary, experience);

      document.getElementById('output').innerHTML =
        `<h3>Job Details:</h3>${job.showJob()}<br><br>
         <h3>Salary Details:</h3>${sal.showSalary()}`;

      document.getElementById('empForm').reset();
    });
