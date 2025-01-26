const body = document.querySelector('body')
const loader = document.querySelector('.nig')
const burger = document.querySelector('i')
const menu = document.querySelector('.menu')
const nav = document.querySelectorAll('.menu a')
const close = document.querySelector('.menu i')

setTimeout(() => {
    body.classList.remove('hidden')
    loader.style.opacity = '0'
    setTimeout(() => {
        loader.style.display = 'none'
    }, 300)
}, 2000);

burger.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)'
})

close.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
})

nav.forEach((c) => {
    c.addEventListener('click', () => {
        menu.style.transform = 'translateX(100%)'
    })
})






