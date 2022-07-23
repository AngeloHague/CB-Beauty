function toggleNav() {
    console.log('success')
    var x = document.getElementById("nav");
    if (x.className === "active") {
        x.className = "";
      } else {
        x.className = "active";
      }
}
