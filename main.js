let burger = document.querySelector('.burger-menu')
let header = document.querySelector('.header')
let nav = document.querySelector('.header__nav')

window.addEventListener('scroll', toggleActiveHeader)

burger.addEventListener('click', toggleOpenNav)


function toggleActiveHeader() {
    if (scrollY > 50 && !header.classList.contains('header--active')) {
        header.classList.add('header--active')
        header.animate([{ transform: 'translateY(-100%)' }, { transform: 'translateY(0%)' }], { duration: 500 })
    } else if (scrollY <= 50 && header.classList.contains('header--active')) {
        header.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })
        header.classList.remove('header--active')
    }
}


function toggleOpenNav() {
    if (!nav.classList.contains('header__nav--open')) {
        nav.classList.add('header__nav--open')
        burger.classList.add('burger-menu--active')
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = ''
        navAnimation = nav.animate([{ transform: 'translateX(100%)' }], { duration: 300 })
        navAnimation.addEventListener('finish', function () { nav.classList.remove('header__nav--open') })
        burger.classList.remove('burger-menu--active')
    }
}
