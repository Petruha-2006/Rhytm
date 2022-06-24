const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



const main = document.querySelector('main')
let navigationLinks = document.querySelectorAll('a');

for (let link of navigationLinks) {
  link.onclick = (e) => {
    e.preventDefault()
    attr = link.getAttribute('href');
    elem = main.querySelector('#' + attr);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
}