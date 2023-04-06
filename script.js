const menuBars = document.getElementById('menu-bars')
const overlay = document.querySelector('.overlay')
const navItems = [];
for (let i = 1; i <= 5; i++) {
    navItems.push(document.querySelector(`.nav${i}`));
}

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