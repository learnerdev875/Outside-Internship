<?php
/**
 * hello_world functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package hello_world
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function hello_world_setup()
{
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on hello_world, use a find and replace
	 * to change 'hello_world' to the name of your theme in all the template files.
	 */
	load_theme_textdomain('hello_world', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support('title-tag');

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support('post-thumbnails');


	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'hello_world_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */


}
add_action('after_setup_theme', 'hello_world_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function hello_world_content_width()
{
	$GLOBALS['content_width'] = apply_filters('hello_world_content_width', 640);
}
add_action('after_setup_theme', 'hello_world_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function hello_world_widgets_init()
{
	register_sidebar(
		array(
			'name' => esc_html__('Sidebar', 'hello_world'),
			'id' => 'sidebar-1',
			'description' => esc_html__('Add widgets here.', 'hello_world'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget' => '</section>',
			'before_title' => '<h2 class="widget-title">',
			'after_title' => '</h2>',
		)
	);
}
add_action('widgets_init', 'hello_world_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function hello_world_styles()
{
	wp_enqueue_style('hello_world-style', get_stylesheet_uri(), array(), _S_VERSION);
	//enqueing custom css 
	$version = wp_get_theme()->get('Version');
	wp_enqueue_style('custom-style', get_template_directory_uri() . '/styles/custom.css', array(), $version, 'all');
	wp_enqueue_style('fontawesome-style', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'hello_world_styles');

function hello_world_scripts()
{
	wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
	wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/app.js', array(), '1.0', true);
	wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/jquery.sticky.js', array(), '1.0', true);
	wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/pushy.js', array(), '1.0', true);
	wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/modal.js', array(), '1.0', true);

	wp_enqueue_script('my-ajax-form', get_template_directory_uri() . '/js/ajax-filter.js', array('jquery'), '1.0', true);

	wp_localize_script('my-ajax-form', 'my_ajax_form', array('ajaxurl' => admin_url('admin-ajax.php')));
}
add_action('wp_enqueue_scripts', 'hello_world_scripts');

/**
 * Implement the Custom Header feature.
 */
// require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Custom menus
 */
function hello_world_menus()
{
	$locations = array(
		'primary' => 'Top Nav Menu',
		'footer' => 'Footer Menu Items'
	);
	register_nav_menus($locations);
}

add_action('init', 'hello_world_menus');

function load_metabox_admin_styles()
{
	wp_enqueue_script('metabox-js', get_template_directory_uri() . '/js/meta-box.js', array('jquery'), '', false);
	wp_enqueue_style('metabox-style', get_template_directory_uri() . '/styles/meta-box.css');
}
add_action('admin_enqueue_scripts', 'load_metabox_admin_styles');

require get_template_directory() . '/meta-data/hero-meta-section-1.php';
require get_template_directory() . '/meta-data/hero-meta-section-2.php';
require get_template_directory() . '/meta-data/hiring-banner.php';

add_action('wp_ajax_my_action_callback', 'my_action_callback');
add_action('wp_ajax_nopriv_my_action_callback', 'my_action_callback');

function renderPosts($args)
{
	$query = new WP_Query($args);
	ob_start();
	if ($query->have_posts()):
		while ($query->have_posts()):
			$query->the_post();
			$img_url = get_the_post_thumbnail_url();
			?>
			<article class="col-12 col-md-6 col-xl-4">
				<div class="blog-card h-100">
					<a href="/single-blog.html">
						<figure class="blog-card__image ratio ratio-4x3">
							<img src="<?php echo $img_url; ?>" alt="" />
						</figure>
						<div class="blog-card__description p-6 pb-md-9 px-xl-10 pb-xl-6">
							<p class="h6 text-uppercase blog-card__date mb-2 mb-xl-4 fw-semibold">
								<?php the_date(); ?>
							</p>
							<p class="h5 fw-normal">
								<?php the_title(); ?>
							</p>
						</div>
					</a>
				</div>
			</article>
			<?php
		endwhile;
	endif;
	wp_reset_postdata();
	$result = ob_get_contents();
	ob_end_clean();
	// echo 'Action performed successfully.';
	$return = array('content' => $result);
	wp_send_json($return);
	wp_die();
}
function my_action_callback()
{
	$term_id = $_POST['term_id'];
	$searchKey = $_POST['search_key'];
	if ($term_id) {
		if ($term_id == 'all') {
			$args = array(
				'post_type' => 'post',
				'post_status' => 'publish',
				'orderby' => 'date',
				'order' => 'DESC',
				'posts_per_page' => get_option('posts_per_page'),
			);
		} else {

			$args = array(
				'post_type' => 'post',
				'post_status' => 'publish',
				'orderby' => 'date',
				'order' => 'DESC',
				'posts_per_page' => get_option('posts_per_page'),
				'tax_query' => array(
					array(
						'taxonomy' => 'category',
						'field' => 'term_id',
						'terms' => $term_id,
					),
				),
			);
		}
		renderPosts(($args));

	}

	if ($searchKey) {
		$args = array(
			'post_type' => 'post',
			'post_status' => 'publish',
			'orderby' => 'date',
			'order' => 'DESC',
			'posts_per_page' => get_option('posts_per_page'),
			's' => $searchKey
		);
		renderPosts($args);

	} else {
		$args = array(
			'post_type' => 'post',
			'post_status' => 'publish',
			'orderby' => 'date',
			'order' => 'DESC',
			'posts_per_page' => get_option('posts_per_page'),
		);
		renderPosts(($args));

	}
}
?>