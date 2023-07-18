<?php
$title = get_post_meta(get_the_ID(), "hiring_banner_title", true);
$content = get_post_meta(get_the_ID(), "hiring_banner_content", true);
?>
<section class="hiringBanner bg-blush">
    <div class="container py-10 py-md-20">
        <div class="col-12">
            <h3 class="fw-normal mb-2 mb-xl-4">
                <?php echo $title; ?>
            </h3>
            <p class="body-xl mb-6 mb-xl-10">
                <?php echo $content; ?>
            </p>
            <a href="blog-listing.html" class="btn btn-primary">
                See Our Blogs
                <i class="icon-arrow-right ps-2"></i>
            </a>
        </div>
    </div>
</section>