var x = 1;

function testFunction() {
    if (0 === false){
        return true
    }
}

console.log(true || "user") // true
console.log(false || "user") // user
console.log("\n ")
console.log(true && "Fola")  // Fola
console.log(false && "Fola") // false



//console.log(true == 1)