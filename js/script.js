$(document).ready(function () {
  // Progress bar
  var containerA = document.getElementById("circleA");

  var circleA = new ProgressBar.Circle(containerA, {
    color: "#65DAF9",
    strokeWidth: 8,
    duration: 1400,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    // Gerando a Animação

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 60);
      circle.setText(value);
    },
  });

  // Progress bar
  var containerB = document.getElementById("circleB");

  var circleB = new ProgressBar.Circle(containerB, {
    color: "#65DAF9",
    strokeWidth: 8,
    duration: 1600,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    // Gerando a Animação

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() *254);
      circle.setText(value);
    },
  });

  // Progress bar
  var containerC = document.getElementById("circleC");

  var circleC = new ProgressBar.Circle(containerC, {
    color: "#65DAF9",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    // Gerando a Animação

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 32);
      circle.setText(value);
    },

  });

    // Progress bar
    var containerD = document.getElementById("circleD");

    var circleD = new ProgressBar.Circle(containerD, {
      color: "#65DAF9",
      strokeWidth: 8,
      duration: 2200,
      from: { color: "#AAA" },
      to: { color: "#65DAF9" },
  
      // Gerando a Animação
  
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
  
        var value = Math.round(circle.value() * 5245);
        circle.setText(value);
      },
    });

    // iniciando o loader quando o usuário chega na sessão dos dados

    var dataAreaOffset = $('#data-area').offset();
    var stop = 0;

    $(window).scroll(function(e) {

    var scroll = $(window).scrollTop();

    if (scroll > (dataAreaOffset.top - 500) && stop == 0){

    circleA.animate(1.0);
    circleB.animate(1.0);
    circleC.animate(1.0);
    circleD.animate(1.0);

    stop = 1;

    }

    });

    // Parallax

    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    }, 250);

    // Filtro do portfólio

    $('.filter-btn').on('click', function(){

      var type = $(this).attr('id');
      var boxes = $('.project-box');

      $('.main-btn').removeClass('active');
      $(this).addClass('active');

      // Filtro do portfólio --> Detectar qual id foi clicado

      if(type == 'dsg-btn'){
        eachBoxes('dsg', boxes)       
      }else if(type == 'dev-btn') {
        eachBoxes('dev', boxes)
      }else if (type == 'seo-btn') {
        eachBoxes('seo', boxes)
      }else {
        eachBoxes('all', boxes);
      }
       

    });

    function eachBoxes(type, boxes) {
      if(type == 'all'){
        $(boxes).fadeIn();
      }else {
        $(boxes).each(function (){
          if(!$(this).hasClass(type)){  
            $(this).fadeOut('slow');        
          }else {
            $(this).fadeIn();
          }
        })
      }

    }
     // Scroll para as seções
  let navBtn =$('.nav-item');
  
  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    console.log(btnId);
    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if ( btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if ( btnId == 'team-menu'){
      scrollTo = teamSection;
    } else if ( btnId == 'portfolio-menu'){
      scrollTo = portfolioSection;
    } else if ( btnId == 'contact-menu'){
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

  $([document.documentElement, document.body]).animate({
    scrollTop: $(scrollTo).offset().top - 70}, 1000);
  });

});
