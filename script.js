const menu_nav = document.querySelector(".navIcons");
const menu_header = document.querySelector(".outer-header");
const hamburger = () => {
    menu_header.classList.toggle("active");
};

menu_nav.addEventListener("click", () => hamburger());