function calculatePercentage(marks) {

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}

function calculateGrade(percentage) {

    if (percentage >= 75)
        return "A";
    else if (percentage >= 60)
        return "B";
    else if (percentage >= 40)
        return "C";
    else
        return "F";
}

function isPass(percentage) {

    return percentage >= 40;
}

module.exports = {
    calculatePercentage,
    calculateGrade,
    isPass
};