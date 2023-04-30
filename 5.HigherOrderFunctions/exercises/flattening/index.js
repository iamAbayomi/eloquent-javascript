// Use the reduce method in combination with the concat method to "flatten"
// an array of arrays into a single array that has all the elements of the original  arrays.

function flattening(arrayofArrays) {
    return arrayofArrays.reduce((a, b) => a.concat(b), [])
}

function logValue(value) {
    console.log(value)
}

let arrayofArrays = [[1, 2], [3, 4], [5, 6], [7, 8]]
let otherArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

logValue(flattening(arrayofArrays))
