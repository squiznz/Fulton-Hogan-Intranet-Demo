/***
*   Insert Client Name - Main JS - Authors: Insert Author (Squiz)
***/

function detectScrolling() {

  /** Declare variables **/
  var triggerPoint = 90,
      scrTop = 0,
      featureDetected = false;

  function onRepaint() {
    if (typeof window.requestAnimationFrame === "undefined") {
      detectTrigger();
      return;
    }

    if (!featureDetected) {
      window.requestAnimationFrame(detectTrigger)
    }
    featureDetected = true;
  }

  function detectTrigger() {

    scrTop = $(window).scrollTop();
    featureDetected = false;

    (scrTop >= 10) ? $('html').addClass('moving') : $('html').removeClass('moving');
    (scrTop >= triggerPoint) ? $('html').addClass('scrolling') : $('html').removeClass('scrolling');
  }

  detectTrigger(); // run on page load for refresh when already scrolled
 
  $(window).on("scroll", function () {
    onRepaint();
  });
}; // detectScrolling()



function globalActions() {

  $('.utility-nav__primary-toggle, .mobile-close').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('html').toggleClass('show-menu');
      toggleIcon('.utility-nav__primary-toggle .primary-nav__open-nav-icon','.utility-nav__primary-toggle .primary-nav__close-nav-icon');
  });

  $('html').click(function(event) {
    var $html = $('html');
    if (!$(event.target).closest('.global-nav').length && $html.hasClass('show-menu')) {
      $('html').toggleClass('show-menu');
      toggleIcon('.utility-nav__primary-toggle .primary-nav__open-nav-icon','.utility-nav__primary-toggle .primary-nav__close-nav-icon');
    }    
  });

  $('.mobile-toggle').click(function(e) {
    e.stopPropagation();

    var $parent = $(this).parent();

    $parent.toggleClass('expanded').siblings('li.expanded').removeClass('expanded');
  });

  $("input.global-search__keyword").fbcompletion({
    'enabled'    : 'enabled',
    'collection' : 'fulton-hogan-meta',
    'program'    : 'https://intranet-demo.squiz.co.nz/s/suggest.json',
    'alpha'      : '.5',
    'show'       : '10',
    'sort'       : '0',
    'length'     : '3',
    'delay'      : '0'
    });

}; // globalActions()

$(document).ready(function () {
  
  detectScrolling();
  globalActions();
  
});