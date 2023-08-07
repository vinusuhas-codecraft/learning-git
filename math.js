// This module is going to contain the add, subtract, multiply and divide functions
/*
* * Adds given two numbers and returns the result (JSDoc documentation)
* @param{number} a
* @param{number} b

* @returns the result
*/

function add(a,b){
    return a+b;
}
/**
 * 
 * @param {*} a any number
 * @param {*} b any non zero number
 * @returns 
 */
function divide(a,b){
    return b/a
}
//Test code which confirms divide works
function testAdd(){
    //Dividing 10 by 2 must be 5
    const expected=5
    assert(expected === divide(2,10),"dividing 10 by s must be 5")
}

divide()
