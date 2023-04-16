function findMin(firstValue, secondValue){
    if(firstValue < secondValue){
        return firstValue
    }else{
        return secondValue
    }
}

console.log("find min", findMin(13,4))


function forLoopTest() {
    for (let x = 11; x--;) {
        console.log("x ", x)
    }
}
//console.log(" loop ", forLoopTest())
function powerw(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
function power(num, exponent) {
    let results = 1;
    for (let i = 1; i >= exponent; i++) {
        results *= num
        console.log("num", results)
    }
    return results
}

//power(2,5);

function findSolution(target) {
    let i = 1;
    function find(current, history) {
        console.log("No of Steps ", i, " history ", history, " = ", current,)
        i++;
        if (current == target) {
            return history;
        } else if (current > target) {
            console.log(null)
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }

    return find(1, "1");
}

//console.log(findSolution(14));

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

//printFarmInventory(7, 11);


function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

//printFarmInventory(7, 11, 3);