console.log("Hello Node!");

var x = 10;
var y = 20;


//Scenario1: exports the variable or function to other module
exports.x = x;
exports.y = y;
exports.add = function (a, b) {
    return a + b;
}


//Scenario2: Is variable x or y global or local(in a function), global is like window object in browser
console.log(global.x); //undefined
console.log(global.y); //undefined
console.log(global);

//Scenario3: How to see the function
console.log(arguments);  // has variable x, y and fucntion add
/**
 * the following code is added by nodejs
 * function (exports, require, module, __filename, __dirname) {
 *         exports
 *         require: function
 *         module : current js file, current module.
 *         __filename: the absolute path of current file
 *         __dirname: the absolute path of the current file's parent directory
 * }
 */
console.log(arguments.callee + "");

/**
 * Scenario4: exports and module.exports refer to the same object
 */

console.log(exports === module.exports)  //true



