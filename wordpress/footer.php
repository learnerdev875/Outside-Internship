<footer class="footer">
	<a href="index.html" class="footer_logo_link">
		<?php
		$footer_logo = get_theme_mod('footer_logo');
		$img_url = wp_get_attachment_url($footer_logo);
		?>
		<img src='<?php echo $img_url ?>' alt='Footer logo' class='footer_logo' />
	</a>
	<?php
	wp_nav_menu(
		array(
			'menu' => 'footer',
			'container' => '',
			'theme_location' => 'footer',
			'items_wrap' => '<ul class="footer_menus">%3$s</ul>'
		)
	)
		?>
	<p class="footer_copyright_text">
		<?php echo get_theme_mod('copyright_text'); ?>
	</p>
</footer>
<?php
wp_footer();
?>
</body>

</html>