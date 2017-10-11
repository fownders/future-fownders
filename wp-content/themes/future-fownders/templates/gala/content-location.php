<?php
/**
 * Created by PhpStorm.
 * User: tayloremolo
 * Date: 10/4/17
 * Time: 10:50 AM
 */
?>


<div class="container p-40">
    <div class="row mb0">
        <div class="col s12 p0 left-align">
            <h4 class="f-38 brand-text text-uppercase bold-text">Brookside Banquets</h4>
            <div class="brand-solid-border" id="map"></div>
            <br>
            <br>
            <br>
        </div>
    </div>
</div>

<script>
    function initMap() {
        var uluru = {lat: 40.812472, lng: -74.188983};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: uluru,

        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

        var contentString = '<div id="content" class="center-align">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="f-16 brand-text center-align">Brookside Banquets</h3>'+
            '<div id="bodyContent center-align">'+
            '<p> 41 Broughton Avenue <br> Bloomfield, New Jersey 07003'+
            '<br>Website: <a target="_blank" href="http://thebrooksidebanquets.com/">Brookside Banquets</a></p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 180
        });

        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            title: 'Brookside Banquets'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLMAwVhJQz-Ml0FudXzVXklcQLW39uBP8&callback=initMap">
</script>

<style>
    #map {
        width: 100%;
        height: 400px;
        background-color: grey;
    }
</style>
