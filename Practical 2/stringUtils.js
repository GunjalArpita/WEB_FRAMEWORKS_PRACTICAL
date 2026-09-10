function addElement(arr, element) {

    arr.push(element);
    return arr;
}

function removeLastElement(arr) {

    arr.pop();
    return arr;
}

function mergeStrings(arr1, arr2) {

    return arr1.concat(arr2);
}

function extractElements(arr, startIndex, endIndex) {

    return arr.slice(startIndex, endIndex);
}

module.exports = {
    addElement,
    removeLastElement,
    mergeStrings,
    extractElements
};