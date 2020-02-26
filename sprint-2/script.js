var studentDetailsInArr = []
function Studentdetails(name, grade, section, examtype, telugu, hindi, english, maths, science, social,total) {
    this.name = name;
    this.grade = grade;
    this.section = section;
    this.examtype = examtype;
    this.telugu = telugu;
    this.hindi = hindi;
    this.english = english;
    this.maths = maths;
    this.science = science;
    this.social = social;
    this.total = parseInt(telugu) + parseInt(hindi) + parseInt(english) + parseInt(maths) + parseInt(science) + parseInt(social);
}
document.getElementById("btnSub").addEventListener('click', details)
function details(e) {
    e.preventDefault();
    var name = document.getElementById("name").value
    var grade = document.getElementById("grade").value
    var section = document.getElementById("section").value
    var examtype = document.getElementById("examtype").value
    var telugu = document.getElementById("telugu").value
    var hindi = document.getElementById("hindi").value
    var english = document.getElementById("english").value
    var maths = document.getElementById("maths").value
    var science = document.getElementById("science").value
    var social = document.getElementById("social").value
    var total = parseInt(telugu) + parseInt(hindi) + parseInt(english) + parseInt(maths) + parseInt(science) + parseInt(social)
    if (name.length == 0) {
        alert("Please Enter Student Name Properly")
    }
    else {
        var student = new Studentdetails(name, grade, section, examtype, telugu, hindi, english, maths, science, social, total);
        studentDetailsInArr.push(student);
        console.log(studentDetailsInArr)
    }
    displayDetailsinTable(studentDetailsInArr)
}
var tableData = document.getElementById("table");
tableData.setAttribute("class", "tohide");

function displayDetailsinTable(arr) {
    var tableData = document.getElementById("table");
    tableData.setAttribute("class", "toshow");
    document.getElementById('display').innerHTML = ""
    for (var i = 0; i < arr.length; i++) {
        var row = document.createElement('tr');
        var tableBody = document.getElementById('display')
        tableBody.append(row)

        var col1 = document.createElement('td');
        col1.innerHTML = arr[i]["name"];
        row.appendChild(col1)

        var col2 = document.createElement('td');
        col2.innerHTML = arr[i]["grade"];
        row.appendChild(col2)

        var col3 = document.createElement('td');
        col3.innerHTML = arr[i]["section"];
        row.appendChild(col3)

        var col4 = document.createElement('td');
        col4.innerHTML = arr[i]["examtype"];
        row.appendChild(col4)

        var col5 = document.createElement('td');
        col5.innerHTML = arr[i]["telugu"];
        row.appendChild(col5)

        var col6 = document.createElement('td');
        col6.innerHTML = arr[i]["hindi"];
        row.appendChild(col6)

        var col7 = document.createElement('td');
        col7.innerHTML = arr[i]["english"];
        row.appendChild(col7)

        var col8 = document.createElement('td');
        col8.innerHTML = arr[i]["maths"];
        row.appendChild(col8)

        var col9 = document.createElement('td');
        col9.innerHTML = arr[i]["science"];
        row.appendChild(col9)

        var col10 = document.createElement('td');
        col10.innerHTML = arr[i]["social"];
        row.appendChild(col10)

        var col12 = document.createElement('td');
        col12.innerHTML = arr[i]["total"];
        row.appendChild(col12)

        var col11 = document.createElement('td');
        var delbtn = document.createElement('button');
        delbtn.innerHTML = "Delete"
        delbtn.setAttribute('class', "delColor")
        col11.append(delbtn);
        row.appendChild(col11)

        col11.addEventListener('click', deleteStudentData)
    }
}

function deleteStudentData() {
    var parent = this.parentElement;
    parent.remove();
}
var sortingStudent = document.getElementById("sortingStudent")
sortingStudent.addEventListener('click', sortingbyName)

function sortingbyName() {
    var sortingStudent = document.getElementById("sortingStudent").value
    console.log(sortingStudent);

    if (sortingStudent == "acc") {
        studentDetailsInArr.sort(function (a, b) {
            if (a.name > b.name) {
                return 1
            }
            if (a.name < b.name) {
                return -1
            }
            return 0;
        });
    }
    if (sortingStudent == "des") {
        studentDetailsInArr.sort(function (a, b) {
            if (a.name > b.name) {
                return -1
            }
            if (a.name < b.name) {
                return 1
            }
            return 0;
        });
    }
    displayDetailsinTable(studentDetailsInArr)
}
var typeofGrade = document.getElementById("typeofGrade")
typeofGrade.addEventListener('change', typeofStudentGrade)

function typeofStudentGrade() {
    var typeofGrade = document.getElementById("typeofGrade").value
    // console.log(typeofGrade)
    var reqStudents = [];
    if (typeofGrade == "all") {
        reqStudents = studentDetailsInArr
    }
    if (typeofGrade == "X") {
        for (var i = 0; i < studentDetailsInArr.length; i++) {
            if (studentDetailsInArr[i]["grade"] == typeofGrade) {
                reqStudents.push(studentDetailsInArr[i]);
            }
        }
    }

    if (typeofGrade == "XI") {
        for (var i = 0; i < studentDetailsInArr.length; i++) {
            if (studentDetailsInArr[i]["grade"] == typeofGrade) {
                reqStudents.push(studentDetailsInArr[i]);
            }
        }
    }

    if (typeofGrade == "XII") {
        for (var j = 0; j < studentDetailsInArr.length; j++) {
            if (studentDetailsInArr[j]["grade"] == typeofGrade) {
                reqStudents.push(studentDetailsInArr[j]);
            }
        }
    }
    console.log(reqStudents)
    displayDetailsinTable(reqStudents)
}