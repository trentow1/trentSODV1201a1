// Converts a numeric mark into a letter grade with validation
function markToGrade() {
    const input = document.getElementById("mark-input-box").value;
    const message = document.getElementById("validation-message");
    const result = document.getElementById("grade-result");

    message.textContent = "";
    result.textContent = "";

    try {
        const mark = parseInt(input);

        if (isNaN(mark)) {
            throw "Mark must be a number.";
        }
        if (mark < 0) {
            throw "Mark cannot be negative.";
        }
        if (mark > 100) {
            throw "Mark cannot be greater than 100.";
        }

        let grade;
        if (mark >= 90) grade = "A";
        else if (mark >= 80) grade = "B";
        else if (mark >= 70) grade = "C";
        else if (mark >= 60) grade = "D";
        else if (mark >= 50) grade = "E";
        else grade = "F";

        result.textContent = `Your grade is: ${grade}`;
    } catch (err) {
        message.textContent = err;
    }
}
