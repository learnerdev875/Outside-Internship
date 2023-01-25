let main = document.getElementById("assignment");

//bootstrap container
let container = document.createElement("div");
container.setAttribute("class", "container");

//h1
let h1 = document.createElement("h1");
let h1Content = document.createTextNode("Figma");
h1.appendChild(h1Content);
h1.setAttribute("class", "text-center fw-bold pb-5");
container.appendChild(h1);

//row
let row = document.createElement("div");
row.setAttribute("class", "row justify-content-around gy-5 text-center");

let assignments = [
  {
    number: "Assignment 1",
    path: "https://www.figma.com/proto/BYnQDmbcjcArf01OwIp0p9/Figma-Design-1?node-id=1%3A6",
  },
  {
    number: "Assignment 2",
    path: "https://www.figma.com/proto/EeS70689Udjz13Ypkc3fem/Assignment-1?node-id=6%3A2",
  },
];

//col

for (let i = 0; i <= assignments.length - 1; i++) {
  let col = document.createElement("div");
  col.setAttribute("class", "col-12 col-md-3 border p-3");
  let h2 = document.createElement("h2");
  h2.setAttribute("class", "fw-semibold pb-3");
  let h2Content = document.createTextNode(assignments[i].number);
  h2.appendChild(h2Content);
  col.appendChild(h2);
  let a = document.createElement("a");
  a.setAttribute("href", assignments[i].path);
  a.setAttribute("class", "btn btn-primary");
  let aContent = document.createTextNode("Demo");
  a.appendChild(aContent);
  col.appendChild(a);
  row.appendChild(col);
}

container.appendChild(row);

main.appendChild(container);
