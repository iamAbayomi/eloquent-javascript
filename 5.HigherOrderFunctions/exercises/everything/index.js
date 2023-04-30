/** 
 * Analogous to the some method, arrays also have an every method.
 * This one return true when the given function returns true for every element in the array.
 * In a way, some is a version of the || operator that acts on arrays, 
 * and every is like the && operator.
 * 
 * Implement every as a function that takes an array and a predicate function as parameters.
 * Write two versions, one using a loop and one using the some method.
 * 
 */

function every(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
            return false
        }
    }
    return true
}

function everySecond(array, predicate) {
    let response = true;
    array.forEach(element => {
        if (![element].some(predicate)) {
            response = false
        }
    });
    return response
}


function everyWithSome(array, predicate) {
   return !array.some((item) => !predicate(item))
}


let array = [1, 2, 3, 5, 5, 6, 10]
let predicate = (item) => item >= 1


console.log(every(array, predicate))
console.log(everySecond(array, predicate))
console.log(everyWithSome(array, predicate))
