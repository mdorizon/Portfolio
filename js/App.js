var toggle = document.querySelector(".theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "dark";

    if (currentTheme === "light") {
        targetTheme = "dark";
        toggle.innerHTML = "LIGHT MODE"
    } else if (currentTheme === "dark") {
        targetTheme = "light";
        toggle.innerHTML = "DARK MODE"
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};