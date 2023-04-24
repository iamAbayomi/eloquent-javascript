// Use the reduce method in combination with the concat method to "flatten"
// an array of arrays into a single array that has all the elements of the original 
// arrays.

function flattening(arrayofArrays) {
    //  console.log("arrays of arrays ", arrayofArrays)
    let tempArrays = []
    return arrayofArrays.reduce((a, b) => a.concat(b), [])
    return arrayofArrays
}

let arrayofArrays = [[1, 2], [3, 4], [5, 6], [7, 8]]
let otherArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//flattening(arrayofArrays)

logValue(flattening(arrayofArrays))

function logValue(value) {
    console.log("value ", value)
}