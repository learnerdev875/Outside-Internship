<?php
get_header();
?>

<main>
    <section class="leadspace bg-blush">
        <div class="container py-8 py-md-10 py-xl-20">
            <?php
            get_template_part('/template-parts/hero-section', 1);
            get_template_part('/template-parts/hero-section', 2);
            ?>
        </div>
    </section>
    <section>
        <?php
        get_template_part('/template-parts/filter');
        ?>

    </section>

    <?php
    get_template_part('/template-parts/hiring-banner');
    ?>

</main>
<?php
get_footer();
?>