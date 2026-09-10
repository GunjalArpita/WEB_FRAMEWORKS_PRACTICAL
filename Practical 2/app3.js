const util = require("./stringUtils");

let str1 = ["Apple", "Banana", "Mango"];
let str2 = ["Orange", "Kiwi"];

console.log("Original =", str1);

console.log("After Add =", util.addElement(str1, "Grapes"));

console.log("After Remove =", util.removeLastElement(str1));

console.log("Merged =", util.mergeStrings(str1, str2));

console.log("Slice =", util.extractElements(str1, 0, 2));