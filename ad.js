// getelemntby id
let headtag=document.getElementById("heading");
headtag.innerText="Welcome all!!";
console.log(headtag.innerText);
// get element by classname
let parap1=document.getElementsByClassName("para");
console.log(parap1[0].innerText);
console.log(parap1[1].innerText);
console.log(parap1[2].innerText);
// query selector
let p1=document.querySelector("#p2");
console.log(p1.innerHTML);
//queryselector all
let d1=document.querySelectorAll(".para");
console.log(d1[0].innerHTML);
console.log(d1[1].innerHTML);
