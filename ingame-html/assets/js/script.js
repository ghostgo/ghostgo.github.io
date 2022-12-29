window.addEventListener('DOMContentLoaded', () => {
  const mobileMql = window.matchMedia('(max-width: 961px)'),
    homeBg = document.querySelectorAll('.mouse_parallax'),

    menuBtn = document.querySelector('.menu__btn'),
    menuList = document.querySelector('.menu__list'),
    menuBtnImg = document.querySelector('.menu__btn img'),
    menuPopup = document.querySelector('.menu__popup'),

    orderBtn = document.querySelectorAll('.solutions__toggle-popup'),
    formPopup = document.querySelector('.solutions__popup');

  if (!mobileMql.matches)
    for (let i = 0; i < homeBg.length; i++) {
      window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        homeBg[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
      });
    }

  menuBtn.addEventListener('click', () => {
    if (mobileMql.matches)
      menuPopup.classList.toggle('menu__popup--active');
    else
      menuList.classList.toggle('menu__list--active');

    if (menuList.classList.contains('menu__list--active') || menuPopup.classList.contains('menu__popup--active'))
      menuBtnImg.src = '../assets/icons/menuClose.svg';
    else
      menuBtnImg.src = '../assets/icons/menu.svg';
  });

  for (let i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener('click', () => {
      formPopup.classList.toggle('solutions__popup--active');
    });
  }
})