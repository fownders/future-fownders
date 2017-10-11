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
                    <a href="https://app.fownders.com/" target="_blank" class="brand-logo fownders-logo"><img src="https://app.fownders.com/images/logo.png" alt="Fownders Logo" class="white-logo responsive-img nav-logo" width="125" height="25"></a>
<!--                    <a href="--><?//= esc_url(home_url('/')); ?><!--" class="brand-logo fownders-logo"><img src="https://app.fownders.com/images/logo.png" alt="Fownders Logo" class="white-logo responsive-img nav-logo" width="125" height="25"></a>-->
                    <div class="mobile mobile-ham hide-on-large-only">
                        <div class="ham"><img src="http://svgshare.com/i/3GB.svg" alt="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <a href="<?= esc_url(home_url('/')); ?>" class="brand-logo" alt="Future Fownders Logo"><img src="http://www.fownders.co/hubfs/future-fownders-logo-white.png" alt="Future Fownders Logo" class="white-logo responsive-img nav-logo" width="100"></a>
            <ul class="right hide-on-med-and-down gala">
                <li><a target="_self" class="nav-blue gala-link" href="http://future-fownders.dev/our-event/">Our Event</a></li>
                <li><a target="_self" class="nav-blue gala-link" href="http://future-fownders.dev/registration/">Registration</a></li>
                <li><a target="_self" class="nav-blue gala-link" href="http://future-fownders.dev/location/">Location</a></li>
                <li><a target="_self" class="nav-blue gala-link" href="http://future-fownders.dev/sponsors/">Sponsorship</a></li>
                <li><a target="_self" class="nav-blue gala-link" href="http://future-fownders.dev/tickets/">Tickets</a></li>
                <li><a target="_self" class="white-text cta-blue waves-effect waves-light btn-large dt-donate-btn" href="http://future-fownders.dev/stripe-checkout-result/">Donate</a></li>
            </ul>
        </div>
<!--        <ul class="side-nav" id="mobile-demo">-->
<!--            <li><a target="_self" class="white-text" href="http://future-fownders.dev/our-event/">Our Event</a></li>-->
<!--            <li><a target="_self" class="white-text" href="http://future-fownders.dev/registration/">Registration</a></li>-->
<!--            <li><a target="_self" class="white-text" href="http://future-fownders.dev/location/">Location</a></li>-->
<!--            <li><a target="_self" class="white-text" href="http://future-fownders.dev/sponsors/">Sponsorship</a></li>-->
<!--            <li><a target="_self" class="white-text" href="http://future-fownders.dev/stripe-checkout-result/">Donate</a></li>-->
<!--        </ul>-->
    </div>
</nav>

<div class="row mobile-menu mobile">
    <div class="cross">
        <i class="fa fa-times fa-2x brand-text" aria-hidden="true"></i>
<!--        <img src="http://svgshare.com/i/3FD.svg" alt="mobile btn">-->
    </div>
    <ul>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/our-event/">Our Event</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/registration/">Registration</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/location/">Location</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/sponsors/">Sponsorship</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/tickets/">Tickets</a></li>
        <li><a target="_self" class="brand-text" href="http://future-fownders.dev/stripe-checkout-result/">Donate</a></li>
        <hr class="brand-hr">
        <div class="row m0 left-align">
            <div class="col s3 left-align"><a href="https://www.facebook.com/fowndersnewark/"><i class="fa fa-facebook fa-lg brand-text" aria-hidden="true"></i></a></div>
            <div class="col s3"><a href="https://www.instagram.com/fownders/?hl=en"><i class="fa fa-instagram fa-lg brand-text" aria-hidden="true"></i></a></div>
            <div class="col s3"><a href="https://twitter.com/Fownders?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa fa-twitter fa-lg brand-text" aria-hidden="true"></i></a></div>
            <div class="col s3"><a href="https://www.linkedin.com/company-beta/10592196/"><i class="fa fa-linkedin fa-lg brand-text" aria-hidden="true"></i></a></div>
        </div>
    </ul>
    <hr class="brand-hr">
</div>

<a target="_self" class="cta-blue waves-effect waves-light btn-large white-text hide-on-large-only mobile-donate-btn" href="http://future-fownders.dev/stripe-checkout-result/">Donate</a>
