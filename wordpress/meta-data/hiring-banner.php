<?php
function hiring_banner_metabox()
{
    add_meta_box(
        'hiring_banner',
        'Hiring Banner',
        'hiring_banner_metabox_callback',
        'page',
        'advanced',
        'default'
    );
}

add_action('add_meta_boxes', 'hiring_banner_metabox');

function hiring_banner_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'page_nonce');
    $title = get_post_meta($post->ID, 'hiring_banner_title', true);
    $content = get_post_meta($post->ID, 'hiring_banner_content', true);
    ?>
    <table class="table">
        <tr>
            <td>Title</td>
            <td>
                <input type="text" name="hiring_banner_title" id="hiring_banner_title"
                    value="<?php echo esc_attr($title); ?>"><br>
            </td>
        </tr>
        ​
        <tr>
            <td>Content</td>
            <td>
                <input type="text" name="hiring_banner_content" id="hiring_banner_content"
                    value="<?php echo esc_attr($content); ?>">
            </td>
        </tr>
    </table>
    <?php
}
add_action("save_post", "hiring_banner_save_metadata", 10, 2);

function hiring_banner_save_metadata($post_id, $post)
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
    $title = '';
    $content = '';

    if (isset($_POST['hiring_banner_title'])) {
        $title = sanitize_text_field($_POST['hiring_banner_title']);
    }

    if (isset($_POST['hiring_banner_content'])) {
        $content = sanitize_text_field($_POST['hiring_banner_content']);
    }

    update_post_meta($post_id, "hiring_banner_title", $title);
    update_post_meta($post_id, "hiring_banner_content", $content);
} {

}
?>