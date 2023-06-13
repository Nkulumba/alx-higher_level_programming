#!/usr/bin/node
const dict = require('./101-data.js').dict;

const newDictionary = {};

Object.getOwnPropertyNames(dict).forEach(occurences => {
  if (newDictionary[dict[occurences]] === undefined) {
    newDictionary[dict[occurences]] = [occurences];
  } else {
    newDictionary[dict[occurences]].push(occurences);
  }
});
console.log(newDictionary);
