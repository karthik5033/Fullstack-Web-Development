document.getElementById("mf")
.addEventListener("mouseover", function () {
  const paragraph = document.getElementById("mf");

  paragraph.textContent = "text changed";
})
.addEventListener("mouseleave",function(){
const paragraph = document.getElementById("mf");
paragraph.textContent = "hello mf";
})