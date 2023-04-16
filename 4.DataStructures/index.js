function range(start, end, step = 1) {
    let array = []
    if (Math.sign(step) == 1) {
        for (start; start <= end; start += step) {
            array.push(start)
        }
    } else {
        for (start; start >= end; start += step) {
            array.push(start)
        }
    }

    return array
}

function sum(value) {
    let count = 0
    for (let i in value) {
        count += value[i]
    }
    return count
}

function logValue(value) {
    console.log(" value", value)
}

console.log("value ", range(5, 2, -1))

logValue(range(100, 10,-2))