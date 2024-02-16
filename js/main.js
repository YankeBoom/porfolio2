// const modalViews = document.querySelectorAll('.registration__modal');
// const modalBtns = document.querySelectorAll('.modal__btn');
// const modalCloses = document.querySelectorAll('.registration__modal-close');

// let modal = function(modalClick) {
//     modalViews[modalClick].classList.add('acive-modal');
// }

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener('click', () => {
//         modal(i)
//     })
// })

// modalCloses.forEach((modalClose)  => {
//     modalClose.addEventListener('click', () => {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove('active-modal')
//         })
//     } )
// })

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.header_nav')
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile');
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};

// const modalButtons = document.querySelectorAll('[data-modal-button]');
// const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
// const allModals = document.querySelectorAll('[data-modal]');

// // Кнопки - Открыть Модалку
// modalButtons.forEach(function (item) {
//     item.addEventListener('click', function () {
// 		const modalId = this.dataset.modalButton;
// 		const modal = document.querySelector('#' + modalId);
// 		modal.classList.remove('hidden');
//     document.body.classList.toggle('no-scroll1');

// 		// Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
// 		modal.querySelector('.autorization__modal-content').addEventListener('click', function (e) {
// 			e.stopPropagation();
// 		});
// 	})
// })

// allModals

// // Кнопки - Закрыть Модалку
// modalClosebuttons.forEach(function (item) {
//     item.addEventListener('click', function () {
//         const modal = this.closest('[data-modal]');
//         modal.classList.add('hidden');
//         document.body.classList.remove('no-scroll1');
//     })
// })

// // Закрытие модалок по фейду
// allModals.forEach(function (item) {
//     item.addEventListener('click', function () {
//         this.classList.add('hidden');
// 	});
// });

// const modalButtons = document.querySelectorAll('[data-modal-button]');

// const modalButtons = document.querySelector('.header_nav-authorization');
// const modalClosebuttons = document.querySelectorAll('close');
// const allModals = document.querySelectorAll('[data-modal]');

// modalButtons.addEventListener('click', function () {
//   document.body.classList.toggle('no-scroll1');
// })
      
  
//   allModals
  
//   // Кнопки - Закрыть Модалку
//   modalClosebuttons.forEach(function (item) {
//       item.addEventListener('click', function () {
//           const modal = this.closest('[data-modal]');
//           modal.classList.add('hidden');
//           document.body.classList.remove('no-scroll1');
//       })
//   })


/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.slider', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  });

  function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
