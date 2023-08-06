document.addEventListener("DOMContentLoaded", function () {
    const studentData = JSON.parse(localStorage.getItem("studentData")) || [];

    const dashboardDataDiv = document.getElementById("dashboardData");

    if (studentData.length === 0) {
        dashboardDataDiv.innerHTML = "<p>No data available.</p>";
    } else {
        studentData.forEach((student) => {
            const card = document.createElement("div");
            card.classList.add("col-md-6");

            card.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        ${student.name}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Grade: ${calculateAverage(student)}</h5>
                       
                    </div>
                </div>
            `;

            dashboardDataDiv.appendChild(card);
        });
    }
});

function calculateAverage(student) {
    const grades = [student.english, student.math, student.science, student.spanish, student.pe, student.history];
    const totalSubjects = grades.length;
    const totalGrade = grades.reduce((total, grade) => total + parseInt(grade), 0);
    const average = totalGrade / totalSubjects;
    if (average >= 90) {
        return letterGrade = "A";
      } else if (average >= 80) {
        return letterGrade = "B";
      }else if (average >= 70) {
        return letterGrade = "C";
      }else if (average >= 60) {
        return letterGrade = "D";
      }else{
        return letterGrade = "F"
      }
}
