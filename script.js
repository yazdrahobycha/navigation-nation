const menuBars = document.getElementById('menu-bars')
const overlay = document.querySelector('.overlay')
const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const nav3 = document.querySelector('.nav3')
const nav4 = document.querySelector('.nav4')
const nav5 = document.querySelector('.nav5')
const navItems = [nav1, nav2, nav3, nav4, nav5]

function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
    })
}

function toggleNav() {
    menuBars.classList.toggle('change')
    overlay.classList.toggle('active')
    if (overlay.classList.contains('active')) {
        navAnimation('out', 'in')
    } else {
        navAnimation('in', 'out')
    }
}



[menuBars, ...navItems].forEach((el) => {
    el.addEventListener('click', toggleNav);
});