/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {

          var ham = $(".ham");
          var menu = $(".mobile-menu");
          var cross = $(".cross");
          ham.on("click", function() {
              menu.toggle();
          });
          cross.on("click", function() {
              menu.toggle();
          });

          $("nav [href]").each(function() {
              if (this.href == window.location.href) {
                  $(this).addClass("active");
              }
          });
          $(".gala-button-collapse").sideNav();
          $(".button-collapse").sideNav();
          $('ul.tabs').tabs();
          // $('ul.tabs').tabs('select_tab', 'tab_id');

          new Vivus('gala-logo', {
                // delay: 50,
                // type: 'async',
                // duration: 100,
                animTimingFunction: Vivus.EASE,
                // delay:20
              },
              function(obj) {
                  obj.el.classList.add('finished');
              });

          $(function() {

              // $('.bg').delay(3000).fadeOut(500);
              $('.vivus-bg').hide().delay(2800).fadeIn(800);
              $('.vivus-2').hide().delay(2800).fadeIn(1500);
              $('.vivus-3').hide().delay(2800).fadeIn(1500);
              $('.logo-fade').delay(2600).fadeOut(550);
          });
          //gala svg animation===============================
          // var pathObj = {


          //     "gala-wht": {
          //         "strokepath": [
          //             {
          //                 "path": "M156.5,234.4c11.8,0,23.8-4.5,35-11.2c16.5-26.6,35.3-49,43.7-49c1.7,0,2.8,1.1,2.8,3.9   c0,5.3-13.4,23-32.2,37.5l-18.2,36.1c-1.7,3.1-3.1,6.4-5,9.5c22.7-13.7,33.6-21.6,52.1-45.6l1.1,1.1c-19.3,25.2-30.5,33-55.4,48.2   c-19,31.6-49.6,62.2-63.6,62.2c-3.1,0-5.9-2-5.9-5c0-17.9,33.9-38.1,54-50.1c3.9-6.7,7.3-13.7,10.9-20.7   c4.2-8.4,8.7-16.8,13.7-24.9c-10.6,5.9-21.8,9.8-33,9.8c-18.5,0-30.2-14-30.8-29.1c-2.2,0-4.2,0.3-6.4,0.3c-33,0-65-14-65-57.7   c0-57.1,66.4-112.3,124.3-112.3c31.6,0,53.5,17.4,53.5,44.8c0,3.6-0.6,7.6-1.1,10.9c5-1.7,9.5-2.5,12.9-2.5   c10.4,0,18.5,8.4,18.5,18.8c0,34.2-63.6,88.2-126.3,96.9C136.1,223.2,142,234.4,156.5,234.4z M229.3,93.5c0.8-3.6,1.1-7.6,1.1-11.5   c0-26.3-21-43.1-51.8-43.1c-59.9,0-120.4,61.9-120.4,112.8c0,43.4,29.1,53.8,61,53.8c2.2,0,4.2-0.3,6.4-0.3   C126.3,154,193.2,105.8,229.3,93.5z M112.6,322c0,2,1.7,3.4,4.2,3.4c11.8,0,29.7-21.8,45.9-49.8C140.5,288.7,112.6,306.3,112.6,322   z M260.7,109.2c0-9.2-7.6-17.1-16.8-17.1c-3.9,0-8.4,1.1-13.2,2.8c-5.3,23.5-24.9,40.9-42.6,49.3l-0.6-1.7   c16.8-8.1,35.6-24.9,41.2-47c-36.4,14.3-91.6,71.4-92.7,108.9C198.2,195.7,260.7,142,260.7,109.2z M236.3,178.1   c0-1.7-0.6-2.2-1.1-2.2c-6.4,0-18.2,13.4-27.4,35.8C224.5,198,236.3,182.3,236.3,178.1z",
          //                 "duration": 2000
          //             },
          //             {
          //                 "path": "M269.1,239.1c-1.4,2.5-2.8,5-2.8,7.3s0.8,4.8,3.1,4.8c6.7,0,23.2-21,32.8-35.6l1.4,1.1   c-3.1,4.5-24.4,36.1-34.2,36.1c-6.2,0-10.9-3.4-10.9-12c0-1.7,0.6-4.2,1.7-6.7c-9,10.6-18.5,18.8-23.8,18.8   c-6.2,0-10.9-5.3-10.9-12.9c0-27.2,42-58.8,54-58.8c3.9,0,5.3,5,5.3,8.1c0,3.4-1.4,7.8-3.6,12.9l16-20.2h5L269.1,239.1z    M232.7,246.7c0,2.2,1.4,4.5,3.6,4.5c5.9,0,17.4-11.2,27.4-24.4c3.1-5,7-10.6,11.5-16.8c4.8-8.1,7.8-15.7,7.8-20.7   c0-3.4-1.4-6.4-3.6-6.4C273.8,182.8,232.7,229,232.7,246.7z",
          //                 "duration": 1200
          //             },
          //             {
          //                 "path": "M300.7,245.8c0,4.2,1.1,5.3,3.1,5.3c9.8,0,24.6-24.9,34.4-35.6l1.4,1.1c-10.6,11.5-24.9,36.1-35.8,36.1   c-9.8,0-11.8-6.2-11.8-11.8c0-13.2,17.6-38.4,37-64.1c23-30.5,49.3-59.6,59.4-59.6c3.4,0,4.5,3.1,4.5,5.9c0,15.4-37,49.6-63,67.8   C313.9,215,300.7,238,300.7,245.8z M391.1,123.2c0-2.2-1.1-4.2-2.8-4.2c-5.9,0-33.3,34.4-56,68   C360.1,166.9,391.1,136.1,391.1,123.2z",
          //                 "duration": 1200
          //             },
          //             {
          //                 "path": "M372.7,239.1c-1.4,2.5-2.8,5-2.8,7.3s0.8,4.8,3.1,4.8c6.7,0,23.2-21,32.8-35.6l1.4,1.1   c-3.1,4.5-24.4,36.1-34.2,36.1c-6.2,0-10.9-3.4-10.9-12c0-1.7,0.6-4.2,1.7-6.7c-9,10.6-18.5,18.8-23.8,18.8   c-6.2,0-10.9-5.3-10.9-12.9c0-27.2,42-58.8,54-58.8c3.9,0,5.3,5,5.3,8.1c0,3.4-1.4,7.8-3.6,12.9l16-20.2h5L372.7,239.1z    M336.3,246.7c0,2.2,1.4,4.5,3.6,4.5c5.9,0,17.4-11.2,27.4-24.4c3.1-5,7-10.6,11.5-16.8c4.8-8.1,7.8-15.7,7.8-20.7   c0-3.4-1.4-6.4-3.6-6.4C377.4,182.8,336.3,229,336.3,246.7z",
          //                 "duration": 1200
          //             }
          //         ],
          //         "dimensions": {
          //             "width": 461,
          //             "height": 365
          //         }
          //     }
          // };
          //
          // $(document).ready(function(){
          //     $('#gala-wht').lazylinepainter(
          //         {
          //             "svgData": pathObj,
          //             "strokeWidth": 2,
          //             "strokeColor": "#ffffff"
          //         }).lazylinepainter('paint');
          // });
          //
          //
          // (function(e,r,p){var l={init:function(c){return this.each(function(){var a=e(this),b=a.data("lazyLinePainter");a.addClass("lazy-line");if(!b){var b=e.extend({width:null,height:null,strokeWidth:2,strokeColor:"#000",strokeCap:"round",strokeJoin:"round",strokeOpacity:1,strokeDash:null,onComplete:null,delay:null,overrideKey:null},c),h=null===b.overrideKey?a.attr("id").replace("#",""):b.overrideKey,f=b.svgData[h].dimensions.width,k=b.svgData[h].dimensions.height;b.svgData=b.svgData[h].strokepath;null===
          // b.width&&(b.width=f);null===b.height&&(b.height=k);h=a.attr("id");f=new Raphael(h,f,k);a.data("lazyLinePainter",{svgData:b.svgData,width:b.width,height:b.height,strokeWidth:b.strokeWidth,strokeColor:b.strokeColor,strokeCap:b.strokeCap,strokeJoin:b.strokeJoin,strokeOpacity:b.strokeOpacity,strokeDash:b.strokeDash,onComplete:b.onComplete,delay:b.delay,overrideKey:b.overrideKey,paper:f,count:1,complete:!1,playhead:0,setTimeOutHandler:[]})}})},paint:function(){return this.each(function(){var c=e(this),
          //     a=c.data("lazyLinePainter"),b=function(){c.css({width:a.width,height:a.height});e.each(a.svgData,function(b,f){var e=a.paper.path(f.path);e.attr({stroke:"none","stroke-width":a.strokeWidth,"fill-opacity":0});var g=setTimeout(function(){n({count:a.count,canvas:a.paper,pathstr:e,duration:f.duration,attr:m(a,f),callback:function(b){a.setTimeOutHandler.splice(a.count,1);a.count++;a.svgData.length+1==a.count&&(a.complete=!0,null!==a.onComplete&&a.onComplete.call(c))}})},a.playhead);a.playhead+=f.duration;
          //         a.setTimeOutHandler.push(g)})};null===a.delay?b():setTimeout(b,a.delay)})},erase:function(){return this.each(function(){var c=e(this);c.find("svg").empty();d=c.data("lazyLinePainter");for(i=0;i<d.setTimeOutHandler.length;i++)clearTimeout(d.setTimeOutHandler[i]);d.playhead=0;d.count=0;d.complete=!1})},destroy:function(){return this.each(function(){var c=e(this);c.data("lazyLinePainter");c.removeData("lazyLinePainter");c.remove()})},stamp:function(){return this.each(function(){var c=e(this),a=c.data("lazyLinePainter"),
          //     b=function(){c.css({width:a.width,height:a.height});for(i=0;i<a.svgData.length;i++)a.paper.path(a.svgData[i].path).attr(m(a,a.svgData[i]))};null===a.delay?b():setTimeout(b,a.delay)})}},m=function(c,a){return{stroke:a.strokeColor?a.strokeColor:c.strokeColor,"fill-opacity":0,"stroke-dasharray":a.strokeDash?a.strokeDash:c.strokeDash,"stroke-opacity":a.strokeOpacity?a.strokeOpacity:c.strokeOpacity,"stroke-width":a.strokeWidth?a.strokeWidth:c.strokeWidth,"stroke-linecap":a.strokeCap?a.strokeCap:c.strokeCap,
          //     "stroke-linejoin":a.strokeJoin?a.strokeJoin:c.strokeJoin}},n=function(c){var a=c.canvas,b=c.pathstr,e=c.duration,f=c.attr,k=c.callback,g;g="string"==typeof b?a.path(b).attr({stroke:"none",fill:"none"}):b;var l=a.path(g.getSubpath(0,1)).attr(f),m=g.getTotalLength(g);g.getPointAtLength(0);var n=(new Date).getTime(),q=setInterval(function(){var a=(new Date).getTime()-n,b=g.getSubpath(0,a/e*m);f.path=b;l.animate(f,25);a>=e&&(clearInterval(q),k!==p&&k(),g.remove())},25)};e.fn.lazylinepainter=function(c){if(l[c])return l[c].apply(this,
          //     Array.prototype.slice.call(arguments,1));if("object"===typeof c||!c)return l.init.apply(this,arguments)}})(jQuery,window);
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }

  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
