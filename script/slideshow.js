//slideshow

var slideIndex = 0;
var i = 0;
var x = document.getElementsByClassName("mySlides");


// alternate
// showDiv(slideIndex);

// function showDiv(slideIndex) {
//   if (slideIndex >= x.length) {
//     slideIndex = 0;
//     showDiv(slideIndex);
//   }
//   x[slideIndex].style.display = "block";
//   slideIndex++;
//   console.log(slideIndex);
// }

// function HideDivs() {
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
// }

// function plusDivs() {
//   HideDivs();
//   showDiv(++slideIndex);
// }


// original 


 start(i);
 function start(i)
 {
     slideIndex=i;
     showDivs();
 }

 function showDivs() {
     if (slideIndex >= x.length) { slideIndex = 0 }
     clear();
     updateIndex();
     display();
     TimeOut();

 }

 function display(){
     x[slideIndex - 1].style.display = "block";

 }

 function updateIndex(){
     slideIndex++;

 }

 function TimeOut(){
     setTimeout(showDivs, 2000);

 }

 function clear(){
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }

 }
