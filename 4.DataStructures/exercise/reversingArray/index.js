
let tempArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function reverseArray(value) {
    let newArray = []
    for (let i = value.length - 1; i >= 0; i--) {
        newArray.push(value[i])
    }
    return newArray
}

function reverseArrayInPlace(value) {
    value = reverseArray(value)
    return value
}

function reverseArrayInPlaces(value) {
    //let tempArray = (value)
    let newArray = []
    let tempArray = JSON.parse(JSON.stringify(value))

    for (let i = tempArray.length-1; i >= 0; i--) {
        newArray.push(tempArray[i])
    }
    value = newArray
    return value
}

function logValue(value) {
    console.log(" value", value)
}

logValue(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]))
logValue(reverseArrayInPlace([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))

logValue(reverseArrayInPlaces(tempArrays))