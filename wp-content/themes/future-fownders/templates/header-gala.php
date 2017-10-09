<nav class="transparent absolute z-depth-0">
    <div class="nav-wrapper">
        <a href="<?= esc_url(home_url('/')); ?>" class="brand-logo">
            <img src="http://www.fownders.co/hubfs/Fownders%20Logos/FF%20logo%20blue.svg" alt="logo" class="white-logo responsive-img nav-logo" width="75" height="75" >
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="logo" class="color-logo hide responsive-img nav-logo" >
        </a>
        <ul class="right hide-on-med-and-down">
            <li><a href="https://app.fownders.com/" class="btn cta-org">Purchase</a></li>
        </ul>
<!--        --><?php
//        if (has_nav_menu('primary_navigation')) :
//            wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'right hide-on-med-and-down']);
//        else:
//
//        endif;
//        ?>

        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>

<!--        --><?php
//        if (has_nav_menu('primary_navigation')) :
//            wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'side-nav black','menu_id' => 'mobile-demo']);
//        else:
//
//        endif;
//        ?>

    </div>
</nav>