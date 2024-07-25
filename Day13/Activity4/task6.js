const _ = require('lodash');

const arr = [1, 2, 3];
const doubled = _.map(arr, x => x * 2);
console.log(doubled);