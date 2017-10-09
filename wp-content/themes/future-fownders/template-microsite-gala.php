<?php
/**
 * Template Name: Gala Template
 */
?>

<?php while (have_posts()) : the_post(); ?>

<!--    --><?php //get_template_part('templates/gala/homepage-header-gala'); ?>
<!--    --><?php //get_template_part('templates/gala/header'); ?>
    <?php get_template_part('templates/gala/homepage-header-gala'); ?>

<?php endwhile; ?>




<?php //while (have_posts()) : the_post(); ?>
<!--    --><?php //get_template_part('templates/page', 'header'); ?>
<!--    --><?php //get_template_part('templates/content', 'page'); ?>
<?php //endwhile; ?>
