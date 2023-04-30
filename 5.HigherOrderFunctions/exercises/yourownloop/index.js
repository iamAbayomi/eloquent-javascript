/**  Write a higher-order function loop that provides something like a for loop statement. 
 *   It takes a value, a test function, an update function, and a body function.
 *   Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
 *   Then it calls the body function, giving it the current value. Finally, it calls
 *    the update function to create a new value and starts from the beginning. 
 *   When defining the function, you can use a regular loop to do the actual looping.
 */

function yourownloop(value, test, update, body) {
    for (value; test(value); value = update(value)) {
        body(value)
    }
}

yourownloop(10, (i) => i > 0, (i) => i - 1, (value) => console.log(value))


function secondloop(value, test, update, body) {
    for (value; test(value); value = update(value)) {
        body(value)
    }
}



secondloop(30, (num) => num > 0, (num) => num - 1, console.log)