<script>
	import Carousel from '../components/carousel.svelte';
	import HomeImages from '../components/home-images.svelte';
	import HomeReviews from '../components/home-reviews.svelte';
	import LinkButton from '../components/link-button.svelte';
</script>

<section class="splash">
	<div class="desktop">
		<div class="desktop-side">
			<h1>
				Science-backed<br />
				skincare,<br />
				<span>for</span> lasting beauty.
			</h1>
			<div class="link-container">
				<LinkButton text="MAKE AN APPOINTMENT" />
			</div>
		</div>
		<div class="desktop-img-container">
			<img
				class="main desktop"
				src="src/public/images/main-splash-desktop.png"
				alt="person receiving rose facial treatment"
			/>
		</div>
	</div>
	<img
		class="main mobile"
		src="src/public/images/main-splash.png"
		alt="person receiving rose facial treatment"
	/>

	<img class="bg" src="src/public/images/about-circles.png" alt="dotted brown circle underlay" />
</section>

<section class="section-two">
	<h2>
		Experience results-driven skincare, aesthetics and beaut<br /> designed for every complexion.
	</h2>
	<div class="img-wrapper">
		<div class="img-item">
			<img src="src/public/images/homeicon-science.svg" alt="" />
			<div>Scientifically proven & dermatologist-developed</div>
		</div>
		<div class="img-item">
			<img src="src/public/images/homeicon-heart.svg" alt="" />
			<div>Treatments for all skin types</div>
		</div>
		<div class="img-item">
			<img src="src/public/images/homeicon-smile.svg" alt="" />
			<div>Promoting skincare and self-confidence</div>
		</div>
	</div>
	<div class="link-container__section-two">
		<LinkButton text="MAKE AN APPOINTMENT" />
	</div>
</section>

<HomeImages />
<section class="carousel">
	<h2 class="carousel-header">Whatever your skin needs, we've got the facial for it.</h2>
	<div class="carousel-mobile">
		<Carousel
			images={[
				'src/public/images/home-carousel-1.png',
				'src/public/images/home-carousel-2.png',
				'src/public/images/home-carousel-3.png',
				'src/public/images/home-carousel-4.png'
			]}
		/>
	</div>

	<div class="carousel-desktop">
		<Carousel
			images={[
				'src/public/images/home-carousel-desktop-1.png',
				'src/public/images/home-carousel-desktop-2.png',
				'src/public/images/home-carousel-desktop-3.png',
				'src/public/images/home-carousel-desktop-4.png'
			]}
		/>
	</div>
</section>
<HomeReviews />

<style>
	.splash {
		height: 610px;
		margin-top: 30px;
		position: relative;
	}
	.main {
		position: absolute;
		z-index: 2;
		pointer-events: none;
		left: 50%;
		transform: translateX(-50%);
	}

	.splash img.bg {
		position: absolute;
		bottom: 0;
		right: -16px;
		z-index: 1;
		pointer-events: none;
		transform: rotateY(180deg);
	}
	h2 {
		font-weight: 400;
		line-height: normal;
		text-align: center;
	}
	.img-wrapper {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: 2rem auto;
		padding: 0 30px;
		max-width: 1000px;
	}

	.img-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.img-item img {
		width: 40px;
		height: auto;
	}

	div.img-item {
		font-family: 'Poppins', sans-serif;
		font-size: 16px;
		line-height: normal;
		letter-spacing: -0.304px;
		text-align: left;
	}
	.section-two {
		text-align: center;
	}

	h2 {
		text-transform: none;
	}
	.desktop {
		height: 600px;
		display: flex;
		margin: 0 auto;
	}

	.desktop-side {
		/* position: absolute;
		left: 0; */
		display: flex;
		flex-direction: column;
		gap: 50px;
		justify-content: center;
	}

	.desktop-img-container {
		/* position: absolute;
		display: block;
		right: -16px;
		top: -22px; */
		width: clamp(40vw, 50vw, 60vw);
		height: 100%;
		overflow: hidden;
	}
	.link-container {
		margin: 0 auto;
	}
	@media (min-width: 768px) {
		.mobile {
			display: none;
		}

		.splash {
			display: flex;
			margin: 0 auto;
		}
		.splash img.bg {
			position: absolute;
			top: 0;
			left: -66px;
			z-index: 1;
			pointer-events: none;
			transform: rotateY(0deg);
		}
		.main {
			position: relative;
		}

		.section-two {
			margin-left: -20px;
			margin-right: -20px;
			background-color: white;
			margin-bottom: 50px;
			padding: 40px 0;
		}
		.img-wrapper {
			flex-direction: row;
		}
		.link-container__section-two {
			display: none;
		}
		.carousel-mobile {
			display: none;
		}

		.carousel-header {
			text-transform: none;
			margin-left: -20px;
			margin-right: -20px;
			background-color: white;
			padding: 40px 0;
		}
	}
	@media (max-width: 768px) {
		.desktop {
			display: none;
		}
		.carousel-desktop {
			display: none;
		}
	}
</style>
