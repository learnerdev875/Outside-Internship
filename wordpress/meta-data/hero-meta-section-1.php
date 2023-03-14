<?php
function hero_section1_metabox()
{
    add_meta_box(
        'hero_section1',
        'Hero Section 1',
        'hero_section1_metabox_callback',
        'page',
        'advanced',
        'default'
    );
}

add_action('add_meta_boxes', 'hero_section1_metabox');

function hero_section1_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'page_nonce');
    $hero_image1 = get_post_meta($post->ID, 'hero_image1', true);
    $hero_image2 = get_post_meta($post->ID, 'hero_image2', true);
    ?>
    <table class="table">
        <tr>
            <td>Image 1</td>
            <td>
                <input type="url" name="hero_image1" id="hero_image1" value="<?php echo esc_attr($hero_image1); ?>"><br>
            </td>
            <td><button type="button" class="button" id="image1-btn" data-media-uploader-target="#hero_image1">
                    <?php _e('Upload Image', 'blog-website') ?>
                </button></td>
        </tr>
        ​
        <tr>
            <td>Image 2</td>
            <td>
                <input type="url" name="hero_image2" id="hero_image2" value="<?php echo esc_attr($hero_image2); ?>">
            </td>
            <td><button type="button" class="button" data-media-uploader-target="#hero_image2">
                    <?php _e('Upload Image', 'blog-website') ?>
                </button></td>
        </tr>
    </table>
    <?php
}
add_action("save_post", "hero_section1_save_metadata", 10, 2);

function hero_section1_save_metadata($post_id, $post)
{
    // we have verfied the nonce
    if (!isset($_POST['page_nonce']) || !wp_verify_nonce($_POST['page_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }

    //saving the value to db field
    $hero_image1 = '';
    $hero_image2 = '';

    if (isset($_POST['hero_image1'])) {
        $hero_image1 = sanitize_url($_POST['hero_image1']);
    }

    if (isset($_POST['hero_image2'])) {
        $hero_image2 = sanitize_url($_POST['hero_image2']);
    }

    update_post_meta($post_id, "hero_image1", $hero_image1);
    update_post_meta($post_id, "hero_image2", $hero_image2);
} {

}
?>