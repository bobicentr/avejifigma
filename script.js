function myFunction() {
    var x = document.getElementById("nav-menu");
    var overlay = document.getElementById("overlay");
    x.classList.toggle('responsive')
    overlay.classList.toggle("visible");
    document.body.classList.toggle("no-scroll");
  } 