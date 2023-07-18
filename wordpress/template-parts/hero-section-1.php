<?php
$image1 = get_post_meta(get_the_ID(), "hero_image1", true);
$image2 = get_post_meta(get_the_ID(), "hero_image2", true);
?>

<div class="row pb-6 pb-md-10 pb-xl-16">
    <div class="col-12 col-md-5">
        <figure class="w-100 ratio ratio-394x287 h-100">
            <img src="<?php echo $image1; ?>" alt="Hero Image 1" class="leadspace__image--1" />
        </figure>
    </div>
    <div class="col-md-7 d-none d-md-block">
        <figure class="ratio ratio-509x287 h-100">
            <img src="<?php echo $image2 ?>" alt="Hero Image 2" class="leadspace__image--2" />
        </figure>
    </div>
</div>