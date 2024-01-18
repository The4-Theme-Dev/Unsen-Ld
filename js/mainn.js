
document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  
    setTimeout(function(){ 
      $('.t4s_content_3,.t4s_content_6_app_partner,.t4s_content_8_review_unsen,.t4s_content_10_HR').addClass('t4s-load-bg')
    }, 680);
  }
});

$(window).resize(function () {
  $('.btn_menu_mobile').click(function (e) {
    e.preventDefault();
    $('.menu').addClass('t4s_menu_mobile');
    $('.t4s_oveflow').show();
  });

  $('.t4s_exit_btn_menu_item').click(function (e) {
    e.preventDefault();
    $('.menu').removeClass('t4s_menu_mobile');
    $('.t4s_oveflow').hide();
  });

  $('.t4s_li_sub_menu-click').off('click').on( "click", function(e) {  
    // e.preventDefault();
    $(this).find('.t4s_sub_menu').slideToggle(300);
    $(this).toggleClass('open'); 
  });


  $(document).mouseup(function (e) {
    var container2 = $('.menu');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container2.is(e.target) && container2.has(e.target).length === 0) {
      container2.removeClass('t4s_menu_mobile');
      $('.t4s_oveflow').hide();
    }
  });


  let tabs = document.querySelectorAll(".t4s_tab_links");
  let tabsArray = Array.from(tabs);
  let tabs_content = document.querySelectorAll(".t4s_content_tab");
  let tabsArray_content = Array.from(tabs_content);
  tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      // console.log(ele);
      tabsArray.forEach((ele) => {
        ele.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });




  

  $('.t4s_tab_links2').click(function (e) {
    e.preventDefault();
  });

  //popup
  $('.popup_video,.popup_video2 , .popup_video3').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  //install app
  $('.t4s_btn_new_letter').click(function (e) {
    e.preventDefault();
    window.open(`https://apps.shopify.com/ecomposer?utm_source=unsen&utm_medium=landing-button`, "_blank");
  });

  //sticky menu

  $(".t4s_content_header_wrap").removeClass('sticky');
  $(".logo").removeClass('sticky_logo');
  $(window).scroll(function () {

    if ($(window).scrollTop() > 44) {
      if ($(window).width() >= 768) {
        $(".t4s_content_header_wrap").addClass('sticky');
      } else {
        $(".logo").addClass('sticky_logo');
      }
    } else {
      $(".t4s_content_header_wrap").removeClass('sticky');
      $(".logo").removeClass('sticky_logo');
    }
  });

  // Accordion
  $('.t4s_title_accordion_wrap').off('click').on( "click", function(e) {  
    $(this).siblings('.t4s_content_accordion_wrap').slideToggle(300).toggleClass("t4s_hidden_t4s_content_accordion_wrap");
    $(this).find('.t4s_icon_minus').toggleClass('t4s_hidden_icon');
    $(this).find('.t4s_icon_plus').toggleClass('t4s_hidden_icon');
    $(this).closest('.t4s_Accordion').siblings().find('.t4s_content_accordion_wrap').slideUp(300).removeClass('t4s_hidden_t4s_content_accordion_wrap');
    $(this).closest('.t4s_Accordion').siblings().find('.t4s_icon_minus').addClass('t4s_hidden_icon');
    $(this).closest('.t4s_Accordion').siblings().find('.t4s_icon_plus').removeClass('t4s_hidden_icon');

  });
// password

  $('.link_demo_password').click(function (e) {
    let tm_psss = sessionStorage.getItem('tm_psss');
    if(tm_psss == 'true'){
      return;
    }
    console.log(tm_psss);
    e.preventDefault();
    var href = $(this).attr('href');
    $('.t4s_popup_password').addClass('visible_password');
    $('.t4s_oveflow').addClass('visible_password');
    $('.btn_popup_password').attr("href", `${href}`);
    sessionStorage.setItem('tm_psss',true);
  });

  $('.t4s_oveflow, .t4s_content_popup_password [is-close]').click(function (e) {
    e.preventDefault();
    $('.t4s_popup_password').removeClass('visible_password');
    $('.t4s_oveflow').removeClass('visible_password');
  });
});

$(window).resize();