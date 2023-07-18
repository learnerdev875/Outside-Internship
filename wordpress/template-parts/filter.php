<section class="more-blogs">
    <div class="container pt-10 pt-md-20 pt-xl-120">
        <h2 class="h6 text-uppercase fw-semibold mb-10 mb-md-20">more blog notes</h2>
        <div class="more-blogs__category d-md-flex align-items-center">
            <p class="body mb-7 mb-md-0">Category:</p>
            <div class="more-blogs__category-links">
                <?php
                $terms = get_terms(
                    'category',
                    array(
                        'hide_empty' => true
                    )
                );
                ?>
                <ul class="text-uppercase d-flex flex-wrap ps-0 mb-0">
                    <?php
                    if (isset($terms) && is_array($terms)):

                        foreach ($terms as $term): ?>

                            <li id="<?php echo $term->term_id; ?>" class="h6 mb-0 fw-semibold pe-6 category"><?php echo $term->name; ?></li>
                            <?php
                        endforeach;
                    endif;
                    ?>

                </ul>
            </div>
        </div>
        <div class="row gy-10">
            <div class="col-12 col-md-7 col-xl-5">
                <div class="more-blogs__search">
                    <input type="search" class="w-100" name='searchBox' id='searchBox'>
                    <!-- <i class="icon-search"></i> -->
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div class="col-2 offset-7 offset-md-3 offset-xl-5">
                            <div class="dropdown d-flex align-items-center more-blogs__dropdown transform-none">
                                <h4 class="h6 text-uppercase fw-semibold mb-0 ms-auto pe-2">latest</h4>
                                <i class="fa-solid fa-sort-down" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"></i>
                                <ul
                                    class="dropdown-menu bg-mint text-uppercase more-blogs__dropdown__list"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li class="pb-3">
                                        <a class="dropdown-item h6 fw-semibold" href="#">Alphabetical order</a>
                                    </li>
                                    <li class="pb-3 pt-3">
                                        <a class="dropdown-item h6 fw-semibold" href="#">Featured</a>
                                    </li>
                                    <li class="pb-3 pt-3">
                                        <a class="dropdown-item h6 fw-semibold" href="#">Latest</a>
                                    </li>
                                    <li class="pt-3"><a class="dropdown-item h6 fw-semibold" href="#">oldest</a></li>
                                </ul>
                            </div>
                        </div>
            <div class="row gx-10 gy-10 gy-md-20 mb-6 mb-md-20 container-wrapper">
                <?php
                $paged = get_query_var( 'page' )?get_query_var('page'):1;
                $args = array(
                    'post_type' => 'post',
                    'post_status' => 'publish',
                    'orderby' => 'date',
                    'order' => 'ASC',
                    'posts_per_page' =>3,
                    'page'=>$paged
                );
                $query = new WP_Query($args);
                if ($query->have_posts()):
                    while ($query->have_posts()):
                        $query->the_post();
                        $img_url = get_the_post_thumbnail_url();
                        $date = get_the_date();
                        ?>
                        <article class="col-12 col-md-6 col-xl-4">
                            <div class="blog-card h-100">
                                <a href="<?php the_permalink();?>">
                                    <figure class="blog-card__image ratio ratio-4x3">
                                        <img src="<?php echo $img_url; ?>" alt="" />
                                    </figure>
                                    <div class="blog-card__description p-6 pb-md-9 px-xl-10 pb-xl-6">
                                        <p class="h6 text-uppercase blog-card__date mb-2 mb-xl-4 fw-semibold"><?php echo $date; ?></p>
                                        <p class="h5 fw-normal">
                                            <?php the_title(); ?>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </article>
                        <?php
                    endwhile;
                    // previous_posts_link(); 
                    // next_posts_link('Next Page',$query->max_num_pages); 
                    // echo $query->max_num_pages;

                    echo paginate_links(array(
                        'total'=>$query->max_num_pages
                    ));
                endif;
                wp_reset_postdata();
                ?>

            </div>
            
        </div>
</section>
