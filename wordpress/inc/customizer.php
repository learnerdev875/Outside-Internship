<?php
/**
 * hello_world Theme Customizer
 *
 * @package hello_world
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function hello_world_customize_register($wp_customize)
{
	// Global settings
	$wp_customize->add_panel(
		'global_settings',
		array(
			'title' => 'Global Settings',
			'description' => 'Global Settings Panel',
			'priority' => 10,
		)
	);
	// Header Section
	$wp_customize->add_section(
		'header_settings',
		array(
			'title' => 'Header Settings',
			'priority' => 3,
			'panel' => 'global_settings',
		)
	);
	// Settings
	$wp_customize->add_setting('header_logo', []);
	// Control
	$wp_customize->add_control(
		new \WP_Customize_Media_Control(
			$wp_customize,
			'header_logo',
			array(
				'label' => 'Header Logo',
				'description' => 'Preferred size 400px by 80px',
				'section' => 'header_settings',
				'settings' => 'header_logo',
			)
		)
	);
	//Footer Section
	$wp_customize->add_section(
		'footer_settings',
		array(
			'title' => 'Footer Settings',
			'priority' => 4,
			'panel' => 'global_settings',
		)
	);
	$wp_customize->add_setting('footer_logo', []);
	$wp_customize->add_setting('copyright_text', []);
	$wp_customize->add_control(
		new \WP_Customize_Media_Control(
			$wp_customize,
			'footer_logo',
			array(
				'label' => 'Footer Logo',
				'description' => 'Preferred size 400px by 80px',
				'section' => 'footer_settings',
				'settings' => 'footer_logo',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'footer_settings',
			array(
				'label' => 'Copyright Text',
				'section' => 'footer_settings',
				'settings' => 'copyright_text',
				'type' => 'text'
			)
		)
	);
}
add_action('customize_register', 'hello_world_customize_register');

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function hello_world_customize_partial_blogname()
{
	bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function hello_world_customize_partial_blogdescription()
{
	bloginfo('description');
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function hello_world_customize_preview_js()
{
	wp_enqueue_script('hello_world-customizer', get_template_directory_uri() . '/js/customizer.js', array('customize-preview'), _S_VERSION, true);
}
add_action('customize_preview_init', 'hello_world_customize_preview_js');