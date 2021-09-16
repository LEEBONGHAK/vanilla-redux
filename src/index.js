const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

let count = 0;

const updateText = () => {
  number.innerHTML = count;
};

const handlePlus = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};


plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);