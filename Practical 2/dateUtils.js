function getCurrentDate() {

    let today = new Date();

    return today.getDate() + "/" +
           (today.getMonth() + 1) + "/" +
           today.getFullYear();
}

function getCurrentTime() {

    let today = new Date();

    return today.getHours() + ":" +
           today.getMinutes() + ":" +
           today.getSeconds();
}

function getCurrentDay() {

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return days[new Date().getDay()];
}

module.exports = {
    getCurrentDate,
    getCurrentTime,
    getCurrentDay
};