// require() function imports ownModule's parameter
let name = require("./ownModule");

console.log(name);

/*
require() function imports util's parameters.
This is called a STRUCTURED request
 */
const util = require("./util");

// Now, accessing to the variable 'util', we can call every exported function
util.increase(); // 1
util.increase(); // 2
util.increase(); // 3

console.log(util.getCount());

util.increaseAndShow(); // 4

/*
require() function imports util's parameters.
This is called a NON-STRUCTURED request
 */
const {decrease, increaseAndShow} = require("./util");

decrease(); // 3
decrease(); // 2
decrease(); // 1

increaseAndShow(); // 2