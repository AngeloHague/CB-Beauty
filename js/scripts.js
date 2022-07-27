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

function toggleFilter(id, result) {
  var x = document.getElementById(id);
  var y = x.querySelector('input')
  if (y.checked != result) {
    x.click();
  }
}

function filterUsingHash() {
  if(window.location.hash) {
    id = window.location.hash.split('#')[1];
    console.log(id)
    if (id.includes("brows")) {
      toggleFilter('brows-button', true);
    } else {toggleFilter('brows-button', false);}
    if (id.includes("lashes")) {
      toggleFilter('lashes-button', true);
    } else {toggleFilter('lashes-button', false);}
    if (id.includes("makeup")) {
      toggleFilter('makeup-button', true);
    } else {toggleFilter('makeup-button', false);}
    if (id.includes("nails")) {
      toggleFilter('nails-button', true);
    } else {toggleFilter('nails-button', false);}
  }
}

function scrollToHash() {
  if(window.location.hash) {
    id = window.location.hash.split('#')[1];
    document.getElementById(id).scrollIntoView();
  }
}