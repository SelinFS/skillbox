const burgerActive = document.querySelector('.burger');
const burger = document.querySelector('.burger-menu');


(function () {

  burgerActive.addEventListener('click', () => {
    burgerActive.classList.toggle('burger__active');
  });

  burgerActive.addEventListener('click', () => {
    burger.classList.toggle('burger-menu__active')

    if (burgerActive.classList.contains('burger-menu__active')) {
      burgerActive.classList.add('burger-active')
    } else {
      burgerActive.classList.remove('burger-active')
    }

  });
}());







// отправка формы
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-form-search').addEventListener('click', (e) => {
    document.getElementById('search-input').classList.add('search-input-active')

  })

  document.getElementById('button-closed_search').addEventListener('click', (e) => {
    document.getElementById('search-input').classList.remove('search-input-active')

  })

  document.getElementById('search-input').addEventListener('submit', (e) => {
    e.preventDefault()

  })

})





$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true
  },

});




document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
btn.classList.remove('tabs-nav__btn--active')});
e.currentTarget.classList.add('tabs-nav__btn--active');

document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('tabs-item--active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
  });




