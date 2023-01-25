//DOM

function createElement(el, cl, clname, textNode) {
  let element;
  if (cl && clname && textNode) {
    element = document.createElement(el);
    element.setAttribute(cl, clname);
    let text = document.createTextNode(textNode);
    element.appendChild(text);
  } else if (textNode) {
    element = document.createElement(el);
    let text = document.createTextNode(textNode);
    element.appendChild(text);
  } else {
    element = document.createElement(el);
    element.setAttribute(cl, clname);
  }
  return element;
}
let main = document.querySelector("#main");
let h1 = createElement(
  "h1",
  "",
  "",
  "Instanly generate a secure, random password"
);
main.appendChild(h1);

let form = document.createElement("form");

//length
let div1 = createElement("div", "class", "input__length", "");
let label1 = createElement("label", "for", "length", "Password Length");
let lengthInput = createElement("input", "type", "number");
lengthInput.setAttribute("id", "length");
lengthInput.setAttribute("min", "4");
lengthInput.setAttribute("max", "20");
let rangeInput = createElement("input", "type", "range");
rangeInput.setAttribute("id", "slider");
rangeInput.setAttribute("min", "4");
rangeInput.setAttribute("max", "20");
div1.appendChild(label1);
div1.appendChild(lengthInput);
div1.appendChild(rangeInput);
form.appendChild(div1);

//checkbox
let checkboxDiv = createElement("div", "class", "checkboxes");
let checkbox1Div = createElement("div", "class", "checkbox");
let checkbox2Div = createElement("div", "class", "checkbox");
let checkbox3Div = createElement("div", "class", "checkbox");
let checkbox4Div = createElement("div", "class", "checkbox");

let checkbox1 = createElement("input", "type", "checkbox");
checkbox1.setAttribute("id", "lowercase");
let checkbox1Label = createElement("label", "for", "lowercase", "Lowercase");

let checkbox2 = createElement("input", "type", "checkbox");
checkbox2.setAttribute("id", "uppercase");
let checkbox2Label = createElement("label", "for", "uppercase", "Uppercase");

let checkbox3 = createElement("input", "type", "checkbox");
checkbox3.setAttribute("id", "number");
let checkbox3Label = createElement("label", "for", "number", "Number");

let checkbox4 = createElement("input", "type", "checkbox");
checkbox1.setAttribute("id", "special");
let checkbox4Label = createElement(
  "label",
  "for",
  "special",
  "Special Characters"
);

checkbox1Div.appendChild(checkbox1);
checkbox1Div.appendChild(checkbox1Label);
checkbox2Div.appendChild(checkbox2);
checkbox2Div.appendChild(checkbox2Label);
checkbox3Div.appendChild(checkbox3);
checkbox3Div.appendChild(checkbox3Label);
checkbox4Div.appendChild(checkbox4);
checkbox4Div.appendChild(checkbox4Label);

checkboxDiv.appendChild(checkbox1Div);
checkboxDiv.appendChild(checkbox2Div);
checkboxDiv.appendChild(checkbox3Div);
checkboxDiv.appendChild(checkbox4Div);

form.appendChild(checkboxDiv);

//button
let btn = createElement("button", "id", "btn", "Generate");
form.appendChild(btn);

main.appendChild(form);

//password generate
let passwordDiv = createElement("div", "class", "password");
let h2 = createElement("h2", "", "", "Your Genarted password is : ");

let span = createElement("span", "class", "generated_password");
h2.appendChild(span);
passwordDiv.appendChild(h2);
main.appendChild(passwordDiv);

let length = document.querySelector("#length");
let range = document.querySelector("#slider");

range.addEventListener("change", function () {
  length.value = range.value;
});
let button = document.querySelector("#btn");

let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let number = document.querySelector("#number");
let special = document.querySelector("#special");
let generatedPassword = document.querySelector(".generated_password");

let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let numChars = "0123456789";
let specialChars = "@!#$%^&*(){}[]:;,./|~";

button.addEventListener("click", function (e) {
  e.preventDefault();
  let len = Number(length.value);
  let charRange = "";
  if (uppercase.checked) {
    charRange = charRange + uppercaseChars;
  }
  if (lowercase.checked) {
    // charRange += lowercaseChars;
    charRange = charRange + lowercaseChars;
  }
  if (number.checked) {
    // charRange += numChars;
    charRange = charRange + numChars;
  }
  if (special.checked) {
    // charRange += specialChars;
    charRange = charRange + specialChars;
  }
  let res = "";
  for (let i = 0; i < len; i++) {
    res += charRange.charAt(Math.floor(Math.random() * charRange.length));
  }
  generatedPassword.innerText = res;
});
