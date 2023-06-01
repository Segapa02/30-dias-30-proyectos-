function appendToDisplay(value) {
    document.getElementById('pantalla').value += value;
  }

  function clearDisplay() {
    document.getElementById('pantalla').value = '';
  }

  function calculate() {
    let expresion = document.getElementById('pantalla').value;
    let result = eval(expresion);
    document.getElementById('pantalla').value = result;
  }