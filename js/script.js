function info_1_1(){
    $("#info_star").addClass("remove")
    $("#info_star").removeClass("hide")
    $("#info_eye").removeClass("remove")
    $("#info_eye").addClass("hide")
    $("#info_sun").addClass("remove")
    $("#info_sun").removeClass("hide")

    $("#img1").attr("src","img/Rectangle 1270 (4).png").css({"width":"474px","height":"523px"})
    $("#img_star").attr("src","img/feather.png")
    $("#img_eye").attr("src","img/star (1).png")
    $("#pie_1").attr("src","img/Group 208.png")
    $("#img_sun").attr("src","img/sun.png")
    $("#uli_1").css("display","block")
    $("#uli").css("display","none")
}

function info_1_2(){
    $("#info_star").removeClass("remove")
    $("#info_star").addClass("hide")
    $("#info_eye").addClass("remove")
    $("#info_eye").removeClass("hide")
    $("#info_sun").addClass("remove")
    $("#info_sun").removeClass("hide")

    $("#s2_pg_kolo").add()
    $("#kolo").add()
    $("#img1").attr("src","img/Rectangle 1270 (3).png").css({"width":"444px","height":"523px"})
    $("#img_star").attr("src","img/star.png")
    $("#img_eye").attr("src","img/eye.png")
    $("#pie_1").attr("src","img/Pie Graph.png")
    $("#img_sun").attr("src","img/sun.png")
    $("#uli_1").css("display","none")
    $("#uli").css("display","block")
}

function info_1_3(){
    $("#info_star").addClass("remove")
    $("#info_star").removeClass("hide")
    $("#info_eye").addClass("remove")
    $("#info_eye").removeClass("hide")
    $("#info_sun").removeClass("remove")
    $("#info_sun").addClass("hide")

    $("#img1").attr("src","img/Image (9).png").css({"width":"444px","height":"523px"})
    $("#img_star").attr("src","img/feather.png")
    $("#img_eye").attr("src","img/eye.png")
    $("#img_sun").attr("src","img/sun (1).png")
    $("#pie_1").attr("src","img/Group 208.png")

    $("#uli_1").css("display","block")
    $("#uli").css("display","none")
}

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

$(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
      $('#accordeon .acc-head').on('click', f_acc);
  });
   
  function f_acc(){
  // открываем или скрываем блок под заголовком, по которому кликнули
      $(this).next().slideToggle(2000);
}