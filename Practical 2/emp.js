function calculateHRA(basicSalary) {

    return basicSalary * 0.20;
}

function calculateDA(basicSalary) {

    return basicSalary * 0.15;
}

function calculateTax(grossSalary) {

    if (grossSalary > 50000)
        return grossSalary * 0.10;

    return grossSalary * 0.05;
}

function calculateNetSalary(basicSalary) {

    let hra = calculateHRA(basicSalary);
    let da = calculateDA(basicSalary);

    let grossSalary = basicSalary + hra + da;

    let tax = calculateTax(grossSalary);

    return grossSalary - tax;
}

module.exports = {
    calculateHRA,
    calculateDA,
    calculateTax,
    calculateNetSalary
};