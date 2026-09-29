(function () {
  var root = document.documentElement,
    btn = document.getElementById("theme");
  function current() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  function sync() {
    btn.textContent = current() === "dark" ? "Light" : "Dark";
  }
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  sync();
  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    sync();
  });

  var buttons = document.querySelectorAll(".filters button");
  var projects = document.querySelectorAll(".project");
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var f = b.getAttribute("data-filter");
      buttons.forEach(function (x) {
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      projects.forEach(function (p) {
        p.hidden = f !== "all" && p.getAttribute("data-type") !== f;
      });
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
