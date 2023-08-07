// This module is going to contain the add, subtract, multiply and divide functions
/**
 * 
 * @param {*} a 
 * @param {*} b 
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
