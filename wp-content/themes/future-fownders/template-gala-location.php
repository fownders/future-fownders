<?php
/**
 * Template Name: Gala-Location Template
 */
?>

<?php while (have_posts()) : the_post(); ?>

    <?php get_template_part('templates/gala/header'); ?>
    <?php get_template_part('templates/gala/page-header'); ?>
    <?php get_template_part('templates/gala/content-location'); ?>

<?php endwhile; ?>