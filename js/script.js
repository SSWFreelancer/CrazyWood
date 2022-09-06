$(document).ready(function () {
   $("input[type='tel']").mask("8 (999)999 99 99"); 
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('html, body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header__burger, .menu').removeClass('active');
       $('html, body').removeClass('lock');
   });
   $(".order-popup .service-popup__inputs input").keyup(function(event) {
      var orderInput = $(".order-popup .service-popup__inputs input[type='text'").val();
      var orderInputTel = $(".order-popup .service-popup__inputs input[type='tel'").val();
      const substring = '_';
       if(orderInput.length > 3 && orderInputTel.length != 0 && orderInputTel.indexOf(substring) == -1){
          $(".order-popup button").removeAttr("disabled");
       }else{
          $(".order-popup button").attr('disabled', 'disabled');
     }
   });
   $(".order-popup .service-popup__inputs input[type='text']").keyup(function(event) {
      var orderInput1 = $(this).val();
      console.log(orderInput1.length);
       if(orderInput1.length > 3){
         $(".order-popup p:first-child").removeClass('margin');
          $(".order-popup .service-popup__inputs p:first-child .label-for-forms").removeClass("active");
       }else{
         $(".order-popup p:first-child").addClass('margin');
          $(".order-popup .service-popup__inputs p:first-child .label-for-forms").addClass("active");
      }  
   });    
   $(".order-popup .service-popup__inputs p input[type='tel']").keyup(function(event) {
      var orderInputtel1 = $(this).val();
      const substring = '_';
       if(orderInputtel1.indexOf(substring) == -1){
          $(".order-popup .service-popup__inputs p:last-child .label-for-forms").removeClass("active");
       }else{
          $(".order-popup .service-popup__inputs p:last-child .label-for-forms").addClass("active");
      }
   }); 


   $(".service-popup .service-popup__inputs input").keyup(function(event) {
      var serviceInput = $(".service-popup__inputs input[type='text'").val();
      var serviceInputTel = $(".service-popup__inputs input[type='tel'").val();
      const substring = '_';
       if(serviceInput.length > 3 && serviceInputTel.length != 0 && serviceInputTel.indexOf(substring) == -1){
          $(".service-popup button").removeAttr("disabled");
       }else{
          $(".service-popup button").attr('disabled', 'disabled');
      }
   });  


   $(".service-popup .service-popup__inputs input[type='text']").keyup(function(event) {
      var serviceInput1 = $(this).val();
       if(serviceInput1.length > 3){
         $(".service-popup p:first-child").removeClass('margin');
          $(".service-popup .service-popup__inputs p:first-child .label-for-forms").removeClass("active");
       }else{
         $(".service-popup p:first-child").addClass('margin');
          $(".service-popup .service-popup__inputs p:first-child .label-for-forms").addClass("active");
      }  
   });    
   $(".service-popup .service-popup__inputs p input[type='tel']").keyup(function(event) {
      var serviceInputtel1 = $(this).val();
      const substring = '_';
       if(serviceInputtel1.indexOf(substring) == -1){
          $(".service-popup .service-popup__inputs p:last-child .label-for-forms").removeClass("active");
       }else{
          $(".service-popup .service-popup__inputs p:last-child .label-for-forms").addClass("active");
      }
   }); 

   $('.service-popup__inputs input').focus(function (event) {
      $(this).prev().addClass('active');
   });
   $('.service-popup__inputs input').blur(function (event) {
      if(!$(this).val()){
        $(this).prev().removeClass('active');
      }
   });
   $('.footer__inputs input').focus(function (event) {
      $(this).prev().addClass('active');
   });
   $('.footer__inputs input').blur(function (event) {
      if(!$(this).val()){
        $(this).prev().removeClass('active');
      }
   });
   $('.form__inputs input').focus(function (event) {
      $(this).prev().addClass('active');
   });
   $('.form__inputs input').blur(function (event) {
      if(!$(this).val()){
        $(this).prev().removeClass('active');
      }
   });   
   $(".form__inputs p input[type='text']").keyup(function(event) {
      var formsInput = $(this).val();
       if(formsInput.length > 3){
          $(".form__inputs p:first-child .label-for-forms").removeClass("active");
          $(".form__inputs p:first-child").removeClass('margin');
       }else{
         $(".form__inputs p:first-child").addClass('margin');
          $(".form__inputs p:first-child .label-for-forms").addClass("active");
      }
   });   
   $(".form__inputs p input[type='tel']").keyup(function(event) {
      var formsInputtel = $(this).val();
      const substring = '_';
       if(formsInputtel.indexOf(substring) == -1){
          $(".form__inputs p:last-child .label-for-forms").removeClass("active");
       }else{
          $(".form__inputs p:last-child .label-for-forms").addClass("active");
      }
   });    
   $(".footer__inputs input[type='text']").keyup(function(event) {
      var footerInput = $(this).val();
       if(footerInput.length > 3){
          $(".footer__inputs p:first-child .label-for-forms").removeClass("active");
       }else{
          $(".footer__inputs p:first-child .label-for-forms").addClass("active");
      }
   });  
   $(".footer__inputs p input[type='tel']").keyup(function(event) {
      var footerInputtel = $(this).val();
      const substring = '_';
       if(footerInputtel.indexOf(substring) == -1){
          $(".footer__inputs p:nth-child(2) .label-for-forms").removeClass("active");
       }else{
          $(".footer__inputs p:nth-child(2) .label-for-forms").addClass("active");
      }
   });   
   $(".footer__inputs input[type='email']").keyup(function(event) {
      var footerInputmail = $(this).val();
       if(footerInputmail.length > 5){
          $(".footer__inputs p:last-child .label-for-forms").removeClass("active");
       }else{
          $(".footer__inputs p:last-child .label-for-forms").addClass("active");
      }
   });            
   $('.suggestions__dec').click(function (event) {
     var $input = $(this).parent().find('input');
     var count = parseInt($input.val()) - 1;
     count = count < 1 ? 1 : count;
     $input.val(count);
   }); 
   $('.suggestions__inc').click(function () {
     var $input = $(this).parent().find('input');
     $input.val(parseInt($input.val()) + 1);
   });  
   $('.products__button').click(function (event) {
      event.preventDefault();
      $(this).hide();
       $('.products__more').addClass('active');
   });
   $('.event__button').click(function (event) {
      event.preventDefault();
      $(this).hide();
       $('.event__card').addClass('active');
   });
   $('.products__card, .services__card').click(function (event) {
       $('.service-popup').addClass('open');
       $('body').addClass('lock');
   });  
   $('.event__card').click(function (event) {
       $('.events-popup').addClass('open');
       $('body').addClass('lock');
   });    
   $('.suggestions__slide.super .suggestions__image>img, .suggestions__slide.super .suggestions__cart').click(function (event) {
       $('.suggestions-popup').addClass('open');
       $('body').addClass('lock');
   });
   $('.suggestions__cart-popup ').click(function (event) {
       $('.order-popup').addClass('open');
       $('.suggestions-popup').removeClass('open');
   });         
   $('.service-popup__close1, .service-popup__close').click(function (event) {
       $('.service-popup').removeClass('open');
       $('body').removeClass('lock');
   });   
   $('.events-popup__close1, .events-popup__close').click(function (event) {
       $('.events-popup').removeClass('open');
       $('body').removeClass('lock');
   });    
   $('.suggestions-popup__close1, .suggestions-popup__close').click(function (event) {
       $('.suggestions-popup').removeClass('open');
       $('body').removeClass('lock');
   });  
   $('.order-popup__close1, .order-popup__close').click(function (event) {
       $('.order-popup').removeClass('open');
       $('body').removeClass('lock');
   });  
   $('.order__button, .service-popup__button, .form__button, .footer__button').click(function (event) {
      event.preventDefault();
       $('.request-popup').addClass('open');
       $('.order-popup').removeClass('open');
        $('.service-popup').removeClass('open');
   });
   $('.request-popup__close1, .request-popup__close, .request-popup__button').click(function (event) {
       $('.request-popup').removeClass('open');
       $('body').removeClass('lock');
   }); 
   $('.suggestions__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll:1,
      infinite: true,
      autoplay: false,
        responsive: [
          {
            breakpoint: 1635,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
            },
          }, 
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              arrows:false,
            },
          },  
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 2,
              arrows:false,
               infinite: false,
               autoplay: true,              
            },
          },                             
      ]      
   });
});

$('.popup-carousel__slider').slick({
   arrows: true,
   dots: false,
   fade:true,
   swipe:false,
   slidesToShow: 1,
   asNavFor: '.popup-carousel__navslider', 
        responsive: [
          {
            breakpoint: 1221,
            settings: {
              arrows: false,
              dots:true,
              swipe:true,
            },
          },
      ]        
});
$('.popup-carousel__navslider').slick({
   arrows: false,
   swipe:false,
   slidesToShow: 6,
   focusOnSelect: true,
   asNavFor: '.popup-carousel__slider',
        responsive: [
          {
            breakpoint: 1221,
            settings: "unslick"
          },
      ]         
});  



$(document).scroll(function () {
   var s_top = $(window).scrollTop() + $(window).height(); 
   for (var i = 1; i < $('.menu__item').length + 1; i++) {
      var href = $('.menu__item:nth-child('+ i +') a').attr('href');
      if($(href).length){
         var tpx = $(href).offset().top + $(href).height()*0.6;
         if(s_top > tpx){
            $(".menu__item").removeClass('active');  
            $('.menu__item:nth-child('+ i +')').addClass('active');  
         }
         if(s_top<=$(window).height()){
            $(".menu__item").removeClass('active'); 
         }
      }        
   }
});

$(window).scroll(function (event) {
 var scroll = $(window).scrollTop();
     if(scroll>10){
         $('.header').addClass('scroll');
     }else{
         $('.header').removeClass('scroll');
     }
 });   