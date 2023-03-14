<?php
function hero_section2_metabox()
{
    add_meta_box(
        'hero_section2',
        'Hero Section 2',
        'hero_section2_metabox_callback',
        'page',
        'advanced',
        'default'
    );
}

add_action('add_meta_boxes', 'hero_section2_metabox');

function hero_section2_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'page_nonce');
    $image = get_post_meta($post->ID, 'hero_image3', true);
    ?>
    <table class="table">
        <tr>
            <td>Image</td>
            <td>
                <input type="url" name="hero_image3" id="hero_image3" value="<?php echo esc_attr($image); ?>"><br>
            </td>
            <td><button type="button" class="button" data-media-uploader-target="#hero_image3">
                    <?php _e('Upload Image', 'blog-website') ?>
                </button></td>
        </tr>
    </table>
    <?php
}
add_action("save_post", "hero_section2_save_metadata", 10, 2);

function hero_section2_save_metadata($post_id, $post)
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
    $hero_image3 = '';

    if (isset($_POST['hero_image3'])) {
        $hero_image3 = sanitize_url($_POST['hero_image3']);
    }

    update_post_meta($post_id, "hero_image3", $hero_image3);
} {

}
?>