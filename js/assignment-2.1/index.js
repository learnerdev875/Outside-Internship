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
let options = ["uppercase", "lowercase", "number", "special"];

for (let i = 0; i < options.length; i++) {
  let checkbox = createElement("div", "class", "checkbox");
  let input = createElement("input", "type", "checkbox");
  input.setAttribute("id", options[i]);
  let inputLabel = createElement(
    "label",
    "for",
    options[i],
    options[i].charAt(0).toUpperCase() + options[i].slice(1)
  );
  checkbox.appendChild(input);
  checkbox.appendChild(inputLabel);
  checkboxDiv.appendChild(checkbox);
}
form.appendChild(checkboxDiv);

//button
let btn = createElement("button", "id", "btn", "Generate");
form.appendChild(btn);

main.appendChild(form);

//error
let errorDiv = createElement("div", "class", "errorDiv");
let errorP = createElement("p", "class", "errorMessage");
errorDiv.appendChild(errorP);
main.appendChild(errorDiv);

//password generate
let passwordDiv = createElement("div", "class", "password");
let h2 = createElement("h2", "", "", "Your Genarted password is : ");

let span = createElement("span", "class", "generated_password");
h2.appendChild(span);
passwordDiv.appendChild(h2);
main.appendChild(passwordDiv);

let length = document.querySelector("#length");
let range = document.querySelector("#slider");
let errorText = document.querySelector(".errorMessage");

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

  //error checking
  let checkCount = 0;
  let len = Number(length.value);
  let charRange = "";
  if (uppercase.checked) {
    charRange = charRange + uppercaseChars;
    checkCount++;
  }
  if (lowercase.checked) {
    charRange = charRange + lowercaseChars;
    checkCount++;
  }
  if (number.checked) {
    charRange = charRange + numChars;
    checkCount++;
  }
  if (special.checked) {
    charRange = charRange + specialChars;
    checkCount++;
  }

  if (len < checkCount) {
    generatedPassword.innerText = "";
    errorText.innerText =
      "You selected length smaller than the option selected";
    setInterval(function () {
      errorText.innerText = "";
    }, 3000);
  } else {
    let res = "";
    for (let i = 0; i < len; i++) {
      res += charRange.charAt(Math.floor(Math.random() * charRange.length));
    }
    generatedPassword.innerText = res;
  }
});
