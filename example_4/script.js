// // changing text while hovering(incorrect way)
// document.getElementById("mf")
// .addEventListener("mouseover", function () {
//   const paragraph = document.getElementById("mf");
//   paragraph.textContent = "text changed";
// })
// .addEventListener("mouseleave",function(){
// const paragraph = document.getElementById("mf");
// paragraph.textContent = "hello mf";
// })


// // Correct way of doing
// let paragraph=document.getElementById("mf");

// paragraph.addEventListener("mouseover",function(){
//   paragraph.textContent="the text has changed";
//   paragraph.style.color="red";
// })
// paragraph.addEventListener("mouseleave",function(){
//   paragraph.textContent="hello mf";
//   paragraph.style.color = "";
// })


// // changing color while hovering
// let paragraph=document.getElementById("mf");

// paragraph.addEventListener("mouseover",function(){
//   paragraph.textContent="the text has changed";
//   paragraph.style.color="red";
// })
// paragraph.addEventListener("mouseleave",function(){
//   paragraph.textContent="hello mf";
//   paragraph.style.color = "";
// })

// // changing color while clicking(incorrect method)
// let x= document.getElementById("aa");
// x.addEventListener("click",function() {
//   document.getElementById("a").style.color="green"
// })
// y=document.getElementById("aa");
// y.addEventListener("click", function () {
//   document.getElementById("a").style.color = "black";
// });


// // correct way of clicking twice and changing colors alternatively
// let x=document.getElementById("aa");
// let y = document.getElementById("a");
// let isGreen=false;
// x.addEventListener("click",function(){
// if (isGreen) {
//   y.style.color = "black";
// } 
// else
// { y.style.color = "green";} 
//   isGreen=!isGreen;
//   // toggles between true and false in every loop
// }
// )















