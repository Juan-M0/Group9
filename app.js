const addStudentForm = document.getElementById("addStudentForm");

addStudentForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const rollno = document.getElementById("rollno").value;
    const name = document.getElementById("name").value;
    const english = document.getElementById("english").value;
    const math = document.getElementById("math").value;
    const science = document.getElementById("science").value;
    const language = document.getElementById("language").value;
    const cs = document.getElementById("cs").value;

    const student = {
        rollno,
        name,
        english,
        math,
        science,
        language,
        cs
    };

    const existingData = JSON.parse(localStorage.getItem("studentData")) || [];

    existingData.push(student);

    localStorage.setItem("studentData", JSON.stringify(existingData));

    addStudentForm.reset();


    window.location.href = "student_records.html";
});