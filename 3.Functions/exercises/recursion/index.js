function isEvenWithSwitch(num) {
    let answer
    switch (num) {
        case num == 0:
            return true
            break;
        case num == 1:
            return false
            break;
        case num < 0:
            return false
            break;
        case num:
            return isEvenWithSwitch(num - 2)
    }
    return answer
}

//console.log("IsEven with Switch ", isEvenWithSwitch(0))


function isEven(num) {
    if (num == 0) {
        return true
    } else if (num == 1) {
        return false
    } else if (num < 0) {
        return false
    }
    else {
        return isEven(num - 2)
    }
}

console.log("isEven ", isEven(-1))


