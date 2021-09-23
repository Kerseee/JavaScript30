const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// ## Array Cardio Day 2
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(person => {
  return (new Date()).getFullYear() - person.year >= 19;
});
console.log({isAdult});
// 把 variable 包起來 print，可以印出變數名和值，等於是把這個變數做成 object print

// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(person => {
    return (new Date()).getFullYear() - person.year >= 19;
});
console.log({allAdult});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// filter 回傳所有 match 的 elements，find 只回傳第一個 match 的 element
const comment = comments.find(comment => (comment.id === 823423));
console.log({comment});

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => (comment.id === 823423));
console.log({index});
// delete the comment with the ID of 823423
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)  
];
// ... 用法稱為 spread the list
console.log(newComments);

// 練習 array 的 functions