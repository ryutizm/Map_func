// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// シンプルなmap関数の使い方
const array = [1, 2, 3, 4];
const resultArray = array.map(x => x*2);
console.log(resultArray);


// 連想配列
const obj = {
  "hoge": {text: "fuga"},
  "foo": {text: "bar"},
  "fiz": {text: "buzz"}
};
const objectArray = Object.keys(obj).map(key => {
  const value = obj[key]
  value['id'] = key
  // console.log(value);
  return value
});

console.log(objectArray);
