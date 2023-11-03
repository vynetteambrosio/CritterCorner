/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

  /*=============== MODAL JS ===============*/
  const modal = document.querySelector('#modal');
  const openModal = document.querySelector('.open-button');
  const closeModal = document.querySelector('.close-button');

  openModal.addEventListener('click', () => {
    modal.showModal();
  })

  closeModal.addEventListener('click', () => {
    modal.close();
  })