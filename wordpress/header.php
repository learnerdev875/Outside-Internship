<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="description" content="" />
	<meta name="author" content="" />
	<?php
	wp_head();
	?>
</head>

<body>
	<header class="nav-bar">
		<div class="container-fluid">
			<div class="d-flex align-items-center">
				<div class="nav-bar__hamburger-menu">
					<a data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
						<i class="icon-menu"></i>
					</a>
				</div>
				<div class="offcanvas offcanvas-start bg-teal" tabindex="-1" id="offcanvasExample"
					aria-labelledby="offcanvasExampleLabel">
					<div class="offcanvas-header border border-1 border-peach d-flex justify-content-start">
						<?php
						$header_logo = get_theme_mod('header_logo');
						$img_url = wp_get_attachment_url($header_logo);
						?>
						<figure class="order-2"><img src="<?php echo $img_url; ?>" alt="Offcanvas Logo" /></figure>
						<button type="button" class="btn-close text-reset order-1" data-bs-dismiss="offcanvas"
							aria-label="Close"></button>
					</div>
					<div class="offcanvas-body">
						<?php
						wp_nav_menu(
							array(
								'menu' => 'primary',
								'container' => '',
								'theme_location' => 'primary',
								'items_wrap' => '<ul class="offcanvas-body__links text-white text-center">%3$s</ul>'
							)
						)
							?>
					</div>
				</div>
				<a href="index.html" class="navbar-brand ps-9 ps-xl-0">
					<?php
					$header_logo = get_theme_mod('header_logo');
					$img_url = wp_get_attachment_url($header_logo);
					?>
					<img src="<?php echo $img_url; ?>" alt="Logo" class="nav-bar__logo__image" />
				</a>

				<?php
				wp_nav_menu(
					array(
						'menu' => 'primary',
						'container' => '',
						'theme_location' => 'primary',
						'items_wrap' => '<ul class="nav-bar__links h-100">%3$s</ul>'
					)
				)
					?>
				<div class="nav-bar__contact-btn">
					<a href="#" class="btn btn-secondary text-capitalize">join us now</a>
				</div>
			</div>
		</div>
	</header>