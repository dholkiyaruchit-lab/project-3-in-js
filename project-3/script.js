let arr = [];

function createInputs() {
  let size = document.getElementById("size").value;

  let html = "";

  for (let i = 0; i < size; i++) {
    html += `<input type="number" class="num" placeholder="Value ${i + 1}"><br>`;
  }

  document.getElementById("inputs").innerHTML = html;
}

function createArray() {
  arr = [];

  let numbers = document.getElementsByClassName("num");

  for (let i = 0; i < numbers.length; i++) {
    arr.push(Number(numbers[i].value));
  }

  displayArray();
}

function displayArray() {
  document.getElementById("arrayDisplay").innerText = arr;
}

function showLength() {
  result.innerText = "Length : " + arr.length;
}

function sortArray() {
  arr.sort((a, b) => a - b);

  displayArray();
}

function reverseArray() {
  arr.reverse();

  displayArray();
}

function maximum() {
  result.innerText = "Maximum : " + Math.max(...arr);
}

function minimum() {
  result.innerText = "Minimum : " + Math.min(...arr);
}

function sum() {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  result.innerText = "Sum : " + total;
}

function average() {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  result.innerText = "Average : " + total / arr.length;
}

function pushValue() {
  let value = Number(prompt("Enter Value"));

  arr.push(value);

  displayArray();
}

function popValue() {
  arr.pop();

  displayArray();
}

function shiftValue() {
  arr.shift();

  displayArray();
}

function unshiftValue() {
  let value = Number(prompt("Enter Value"));

  arr.unshift(value);

  displayArray();
}

function sliceArray() {
  result.innerText = arr.slice(1, 3);
}

function spliceArray() {
  arr.splice(2, 1);

  displayArray();
}

function joinArray() {
  result.innerText = arr.join("-");
}

function concatArray() {
  let newArray = arr.concat([100, 200]);

  result.innerText = newArray;
}

function indexOfValue() {
  let value = Number(prompt("Enter Value"));

  result.innerText = arr.indexOf(value);
}

function includesValue() {
  let value = Number(prompt("Enter Value"));

  result.innerText = arr.includes(value);
}

function findValue() {
  let value = Number(prompt("Enter Value"));

  result.innerText = arr.find((x) => x == value);
}

function findIndexValue() {
  let value = Number(prompt("Enter Value"));

  result.innerText = arr.findIndex((x) => x == value);
}

function mapArray() {
  result.innerText = arr.map((x) => x * 2);
}

function filterEven() {
  result.innerText = arr.filter((x) => x % 2 == 0);
}

function filterOdd() {
  result.innerText = arr.filter((x) => x % 2 != 0);
}

function reduceArray() {
  let total = arr.reduce((sum, value) => sum + value, 0);

  result.innerText = "Reduce Sum : " + total;
}
