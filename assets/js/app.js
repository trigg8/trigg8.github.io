// SideBar Js

const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const auto_menu_item = document.querySelectorAll('.menu-item');

// Close Toggle Button

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
});

// Auto Close on Nav click

auto_menu_item.forEach(link => {
    link.addEventListener('click', () => {
        menu_toggle.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
    });
});

