var header = document.getElementById("nav-container");
var links = header.getElementsByTagName("links-container");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementById("active");
    current.removeAttribute("id");
    this.setAttribute("id", "active");
  });
}