const calcArea = document.querySelector("textarea");
const buttons = document.querySelector(".button-group");

const addNums = (text) => {
  const { value } = calcArea;
  const lastCharacter = value[value.length - 1];
  const ruleA = value.length === 0 && text === ".";

  if (!ruleA) {
    calcArea.value += text;
  }
};

const addOpr = (text) => {
  const { value } = calcArea;
  const lastCharacter = value[value.length - 1];

  if (lastCharacter !== text) {
    if (value.length > 0) {
      calcArea.value += text;
    }
  }

  if (oprList.includes(lastCharacter)) {
    calcArea.value = value.slice(0, -1) + text;
  }
};

const del = () => {
  const { value } = calcArea;
  if (value.length > 0) {
    calcArea.value = value.slice(0, -1);
  }
};

const clear = () => {
  calcArea.value = "";
};

const calc = () => {
  const { value } = calcArea;
  try {
    const result = eval(value);
    if (!isNaN(result) && result !== Infinity) {
      calcArea.value = result;
    } else {
      throw new Error("Invalid expression");
    }
  } catch (error) {
    alert(error.message);
  }
};

buttons.addEventListener("click", (event) => {
  const { target } = event;
  if (target.tagName === "SPAN") {
    const text = target.innerText;
    if (target.classList.contains("num")) {
      addNums(text);
    } else if (target.classList.contains("opr")) {
      addOpr(text);
    } else if (target.classList.contains("calc")) {
      calc();
    } else if (target.classList.contains("delete")) {
      del();
    } else if (target.classList.contains("clear")) {
      clear();
    }
  }
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  switch (key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
      addNums(key);
      break;
    case "/":
    case "*":
    case "+":
    case "-":
    case "%":
      addOpr(key);
      break;
    case "Enter":
      calc();
      break;
    case "Backspace":
      del();
      break;
    case "c":
      clear();
      break;
    default:
  }
});

