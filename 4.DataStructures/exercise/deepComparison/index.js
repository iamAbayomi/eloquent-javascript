function deepEqual(value1, value2) {
    if (typeof value1 === "object" && typeof value2 == "object") {
        let firstArray = Object.values(value1)
        let secondArray = Object.values(value2)
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                return false
            }
        }
        return true
    }
    else if (value1 === value2) {
        return true
    } else {
        return false
    }

}


logValue(deepEqual({ value1: 1, value2: 2 }, { value1: 21, value2: 12 }))

logValue(deepEqual(2, 2))

function logValue(value) {
    console.log(" value", value)
}

function getEntries(value) {
    console.log("entries ", Object.entries(value), " keys ", Object.keys(value), " values ", Object.values(value))
}




//console.log(" deepEqual ", deepEqual(1, 2))

//let value = { value1: 1, value2: 2 }