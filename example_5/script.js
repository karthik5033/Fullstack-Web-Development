// Example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent = "this paragraph is changed";
  });

// Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citieslist = document.getElementById("citiesList");
    citieslist.firstElementChild.classList.add("highlight")
  });


  // Example 3 
document.getElementById("changeOrder").
addEventListener("click",function () {
 let order=document.getElementById("coffeeType");
 order.textContent="Espresso";
 order.style.padding="5px"
  
})
// Example 4
document.getElementById("addNewItem")
.addEventListener("click",function(){
  
  let newItem= document.createElement("li")
  newItem.textContent="eggs"
  x=document.getElementById("shoppingList");
  x.appendChild(newItem);
})

// example 5
document.getElementById("removeLastTask")
.addEventListener("click", function(){
let x= document.getElementById("taskList");
x.lastElementChild.remove()
})

// Example 6
document.getElementById("clickMeButton")
.addEventListener("click",function(){
  alert("shut up");
})

// Example 7
document.getElementById("teaList")
.addEventListener("click",function(event){
  console.log(event.target);
  
})