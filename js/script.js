const header = document.querySelector('.header')
const navMenu = header.querySelector('.nav-menu')
const burger = header.querySelector('.burger')
const searchIcon = header.querySelector('.search__icon')

function smoothSectionOpen() {
    document.addEventListener('DOMContentLoaded',()=>{
        const navLinkCollection = document.querySelectorAll(`[href*='#']`)
        for (let item of navLinkCollection){
            item.addEventListener('click',(event)=>{
                event.preventDefault()

                if(item.hash.length){
                    const block = document.querySelector(item.hash)
                    console.log(block)

                    block.scrollIntoView({behavior:'smooth'})
                }
            })
        }
    })
}
smoothSectionOpen()

function startBurgerMenu() {
    burger.addEventListener('click',()=>{
        burger.classList.toggle('burger--active')
        navMenu.classList.toggle('nav-menu--active')

    })


}
startBurgerMenu()

function searchAction() {
    const searchInput = document.querySelector('.search__input')
    searchIcon.addEventListener('click',()=>{
        searchInput.classList.toggle('search__input--active')
    })
}
searchAction()

function headerAction() {
    window.addEventListener('scroll',()=>{

        window.scrollY > 200 ? header.classList.add('header--active') : header.classList.remove('header--active')
    })
}
headerAction()

function closeMenu() {
    document.addEventListener('click',(event)=>{

        if(!event.target.closest('.burger') && !event.target.closest('.nav-menu')){
            burger.classList.remove('burger--active')
            navMenu.classList.remove('nav-menu--active')
        }
    })

}
closeMenu()


const swiper = new Swiper('.experience-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:1,
    spaceBetween:30,
    autoplay:true,
    mousewheel:true,

    // If we need pagination
    pagination: {
        el: '.slider__pagination--experience',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider__button--experience--next',
        prevEl: '.slider__button--experience--prev',
    },
    breakpoints:{
        430:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView:3,
        }
    },

});


function startVideoPlay() {
    const playVideoCollection = document.querySelectorAll('.video')

    for (let item of playVideoCollection){
        const videoItem = item.querySelector('.video__item')
        const videoIcon = item.querySelector('.video__play')
        const videoPoster = item.querySelector('.video__poster')
        item.addEventListener('click',(event)=>{
            if(window.innerWidth < 480){
                if(videoItem.paused){
                    videoItem.play()
                    videoIcon.style.display = 'none'
                    videoPoster.style.display = 'none'
                }
            } else {
                if (videoItem.paused) {
                    videoItem.play()
                    item.classList.add('video--active')
                    videoIcon.style.display = 'none'
                    document.body.style.overflow = 'hidden'
                    videoPoster.style.display = 'none'
                } else {
                    videoItem.pause()
                    videoIcon.style.display = 'block'
                    item.classList.remove('video--active')
                    document.body.style.overflow = 'auto'
                    videoPoster.style.display = 'block'
                }
            }


        })
    }
}
startVideoPlay()

function showMoreContent() {
    const extraContentCollection = document.querySelectorAll('.extra-content')

    for (let item of extraContentCollection){
        const extraContentButton = item.querySelector('.extra-content__button')
        const extraContentText = item.querySelector('.extra-content__more')
        const extraContentDots = item.querySelector('.extra-content__dots')

        extraContentButton.addEventListener('click',()=>{
            extraContentText.classList.toggle('extra-content__more--active')
            extraContentDots.classList.toggle('extra-content__dots--active')
            extraContentButton.classList.toggle('extra-content__button--active')
        })
    }
}
showMoreContent()


