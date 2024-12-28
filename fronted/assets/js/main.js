

  console.log("abushe");
let bgContainer= document.querySelector(".1stPahe");

const backgroundImage1 =[
    'url("../img/home12/hero-carousel-1.jpg")',
    'url("../img/home12/hero-carousel-2.jpg")',
    'url("../img/home12/hero-carousel-3.jpg")',
    'url("../img/home12/hero-carousel-4").jpg'
];


let currentIndex = 0;
 // function to change barckgound images


 function changeBackground() {
     
      console.log{"abushe function"};
  bgContainer.style.backgroundImage=backgroundImage1[currentIndex];
  currentIndex = (currentIndex+1)%backgroundImage.length;
 }
 // initialize baground seet up
changeBackground();

setInterval(changeBackground, 9000);
