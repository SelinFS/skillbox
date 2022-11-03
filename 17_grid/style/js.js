document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.nav__burger-menu-button').addEventListener('click', function()  {
    document.querySelector('.nav__burger-menu').classList.toggle('nav__burger-menu-active')
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.nav__button-burger').addEventListener('click', function()  {
    document.querySelector('.nav__burger-menu').classList.toggle('nav__burger-menu-active')
  })
})
