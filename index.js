// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(() => {
  console.log("Let's get ready to party with jQuery!");
});

// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

let allIMG = $("article>img");
allIMG.addClass("image-center");

// 3. Remove the last paragraph in the article.
let lastP = $("article p:last-child");
lastP.remove();

// 4. Set the font size of the title to be a random pixel size from 0 to 100.

const title = $("#title");
let randomNum = Math.floor(Math.random() * 101);

title.css("font-size", `${randomNum}px`);

// 5. Add an item to the list; it can say whatever you want.

const list = $("ol");
list.append("<li>This is jQuery</li>");

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

const aside = $("aside");
aside.empty().append("<p>Sorry about the list. This was a terrible idea</p>");

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
let red;
let blue;
let green;

$(".row").on("change", () => {
  red = $(".red").val();
  blue = $(".blue").val();
  green = $(".green").val();
  // change color of body
  $("body").css("background", `rgb(${red},${blue},${green})`);
});

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.

allIMG.on("click", function () {
  $(this).remove();
});
