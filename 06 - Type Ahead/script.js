const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

// console.log(fetch(endpoint));
// fetch 回來的東西會是一個稱作 promise 的東西，可以去 console 看
// fetch(endpoint).then(blob => console.log(blob));
// 這行也可以去看 console，會回傳依些關於 endpoint 資料的 metadata，傳回來的 blob 瀏覽器並不知道是什麼，
// 因此往下看
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
// 即使用了 blob.json，回傳回來的也會是 promise，因此我們要再用 then 才能拿到資料
// 在第二個 then 我們把 data 放進 cities 裡面，但如果直接放進去的話會變成 array of array，
// 所以用 ...data 的方式拉平（不過這樣只會拉平一層）

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 這是某種 regex 表示法

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city on state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi')
    // regex 是 regular expressions，可以想成是某種 pattern 物件，此處代表是 wordToMatch 這個變數
    // 裡面存的值的 pattern，而後面的 gi g 代表 global，意指 pattern 不限只出現在第一次，i 意指 
    // pattern 大小寫都算，搭配下面一行的 match，就是在 place.state 這個 string 裡面，尋找是否
    // 符合 regex 這樣的 pattern，舉例來說，如果今天 wordToMatch 是 "bo"，那在 place.city 或
    // place.state 這兩個 string 裡面，只要有 "bo" 且不管大小寫，那 .match(regex) 就會回傳 true，
    // 因而就會被 filter 挑出來，放進 array 裡面回傳。
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html =  matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// 練習 regex、fetch()、return html