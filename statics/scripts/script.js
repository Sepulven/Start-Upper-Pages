const icon = document.getElementById('icon')
const menu = document.getElementById('menu')
icon.addEventListener('click', () => {
    let attr = 'invisible'
    if (menu.classList.contains(attr)) {
    menu.classList.remove(attr)
    } else {
        menu.classList.add(attr)
    }
    console.log(menu.classList)
})