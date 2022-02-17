// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

// setInterval(() => {
//     console.log('hello world')
// }, 1000);

// const names =  require('./name')
// const sayHi = require('./module')
// const alter = require('./6-alternative-flavor')
// require('./7-mind-grenade')
// console.log(alter)
// sayHi(names.vinh);
// sayHi(names.peter)

const _ = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems);


