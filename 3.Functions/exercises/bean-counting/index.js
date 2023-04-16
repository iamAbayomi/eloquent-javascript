function oldCountBs(value) {
    let count = 0
    for (let i = 0; i < value.length; i++) {
        if (value[i] == "B") {
            count += 1
        }
    }
    return count
}

function countBs(value) {
   return countChar(value, "B")
}



function countChar(value, char) {
    let count = 0
    for (i in value) {
        if (char == value[i]) {
            count += 1
        }
    }
    return count
}


console.log("value", countBs("BBoys"))

console.log("value ", countChar("GsdDeeq", "e"))