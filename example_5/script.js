document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent="this paragraph is changed";
  });
