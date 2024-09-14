let open = document.getElementById("menu-btn");
let close = document.getElementById("menu-colse");
let list = document.querySelector(" nav .navigation ul");

open.onclick = function() {
    list.classList.add("open");
}
close.onclick = function() {
    list.classList.remove("open");
}