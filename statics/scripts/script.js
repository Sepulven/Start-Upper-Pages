    const i_articles = document.getElementById('icon-articles')
    const i_hamburguer = document.getElementById('icon-hamburguer')
    const hamburguer_menu = document.getElementById('hamburguer_menu')
    const articles_menu = document.getElementById('articles_menu')

// TODO: Refactorar o código, estamos a nos repetir

    let attr = 'hidden'
//! Hardcode 
if (window.innerWidth < 640) {
    hamburguer_menu.classList.add(attr)
}

    window.addEventListener('resize', e => {
        if (window.innerWidth > 640) {
            hamburguer_menu.classList.remove(attr)
        } else {
            hamburguer_menu.classList.add(attr)
        }
    })
    i_hamburguer.addEventListener('click', e => {
        if (hamburguer_menu.classList.contains(attr)) {
            i_hamburguer.src = 'imgs/close.svg'
            hamburguer_menu.classList.remove(attr)
        } else {
            i_hamburguer.src = 'imgs/hamburguer.svg'
            hamburguer_menu.classList.add(attr)
        }
    })
    i_articles.addEventListener('click', () => {
        console.log(window.screen.width > 64)
        if (articles_menu.classList.contains(attr)) {
            articles_menu.classList.remove(attr)
        } else {
            articles_menu.classList.add(attr)
        }
    })

const articles = document.querySelectorAll('article')

articles.forEach(article => {
    let leftColor = 'bg-grey'
    let rightColor = 'bg-white'
    let left = article.firstChild.classList
    let right = article.lastChild.classList

    article.addEventListener('mouseover', e => {
        if(left.contains(leftColor) ||
           right.contains(rightColor)) {
            console.log('dentro')
            left.remove(leftColor)
            right.remove(rightColor)
        } else {
            left.add(leftColor)
            right.add(rightColor)
        }
    })
    article.addEventListener('mouseout', e => {
        left.remove(leftColor)
        right.remove(rightColor)
    })
});