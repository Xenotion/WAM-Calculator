function update() {
    let currentWam = document.getElementById("currentWam").value;
    let subjectsCompleted = document.getElementById("subjectsCompleted").value;
    let desiredWam = document.getElementById("desiredWam").value;
    let subjectsLeft = document.getElementById("subjectsLeft").value;
    let wam = document.getElementById("wam")

    let totalMarksBefore = currentWam * subjectsCompleted
    let totalMarksAfter = desiredWam * subjectsLeft
    let coursesLeft = subjectsLeft - subjectsCompleted
    let marksLeft = totalMarksAfter - totalMarksBefore
    let averageWam = marksLeft / coursesLeft

    if (currentWam == "" || subjectsCompleted == "" || desiredWam == "" || subjectsLeft == "") {
        alert("Please Fill All Required Fields")
    } else {
        if (currentWam <= 0 || subjectsCompleted <= 0 || desiredWam <= 0 || subjectsLeft <= 0) {
            alert("Input cannot be less than 0")
        } else {
            wam.innerText = String(Math.round(averageWam))
        }
    }

}