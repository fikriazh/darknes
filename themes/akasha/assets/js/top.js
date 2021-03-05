window.onload = function () {
    if (localStorage.getItem("menu-scroll-position")) {
        document.getElementById('menu').scrollLeft = localStorage.getItem("menu-scroll-position");
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var id = this.getAttribute("href").substr(1);
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView({
                behavior: "smooth"
            });
        } else {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView();
        }
        if (id === "top") {
            history.replaceState(null, null, " ");
        } else {
            history.pushState(null, null, `#${id}`);
        }
    });
});
var mybutton = document.getElementById("top-link");
window.onscroll = function () {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
};

function menu_on_scroll() {
    localStorage.setItem("menu-scroll-position", document.getElementById('menu').scrollLeft);
}