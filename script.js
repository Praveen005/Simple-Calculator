

const calcArea = document.querySelector("textarea");

const addNums = text => {
  //apart from .value , this is another way to extract value.
    let { value } = calcArea;
  
    //Rules to add dot
    /*
    see,calcArea = value in the text area, if there is already a number present and then dot is pressed
    then we will use that dot as decimal and proceed. oherwise, there is no point of putting a dot in the text area.

    value.length = length of text present in text area.

    */
    const ruleA = value.length === 0 && text === ".";
      
    //Add  only if both rules apply
    if (!ruleA) {
      calcArea.value += text;
    }
};


//operators
const oprList = ["+", "-", "*", "/", "%", "."];

//Add operators
const addOpr = text => {

  const { value } = calcArea;
  const lastCharacter = value[value.length - 1];

  //Don't add repeated operators and initially without numbers
  if (lastCharacter !== text) {
    if (value.length > 0) {
      calcArea.value += text;
    }
  }

  //If last character is operator then replace it with new operator
  if (oprList.includes(lastCharacter)) {
    calcArea.value = value.substr(0, value.length - 1) + text;
  }
};


//Delete inputs on backspace
const del = () => {
    const { value } = calcArea;
    if (value.length > 0) {
      calcArea.value = value.substr(0, value.length - 1);
    }
  };

  //Clear whole area
const clear = () => {
    calcArea.value = "";
  };


  //Perform calculation
const calc = () => {
    const { value } = calcArea;
    const result = eval(value);
    
  
    if (!isNaN(result)  && result !== Infinity) {
      calcArea.value = result;
    } else {
      alert("Invalid expression, Please check your input");
    }
  };



//Add event listeners to the button
document.querySelectorAll(".button-group > span").forEach(e => {
    e.addEventListener("click", f => {
      const { classList, innerText } = f.target;
  
      if (classList.contains("num")) {
        //Number buttons clicked including .
        addNums(innerText);
      } else if (classList.contains("opr")) {
        //Opertor buttons clicked
        addOpr(innerText);
      } else if (classList.contains("calc")) {
        //Equal button clicked
        calc();
      } else if (classList.contains("delete")) {
        //Backspace button clicked
        del();
      } else if (classList.contains("clear")) {
        //Clear button clicked
        clear();
      }
    });
  });



  //Add key events
  //The keydown event is an event that is triggered when a key on the keyboard is pressed.
  //'e' is event object: looks like: KeyboardEvent {isTrusted: true, key: '7', code: 'Digit7', location: 0, ctrlKey: false, …}
document.addEventListener("keydown", e => {
    // console.log(e)
    switch (e.key) {
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
        addNums(e.key);
        break;
      case "/":
      case "*":
      case "+":
      case "-":
      case "%":
        addOpr(e.key);
        break;
      case "Enter":
        calc();
        break;
      case "Backspace":
        del();
        break;
      case "c":
        clear();
      default:
    }
});
