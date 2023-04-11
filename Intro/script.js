let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(document.title);
document.title = "Modifying the DOM";
console.log(document.title);

// document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb("+rand(0, 256)+","+rand(0, 256)+","+rand(0, 256)+")";

const elem = document.body;

for (i of elem.children) {
  console.log(i.tagName);
}