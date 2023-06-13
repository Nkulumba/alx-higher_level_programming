#!/usr/bin/node
const list1 = require('./100-data.js').list1;

const newList = list.map((val, idx) => val * idx);
console.log(list1);
console.log(newList);
