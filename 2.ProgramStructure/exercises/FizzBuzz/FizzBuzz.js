function FizzBuzz() {
    for (i = 1; i < 100; i++) {
        if (i % 15 == 0) {
            console.log(" FizzBuzz ")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}


//FizzBuzz()

function FizzBuzz1() {
    for (let i = 1; i < 100; i++) {
        console.log(i % 3 === 0 ? i % 5 === 0 ? i + " FizzBuzz " : i + " Fizz " : i % 5 === 0 ? i + " Buzz" : '')
    }
}

FizzBuzz()