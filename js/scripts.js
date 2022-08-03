function toggleNav(element) {
    var x = document.getElementById("nav");
    if (x.className === "active") {
      x.className = "";
    } else {
      x.className = "active";
    }
}