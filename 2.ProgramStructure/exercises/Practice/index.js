// Practice Fizzbuzz
function FizzBuzz() {
    for (let i = 1; i < 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz ")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else {
            console.log(i)
        }
    }
}

//FizzBuzz()




function whileLoops() {
    let loops = 1;
    while (loops <= 10) {
        loops += 1
    }
}



//whileLoops()


function inifiteForLoops() {
    for (let i = 1; i <= 10; i++) {
        if (i == 1) {
            continue;
        }
        console.log("i ", i)
    }
}

inifiteForLoops()