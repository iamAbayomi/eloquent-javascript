/**
  Write these functions named
  1. arrayToList that builds a list structure from an array argument.
  2. listToArray produces array from a list.
  3. prepend takes an element and a list, creates a new list that 
    adds the element to the front of the input list.
  4. nth which takes a list and a number and returns the element 
        at the given position in the list
*/

let lists = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
let lists2 = { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: null } } } }

function logValue(value) {
    console.log(" value", (value))
}

function arrayToList(array) {
    let list = {}
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: array[i] !== 3 ? list : null }
    }
    return (list)
}

function listToArray(list) {
    var array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array;
}

function prependLists(element, lists) {
    let newlists = Object.assign(element, lists)
    return newlists
}

function nth(list, number) {
    let newArray = listToArray(list)
    let position = newArray.findIndex((item => item == number))
    return position !== -1 ? position : undefined
}

function recursiveNth(list, number) {
    let values = Object.values(list)
    if (values[0] == number) {
        return number
    }
    return recursiveNth(values[1], number)
}

const element = { name: "Fola", age: 20 }

//logValue(prependLists(element, lists))
//logValue(nth(lists2, 12))
logValue(arrayToList([10, 20, 30]))
logValue(recursiveNth(lists2, 4))

