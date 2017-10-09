<?php
/**
 * Created by PhpStorm.
 * User: tayloremolo
 * Date: 10/3/17
 * Time: 11:34 AM
 */
?>
<!--<div class="homepage-header" style="background-image:url(http://www.fownders.co/hubfs/gala.png);background-size:cover;height:100%;background-repeat:no-repeat;background-position: center;padding:0;">-->

<div class="page-header">
    <div class="container">
        <div class="row mb0 p-40">
            <div class="col s12 center">
                <br>
                <br>
                <br>
                <br>
<!--                <div id="gala-wht"></div>-->
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
            </div>
        </div>
        <div class="row mb0">
            <div class="col s12 m9 l7">
                <div class="row mb0 p10">
                    <div class="col s12 m6">
                        <p class="f-22 white-text text-uppercase">December 7th, 2017</p>
                    </div>
                    <div class="col s12 m6 left-align">
                        <p class="f-22 white-text text-uppercase">Brookdale Banquet</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<?php $coverimage = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) );
// Evaluates if $coverimage is set



if( has_post_thumbnail($post->ID) ) {
    $image_arr = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'large');
    $coverimage = $image_arr[0]; // $image_url is your URL.
}

if (!empty($coverimage)) { ?>
    <style>
        .page-header {
            margin-top: -4%;
            background: transparent;
            background-image: url(<?php echo $coverimage; ?>);
            background-image: -webkit-linear-gradient(rgba(0,0, 0,.95),rgba(0,0, 0,.2)),url(<?php echo $coverimage; ?>);
            background-image: linear-gradient(0deg, rgba(0,92,117,0.03) 52%, #005C75 91%),url(<?php echo $coverimage; ?>);
            background-size: cover;
            background-position: center center !important;
        }
    </style>
<?php }else { ?>

    <?php $coverimage = wp_get_attachment_url( get_post_thumbnail_id( 33 ) ); ?>
    <style>
        .page-header {
            margin-top: -15%;
            background: transparent;
            background-image: url(<?php echo $coverimage; ?>);
            background-image: -webkit-linear-gradient(rgba(0,42, 54,.5),rgba(0,42, 54,.75)),url(<?php echo $coverimage; ?>);
            background-image: linear-gradient(rgba(0,42, 54,.5),rgba(0,42, 54,.75)),url(<?php echo $coverimage; ?>);
            background-size: cover;
        }
    </style>
    <?php

} ?>

<script>



    (function(e,r,p){var l={init:function(c){return this.each(function(){var a=e(this),b=a.data("lazyLinePainter");a.addClass("lazy-line");if(!b){var b=e.extend({width:null,height:null,strokeWidth:2,strokeColor:"#000",strokeCap:"round",strokeJoin:"round",strokeOpacity:1,strokeDash:null,onComplete:null,delay:null,overrideKey:null},c),h=null===b.overrideKey?a.attr("id").replace("#",""):b.overrideKey,f=b.svgData[h].dimensions.width,k=b.svgData[h].dimensions.height;b.svgData=b.svgData[h].strokepath;null===
    b.width&&(b.width=f);null===b.height&&(b.height=k);h=a.attr("id");f=new Raphael(h,f,k);a.data("lazyLinePainter",{svgData:b.svgData,width:b.width,height:b.height,strokeWidth:b.strokeWidth,strokeColor:b.strokeColor,strokeCap:b.strokeCap,strokeJoin:b.strokeJoin,strokeOpacity:b.strokeOpacity,strokeDash:b.strokeDash,onComplete:b.onComplete,delay:b.delay,overrideKey:b.overrideKey,paper:f,count:1,complete:!1,playhead:0,setTimeOutHandler:[]})}})},paint:function(){return this.each(function(){var c=e(this),
        a=c.data("lazyLinePainter"),b=function(){c.css({width:a.width,height:a.height});e.each(a.svgData,function(b,f){var e=a.paper.path(f.path);e.attr({stroke:"none","stroke-width":a.strokeWidth,"fill-opacity":0});var g=setTimeout(function(){n({count:a.count,canvas:a.paper,pathstr:e,duration:f.duration,attr:m(a,f),callback:function(b){a.setTimeOutHandler.splice(a.count,1);a.count++;a.svgData.length+1==a.count&&(a.complete=!0,null!==a.onComplete&&a.onComplete.call(c))}})},a.playhead);a.playhead+=f.duration;
            a.setTimeOutHandler.push(g)})};null===a.delay?b():setTimeout(b,a.delay)})},erase:function(){return this.each(function(){var c=e(this);c.find("svg").empty();d=c.data("lazyLinePainter");for(i=0;i<d.setTimeOutHandler.length;i++)clearTimeout(d.setTimeOutHandler[i]);d.playhead=0;d.count=0;d.complete=!1})},destroy:function(){return this.each(function(){var c=e(this);c.data("lazyLinePainter");c.removeData("lazyLinePainter");c.remove()})},stamp:function(){return this.each(function(){var c=e(this),a=c.data("lazyLinePainter"),
        b=function(){c.css({width:a.width,height:a.height});for(i=0;i<a.svgData.length;i++)a.paper.path(a.svgData[i].path).attr(m(a,a.svgData[i]))};null===a.delay?b():setTimeout(b,a.delay)})}},m=function(c,a){return{stroke:a.strokeColor?a.strokeColor:c.strokeColor,"fill-opacity":0,"stroke-dasharray":a.strokeDash?a.strokeDash:c.strokeDash,"stroke-opacity":a.strokeOpacity?a.strokeOpacity:c.strokeOpacity,"stroke-width":a.strokeWidth?a.strokeWidth:c.strokeWidth,"stroke-linecap":a.strokeCap?a.strokeCap:c.strokeCap,
        "stroke-linejoin":a.strokeJoin?a.strokeJoin:c.strokeJoin}},n=function(c){var a=c.canvas,b=c.pathstr,e=c.duration,f=c.attr,k=c.callback,g;g="string"==typeof b?a.path(b).attr({stroke:"none",fill:"none"}):b;var l=a.path(g.getSubpath(0,1)).attr(f),m=g.getTotalLength(g);g.getPointAtLength(0);var n=(new Date).getTime(),q=setInterval(function(){var a=(new Date).getTime()-n,b=g.getSubpath(0,a/e*m);f.path=b;l.animate(f,25);a>=e&&(clearInterval(q),k!==p&&k(),g.remove())},25)};e.fn.lazylinepainter=function(c){if(l[c])return l[c].apply(this,
        Array.prototype.slice.call(arguments,1));if("object"===typeof c||!c)return l.init.apply(this,arguments)}})(jQuery,window);
</script>


