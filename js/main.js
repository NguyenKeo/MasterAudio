// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// console.log("file main Trang chủ")

// Phủ định trạng thái
// let showMenu = false;

// function hiddenMenu() {
//     console.log("Ản hiện menu con")

//     if (showMenu) {
//         $('.menu-infos-header-mobile').hide();
//     } else {
//         $('.menu-infos-header-mobile').show();
//     }
//     showMenu = !showMenu;
// }

// Menu truợt ngang sản phẩm bán chạy



// Product list
$(".slide-same-products").slick({
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow:
      '<button class="prev-arrow" aria-label="Previous" type="button"><span class="iconify prev-arrow" data-icon="fluent:chevron-left-28-regular" data-inline="false"></span></button>',
    nextArrow:
      '<button class="next-arrow" aria-label="Next" type="button"><span class="iconify next-arrow" data-icon="fluent:chevron-right-28-regular" data-inline="false"></span></button>',

    responsive: [
      {
        breakpoint: 1240,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });