'use strict';
{
  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,


    // 自動再生ミリ秒
    autoplay: {
      delay: 3000
    },
  
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,


    // 自動再生ミリ秒
    autoplay: {
      delay: 3000
    },
  
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


  let swiper = new Swiper('.swiper3', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}