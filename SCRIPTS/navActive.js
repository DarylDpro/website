var header = document.getElementById("nav-container");
if (header !== null) {
  var links = header.getElementsByTagName("links-container");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}