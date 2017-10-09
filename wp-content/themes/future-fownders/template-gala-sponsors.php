<?php
/**
 * Template Name: Gala-Sponsors Template
 */
?>

<?php while (have_posts()) : the_post(); ?>

    <?php get_template_part('templates/gala/header'); ?>
    <?php get_template_part('templates/gala/page-header'); ?>
    <?php get_template_part('templates/gala/content-sponsors'); ?>

<?php endwhile; ?>