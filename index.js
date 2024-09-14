var offerbar = document.querySelector(".offer-bar")
var offerclose = document.getElementById("offer-close").addEventListener("click", function(){
  offerbar.style.display = "none"
})

var menu = document.getElementById("menubar")
var navlist = document.getElementById("menulist")
var closenav = document.getElementById("closenav")

menu.addEventListener("click", function(){
  navlist.style.marginRight = "25%"
  navlist.style.display = "block"
  navlist.style.transform = "translateX(50%)"
})

closenav.addEventListener("click", function() {
  navlist.style.transform = "translateX(100%)"; // Move menu out of view
  navlist.style.transition = "transform 0.3s ease"; // Smooth transition
  setTimeout(function() {
    navlist.style.display = "none"; // Hide the menu after transition
  }, 300); // Wait for transition to complete before hiding
});

var leftarrow = document.getElementById("left-arrow")
var rightarrow = document.getElementById("right-arrow")
var imgslider = document.getElementById("imgslider")
var slidermargin = 0

console.log(leftarrow, rightarrow)

rightarrow.addEventListener("click", function () {
  slidermargin = slidermargin+100

  if (slidermargin>200){
    slidermargin = 0
    imgslider.style.marginLeft = 0;
  }

  else {
    imgslider.style.marginLeft = '-'+slidermargin+'%';
  }
})

leftarrow.addEventListener("click", function () {
  if (slidermargin==0) {
    slidermargin = 200
    imgslider.style.marginLeft = '-'+slidermargin+'%';
  } else {
    slidermargin = slidermargin-100
    imgslider.style.marginLeft = '-'+slidermargin+'%';
  }
})

var newarrival = document.getElementById("scroll")
var imgscroll = document.getElementById("new-img-scroll")

imgscroll.addEventListener ("wheel", (evt) => {
  evt.preventDefault();


  newarrival.scrollLeft += evt.deltaY;

  if (evt.deltaY > 0) {
    // If scrolling down, move images from right to left
    imgscroll.style.transform = "translateX(-130%)";
  } else if (evt.deltaY < 0) {
    // If scrolling up, move images from left to right
    imgscroll.style.transform = "translateX(0%)";  // Reset to original position
  }
});

var mostwanted = document.getElementById ("scroll-items")
var scrollitems = document.getElementById("most-wanted-scroll")

scrollitems.addEventListener("wheel", (evt) => {
  evt.preventDefault();

  mostwanted.scrollLeft += evt.deltaY;

  if (evt.deltaY>0) {
    scrollitems.style.transform = "translateX(-70%)"
  }
  else if (evt.deltaY<0) {
    scrollitems.style.transform = "translateX(0%)"
  }
})



