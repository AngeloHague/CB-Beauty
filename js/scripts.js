function toggleNav(element) {
    var x = document.getElementById("nav");
    if (x.className === "active") {
      x.className = "";
    } else {
      x.className = "active";
    }
}

function filterMenu(self, id) {
  var x = document.getElementById(id);
  var y = self.querySelector('input')
  if (x.className === "segment active") {
    x.className = "segment";
    y.checked = false;
  } else {
    x.className = "segment active";
    y.checked = true;
  }
}