<?php
/**
 * Created by PhpStorm.
 * User: tayloremolo
 * Date: 10/10/17
 * Time: 11:25 AM
 */
?>

<div style="background-image:url(http://www.fownders.co/hubfs/bg-gala.png);background-size:cover;height:auto;background-repeat:no-repeat;background-position: center;padding:0;">
    <div class="row p-40">
        <br><br><br>
        <div class="col s3 center-align">
            <br><br><br>
            <?php echo do_shortcode('[accept_stripe_payment name="Future Fownders" price="25" currency="USD" quantity="0" button_text="Donate $25" class="btn-large cta-org"]') ?>
        </div>
        <div class="col s3 center-align">
            <br><br><br>
            <?php echo do_shortcode('[accept_stripe_payment name="Future Fownders" price="50" currency="USD" quantity="0" button_text="Donate $50" class="btn-large cta-org"]') ?>
        </div>
        <div class="col s3 center-align">
            <br><br><br>
            <?php echo do_shortcode('[accept_stripe_payment name="Future Fownders" price="100" currency="USD" quantity="0" button_text="Donate $100" class="btn-large cta-org"]') ?>
        </div>
        <div class="col s3 left-align">
            <?php echo do_shortcode('[accept_stripe_payment name="Future Fownders" price="0" currency="USD" quantity="0" button_text="Enter Amount" class="btn-large cta-org"]') ?>
            <br><br><br><br><br><br>
        </div>
    </div>
</div>