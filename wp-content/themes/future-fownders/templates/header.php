<nav class="transparent z-depth-0" id="hide-nav">
    <div class="nav-wrapper">
        <div class="container">
            <a href="<?= esc_url(home_url('/')); ?>" class="brand-logo" alt="Future Fownders Logo"><img src="http://www.fownders.co/hubfs/future-fownders-logo-black.png" alt="Future Fownders Logo" class="white-logo responsive-img nav-logo" width="55"></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="https://app.fownders.com/" class="btn cta-org">DONATE</a></li>
            </ul>
        </div>
        <?php
        if (has_nav_menu('primary_navigation')) :
            wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'right hide-on-med-and-down']);
        else:

        endif;
        ?>

        <a href="#" data-activates="mobile-demo" class="button-collapse ff-mobile-btn"><i class="material-icons">menu</i></a>

        <?php
        if (has_nav_menu('primary_navigation')) :
            wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'side-nav black','menu_id' => 'mobile-demo']);
        else:

        endif;
        ?>
    </div>
</nav>