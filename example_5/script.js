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