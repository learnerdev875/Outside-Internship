let main = document.getElementById("main");

//heading1
let h1 = document.createElement("h1");
h1.setAttribute("class", "main__heading");
let h1Content = document.createTextNode("My Assignments");
h1.appendChild(h1Content);
main.appendChild(h1);

//profile link button
let profileDiv = document.createElement("div");
profileDiv.setAttribute("class", "main__profile");
let a1 = document.createElement("a");
a1.setAttribute("href", "portfolio.html");
a1.setAttribute("class", "link");
a1.innerText = "My Profile";
profileDiv.appendChild(a1);
main.appendChild(profileDiv);

//assignments__list
let assignmentList = document.createElement("div");
assignmentList.setAttribute("class", "assignments__list");
//object
let assignments = [
  {
    name: "Figma",
    imgSrc: "images/figma.png",
    altText: "Figma Logo",
    path: "figma-assignment.html",
  },
  {
    name: "HTML",
    imgSrc: "images/html.png",
    altText: "HTML Logo",
    path: "html-assignment.html",
  },
  {
    name: "CSS",
    imgSrc: "images/css.png",
    altText: "CSS Logo",
    path: "css-assignment.html",
  },
  {
    name: "SCSS",
    imgSrc: "images/sass.png",
    altText: "Figma Logo",
    path: "scss-assignment.html",
  },
  {
    name: "Bootstrap",
    imgSrc: "images/bootstrap.png",
    altText: "Bootstrap Logo",
    path: "bootstrap-assignment.html",
  },
  {
    name: "Final Project",
    imgSrc: "images/gulp-logo.png",
    altText: "Gulp Logo",
    path: "final-project.html",
  },
  {
    name: "JavaScript",
    imgSrc: "images/js.jpg",
    altText: "JS Logo",
    path: "js-assignment.html",
  },
];

for (let i = 0; i <= assignments.length - 1; i++) {
  let article = document.createElement("article");
  article.setAttribute("class", "assignment");
  let assignmentTop = document.createElement("div");
  let assignmentBottom = document.createElement("div");
  assignmentTop.setAttribute("class", "assignment__top");
  assignmentBottom.setAttribute("class", "assignment__bottom");

  //figure
  let figure = document.createElement("figure");
  figure.setAttribute("class", "assignment__image");
  let img = document.createElement("img");
  img.setAttribute("src", assignments[i].imgSrc);
  img.setAttribute("alt", assignments[i].altText);
  figure.appendChild(img);

  //h2
  let h2 = document.createElement("h2");
  let h2Content = document.createTextNode(assignments[i].name);
  h2.appendChild(h2Content);
  assignmentTop.appendChild(figure);
  assignmentTop.appendChild(h2);
  article.appendChild(assignmentTop);

  let a = document.createElement("a");
  a.setAttribute("href", assignments[i].path);
  a.setAttribute("class", "link");
  let aContent = document.createTextNode("Link");
  a.appendChild(aContent);
  assignmentBottom.appendChild(a);
  article.appendChild(assignmentBottom);
  assignmentList.appendChild(article);
}

main.appendChild(assignmentList);
