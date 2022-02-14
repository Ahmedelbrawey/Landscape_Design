// Auto Type 
var options = {
    strings: ['Landscape Design' , 'Irrigration System' , 'Solar Power'],
    typeSpeed: 80,
    backSpeed:80,
    loop:true

    
  };
  
  var typed = new Typed('.auto-input', options);



// Start do fixed bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var fixed = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= fixed) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}
