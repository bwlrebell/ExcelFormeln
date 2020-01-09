
let a = document.getElementById("app");
let r = document.getElementsByClassName("reason");

function index() {
  a.style.display = "block";
  Array.from(r).forEach(e => {
      e.style.display = "none";
  });
}

function reason() {
  a.style.display = "none";
  Array.from(r).forEach(e => {
    if (e.lang === language) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}


page("/", index);
page("/reason", reason);
page({ hashbang: true });
