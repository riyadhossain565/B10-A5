function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

function showColorById(id) {
  document
    .getElementById("btn-show-donation")
    .classList.remove("bg-primary-color");
  document
    .getElementById("btn-show-history")
    .classList.remove("bg-primary-color");

  document.getElementById(id).classList.add("bg-primary-color");
}
