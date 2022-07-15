'use strict';
$(document).ready(() => {

    $('#burger-menu').click(function () {
        $('#nav-menu').addClass('open');
    })
    $('.menu-item *').click(function () {
        $('#nav-menu').removeClass('open');
    })
    $('#close-menu').click(function () {
        $('#nav-menu').removeClass('open');
    })


    //   слайдер для меню / бургеры
    let slickBurgerOptions = {
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        appendArrows: '.menu-slider-arrow',
        prevArrow: $('.slider-arrow-prev'),
        nextArrow: $('.slider-arrow-next'),
        /*prevArrow: $('.prev'),
        nextArrow: $('.next'),*/
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2
                }
            }
        ]
    };
    let chickenBurger = $('.chicken-slider');
    let beefBurger = $('.beef-slider');
    let duckBurger = $('.duck-slider');
    let crabBurger = $('.crab-slider');
    let activeSlider = $('.active');

    activeSlider.slick(slickBurgerOptions);
    chickenBurger.slick(slickBurgerOptions);
    beefBurger.slick(slickBurgerOptions);
    duckBurger.slick(slickBurgerOptions);
    crabBurger.slick(slickBurgerOptions);

    setTimeout(() => {
        chickenBurger.slick('refresh');
        beefBurger.slick('refresh');
        duckBurger.slick('refresh');
        crabBurger.slick('refresh');
        activeSlider.slick('refresh');
    }, 30)


    // слайдер для отзывов

    let slickReviewOptions = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: '.slider-arrows',
        prevArrow: $('.review-prev'),
        nextArrow: $('.review-next'),

        /*prevArrow: $('.review-prev'),
        nextArrow: $('.review-next'),*/
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2
                }
            }
        ],
    };

    let reviewSlider = $('.review-slider');
    reviewSlider.slick(slickReviewOptions);


    setTimeout(() => {
        reviewSlider.slick('refresh');
    }, 30)

//wow
    new WOW().init();

// скролл к бронированию при нажатии на кнопку "Забронировать стол"

    $('#booking-table').click(function () {
        $('.booking')[0].scrollIntoView({behavior: "smooth"});
    });
// при разрешении экрана ниже 679px
    $('#booking-table-double').click(function () {
        $('.booking')[0].scrollIntoView({behavior: "smooth"});
    });


// клик на категорию меню


    $('#chicken-menu').click(function () {
        chickenBurger.show();
        beefBurger.hide();
        duckBurger.hide();
        crabBurger.hide();
        activeSlider.hide();
        chickenBurger.slick('refresh');
    })
    $('#beef-menu').click(function () {
        beefBurger.show();
        chickenBurger.hide();
        duckBurger.hide();
        crabBurger.hide();
        activeSlider.hide();
        beefBurger.slick('refresh');
    })
    $('#duck-menu').click(function () {
        duckBurger.show();
        chickenBurger.hide();
        beefBurger.hide();
        crabBurger.hide();
        activeSlider.hide();
        duckBurger.slick('refresh');
    })
    $('#crab-menu').click(function () {
        crabBurger.show();
        chickenBurger.hide();
        beefBurger.hide();
        duckBurger.hide();
        activeSlider.hide();
        crabBurger.slick('refresh');
    })

// валидация полей
    $('#submit').click(function () {
        let input = $('input');
        let name = $('#name');
        let phone = $('#phone');
        let hasError = false;


        input.css('border-color', '#FDB15BFF');
        $('.error-name-input').hide();
        $('.error-phone-input').hide();
        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'red');
            hasError = true;
        }


        if (!hasError) {
            let loader = $('.loader');
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val()}
            })
                .done(function (message) {
                    loader.hide();
                    let popup = $('#popup');

                    if (message.success) {
                        popup.css('display', 'flex');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }

                });
            // закрытие модалки
            $('.close *').click(function () {
                $('#popup').hide();
            })
        }
    })

//маска телефона в инпут
    let phone = $('#phone');
    phone.inputmask({"mask": "+9(999) 999-9999"});

    // })
})

/*

// Select required elements from the DOM
const modal = document.querySelector("#modal");
const body = document.querySelector("body");

const showModal = function (e) {
    modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
    } else {
        // Enable scroll
        body.style.overflow = "auto";
    }
};*/
