const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "poop");

// Styled
console.log("%c I am some great text", "background: red; text-shadow: 10px 10px 0 grey");

// warning!
console.warn("Oh nooo");

// Error :|
console.error("娃噴錯");

// Info
console.info("some info");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is wrong");
// console.assert 確認第一個參數 true/false，如果是 false 則輸出第二個參數的 string

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  // group 跟 groupCollapsed 可以在 console 裡面把文字們包裹起來  
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");

// timing
console.time("fetching data");
// 用 practice 06 的 fetch 來測時間
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
console.timeEnd("fetching data");

console.table(dogs);

// 玩 console