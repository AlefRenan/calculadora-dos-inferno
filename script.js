txtn1 = document.getElementById("txt1");
numero = document.getElementById("numbers");
botao = document.getElementById("conta");

botao.addEventListener("click", button);
numero.addEventListener("click", number);

function number(event) {
  if (txtn1.value > 0) {
    num3 = txtn1.value;
    num4 = event.target.value;
    txtn1.value = num3 + num4;
  }
  if (txtn1.value == 0) {
    txtn1.value = event.target.value;
  }
}

function button(event) {
  switch (event.target.value) {
    case "+":
      opera = "+";
      num1 = txtn1.value;
      txtn1.value = null;
      break;
    case "-":
      opera = "-";
      num1 = txtn1.value;
      txtn1.value = null;
      break;
    case "/":
      opera = "/";
      num1 = txtn1.value;
      txtn1.value = null;
      break;
    case "*":
      opera = "*";
      num1 = txtn1.value;
      txtn1.value = null;
      break;
    case "=":
      num2 = txtn1.value;
      switch (opera) {
        case "+":
          txtn1.value = Number(num1) + Number(num2);
          break;
        case "-":
          txtn1.value = Number(num1) - Number(num2);
          break;
        case "/":
          txtn1.value = Number(num1) / Number(num2);
          break;
        case "*":
          txtn1.value = Number(num1) * Number(num2);
          break;
      }
      break;
    case "c":
      txtn1.value = null;
      break;
  }
}
