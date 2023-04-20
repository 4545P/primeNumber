const number = document.querySelector(".number");
const btn = document.querySelector("#btn");
const ans = document.querySelector(".ans");


let sum = 0;
let i, j;
let array = [];
btn.addEventListener("click", function () {

  let num = +number.value;
  for (i = 2; i <= num; i++) {
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      } else if (j === i - 1) {
        array.push(i);
        ans.innerHTML = `<p>${array}</p>`;
      }
    }
  }
})

