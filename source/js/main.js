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

  $("input.global-search__keyword").fbcompletion({
    'enabled'    : 'enabled',
    'collection' : 'collection_name=fulton-hogan-meta',
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