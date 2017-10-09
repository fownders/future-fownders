<?php
/**
 * Created by PhpStorm.
 * User: tayloremolo
 * Date: 10/3/17
 * Time: 11:49 AM
 */
?>
<nav class="transparent z-depth-0">
    <div class="gala-nav nav-wrapper transparent">
        <div class="white row m0" style="height:40px;">
            <div class="col s12" style="height:40px;">
                <div class="container" style="height:40px;">
                    <a href="<?= esc_url(home_url('/')); ?>" class="brand-logo fownders-logo"><img src="https://app.fownders.com/images/logo.png" alt="Fownders Logo" class="white-logo responsive-img nav-logo" width="125" height="25"></a>
                    <div class="mobile mobile-ham hide-on-large-only">
                        <div class="ham"><img src="http://svgshare.com/i/3GB.svg" alt="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <a href="<?= esc_url(home_url('/')); ?>" class="brand-logo" alt="Future Fownders Logo"><img src="http://www.fownders.co/hubfs/future-fownders-logo-white.png" alt="Future Fownders Logo" class="white-logo responsive-img nav-logo" width="75"></a>
            <ul class="right hide-on-med-and-down gala">
                <li><a target="_self" class="white-text gala-link" href="http://future-fownders.dev/our-event/">Our Event</a></li>
                <li><a target="_self" class="white-text gala-link" href="http://future-fownders.dev/registration/">Registration</a></li>
                <li><a target="_self" class="white-text gala-link" href="http://future-fownders.dev/location/">Location</a></li>
                <li><a target="_self" class="white-text gala-link" href="http://future-fownders.dev/sponsors/">Sponsors</a></li>
                <li><a target="_self" class="white-text cta-blue waves-effect waves-light btn-large dt-donate-btn" href="http://future-fownders.dev/donate/">Donate</a></li>
            </ul>
        </div>
        <ul class="side-nav" id="mobile-demo">
            <!--    <li><a href="https://app.fownders.com/" class="f-14-nav white-text">More about Future Fownders</a></li>-->
            <li><a target="_self" class="white-text" href="http://future-fownders.dev/our-event/">Our Event</a></li>
            <li><a target="_self" class="white-text" href="http://future-fownders.dev/registration/">Registration</a></li>
            <li><a target="_self" class="white-text" href="http://future-fownders.dev/location/">Location</a></li>
            <li><a target="_self" class="white-text" href="http://future-fownders.dev/sponsors/">Sponsors</a></li>
            <li><a target="_self" class="white-text" href="http://future-fownders.dev/sponsors/">Donate</a></li>
        </ul>
    </div>
</nav>

<div class="row mobile-menu mobile">
    <div class="cross"><img src="http://svgshare.com/i/3FD.svg" alt=""></div>
    <ul>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/our-event/">Our Event</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/registration/">Registration</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/location/">Location</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/sponsors/">Sponsors</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/sponsors/">Donate</a></li>
    </ul>
</div>

<a target="_self" class="cta-blue waves-effect waves-light btn-large white-text hide-on-large-only mobile-donate-btn" href="http://future-fownders.dev/sponsors/">Donate</a>