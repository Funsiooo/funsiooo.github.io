function switchNightMode() {
    "true" == localStorage.getItem("dark") ? (localStorage.setItem("dark", "false"),
    switchToLight()) : (localStorage.setItem("dark", "true"),
    switchToDark())
}
function switchToDark() {
    for (var t = document.getElementsByTagName("link"), e = 0; e < t.length; e++)
        t[e] && t[e].href && -1 != t[e].href.indexOf("/css/style.css") && t[e].setAttribute("href", "/css/style-dark.css")
}
function switchToLight() {
    for (var t = document.getElementsByTagName("link"), e = 0; e < t.length; e++)
        t[e] && t[e].href && -1 != t[e].href.indexOf("/css/style-dark.css") && t[e].setAttribute("href", "/css/style.css")
}
null == localStorage.getItem("dark") ? localStorage.setItem("dark", "true") : ("false" == localStorage.getItem("dark") ? switchToLight : switchToDark)();

