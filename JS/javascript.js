const project1 = document.querySelector(".pro1");
const project2 = document.querySelector(".pro2");

const background1 = document.querySelector("#proimg1");
const background2 = document.querySelector("#proimg2");



function add1() {
  background1.classList.add("showimg");
  console.log("hello");
}

function remove1() {
  background1.classList.remove("showimg");
}

function add2() {
  background2.classList.add("showimg");
  console.log("hello");
}

function remove2() {
  background2.classList.remove("showimg");
}

project1.addEventListener("mouseover",add1);
project1.addEventListener("mouseout",remove1);


project2.addEventListener("mouseover",add2);
project2.addEventListener("mouseout",remove2);
