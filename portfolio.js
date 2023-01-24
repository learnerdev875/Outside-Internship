let main = document.getElementById("main");

//main__left-container
let leftDiv = document.createElement("div");
leftDiv.setAttribute("class", "main__left-container");
main.appendChild(leftDiv);

//main__left-container__image
let figure = document.createElement("figure");
let img = document.createElement("img");
figure.setAttribute("class", "main__left-container__image");
img.setAttribute("src", "images/profile.jpg");
img.setAttribute("alt", "My profile photo");
figure.appendChild(img);
leftDiv.appendChild(figure);

//main__left-container__info
let infoDiv = document.createElement("div");
infoDiv.setAttribute("class", "main__left-container__info");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.setAttribute("class", "main__left-container__name");
p.setAttribute("class", "main__left-container__post");
h1.innerText = "Devendra Gurung (he/him)";
p.innerText = "Web Developer";
infoDiv.appendChild(h1);
infoDiv.appendChild(p);
leftDiv.appendChild(infoDiv);

//main__left-container__button
let btnDiv = document.createElement("div");
btnDiv.setAttribute("class", "main__left-container__button");
let a = document.createElement("a");
a.setAttribute("class", "main__btn");
a.setAttribute("href", "mailto: learnerdev875@gmail.com");
a.innerText = "Email me";
btnDiv.appendChild(a);
leftDiv.appendChild(btnDiv);

// main__left-container__social-links
let socialsDiv = document.createElement("div");
socialsDiv.setAttribute("class", "main__left-container__social-links");
let icons = [
  "ri-instagram-line",
  "ri-github-fill",
  "ri-facebook-fill",
  "ri-linkedin-box-fill",
];
let links = [
  "",
  "https://github.com/learnerdev875",
  "",
  "https://www.linkedin.com/in/devendra-gurung-108698255/",
];

for (let j = 0; j <= icons.length - 1; j++) {
  let a = document.createElement("a");
  let i = document.createElement("i");
  a.setAttribute("href", links[j]);
  i.setAttribute("class", icons[j]);
  a.appendChild(i);
  socialsDiv.appendChild(a);
}
leftDiv.appendChild(socialsDiv);

//main__right-container
let rightDiv = document.createElement("div");
rightDiv.setAttribute("class", "main__right-container");
main.appendChild(rightDiv);

//h2
let h2 = document.createElement("h2");
h2.setAttribute("class", "main__right-container__heading2");
const text = document.createTextNode("About Me");
h2.appendChild(text);
rightDiv.appendChild(h2);

//p
let p1 = document.createElement("p");
p1.setAttribute("class", "main__right-container__about-me");
const content =
  document.createTextNode(` I am a tech-savvy individual with a Bachelor's degree in Information
Management. Currently I am doing my internship at Outside. Mostly I am
passionate about web development but I am open to anything cause I
beleive we all should be flexible since future is uncertain. I am also
self-motivated individual as I don't need much supervision and have an
natural passion for continuous learning and development. Through this
internship, I am expecting to learn the key and valuable skills which
will be very helpful for my career and future.`);
p1.appendChild(content);
rightDiv.appendChild(p1);

//main__right-container__buttons

let btnsDiv = document.createElement("div");
btnsDiv.setAttribute("class", "main__right-container__buttons");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
a2.setAttribute("href", "#");
a3.setAttribute("href", "https://github.com/learnerdev875/Outside-Internship");
a2.setAttribute("class", "main__btn");
a3.setAttribute("class", "main__btn");

const resume = document.createTextNode("Resume");
const portfolio = document.createTextNode("Portfolio");
a2.appendChild(resume);
a3.appendChild(portfolio);
btnsDiv.appendChild(a2);
btnsDiv.appendChild(a3);
rightDiv.appendChild(btnsDiv);
