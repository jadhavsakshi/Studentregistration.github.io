window.addEventListener('load', (event) => {
    let studentList = localStorage.getItem("StudentList");
    if(studentList) {
        studentList = JSON.parse(studentList);
    } else {
        studentList = [];
    }
    processStudentDataResponse(studentList);
});

const save = (event) => {
    event.preventDefault();
    try{
        let firstname = document.getElementById("firstname").value;
        let middlename = document.getElementById("middlename").value;
        let lastname = document.getElementById("lastname").value;
        let course = document.getElementById("course").value;
        let gender = document.getElementById("gender").value;
        let email = document.getElementById("email").value;
        let student = {
            firstname, middlename, lastname, course, gender, email
        }
        let studentList = localStorage.getItem("StudentList");
        if(studentList) {
            studentList = JSON.parse(studentList);
        } else {
            studentList = [];
        }
        studentList.push(student);
        localStorage.setItem("StudentList", JSON.stringify(studentList));
        document.getElementById("form").reset();
        processStudentDataResponse(studentList);
    } catch(exception){
        return;
    }
}

const processStudentDataResponse = (studentList) => {
    const headerHtml = "<th>First Name</th><th>Middle Name</th><th>Last Name</th><th>Course</th>"+
                       "<th>Gender</th><th>Email</th>";
    if(studentList.length == 0) return;
    let innerHtml = `${headerHtml}`;                   
    for(const studentData of studentList){                
        innerHtml = `${innerHtml}
            <tr>
                <td>
                    ${studentData.firstname}
                </td>
                <td>${studentData.middlename}</td>
                <td>${studentData.lastname}</td>
                <td>${studentData.course}</td>
                <td>${studentData.gender}</td>
                <td>${studentData.email}</td>
            </tr>
        `;
    }        
    document.querySelector('#table-display').innerHTML = innerHtml;  
}