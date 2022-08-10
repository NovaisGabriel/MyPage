window.onscroll = function() {scrollFixedHeader()};

var header = document.getElementById("fixedHeader");
var sticky = header.offsetTop;

function scrollFixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}