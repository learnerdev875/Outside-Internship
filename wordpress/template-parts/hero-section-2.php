<div class="row">
    <div class="col-12 col-xl-8">
        <div class="bg-white leadspace__border__top--sky py-10 px-6 px-md-10 py-xl-20 px-xl-20 @@whiteText">
            <?php
            // Define our WP Query Parameters
            $the_query = new WP_Query(
                array(
                    'posts_per_page' => 1,
                    'p' => 183,
                )
            );
            while ($the_query->have_posts()):
                $the_query->the_post();
                ?>
                <h2 class="fw-normal mb-4">
                    <?php the_title(); ?>
                </h2>
                <p class="body-xl mb-md-6 mb-xl-10">
                    <?php the_content(); ?>
                </p>
                <a href="<?php the_permalink(); ?>" class="btn btn-secondary">
                    Contact Us
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
                <?php
                // Repeat the process and reset once it hits the limit
            endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </div>
    <div class="d-none d-xl-block col-xl-4">
        <?php
        $image = get_post_meta(get_the_ID(), "hero_image3", true);
        ?>
        <figure class="ratio ratio-1x1" style="max-width: 376px">
            <img src="<?php echo $image; ?>" alt="Hero Image 3" />
        </figure>
    </div>
</div>