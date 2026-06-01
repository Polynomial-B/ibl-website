<script>
	import Carousel from '../components/carousel.svelte';
	import HomeImages from '../components/home-images.svelte';
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
				src="/images/main-splash-desktop.png"
				alt="person receiving rose facial treatment"
			/>
		</div>
	</div>
	<img
		class="main mobile"
		src="/images/main-splash.png"
		alt="person receiving rose facial treatment"
	/>

	<img class="bg" src="/images/about-circles.png" alt="dotted brown circle underlay" />
</section>

<section class="section-two">
	<h2>
		Experience results-driven skincare, aesthetics and beauty<br /> designed for every complexion.
	</h2>
	<div class="img-wrapper">
		<div class="img-item">
			<img src="/images/homeicon-science.svg" alt="" />
			<div>Scientifically proven & dermatologist-developed</div>
		</div>
		<div class="img-item">
			<img src="/images/homeicon-heart.svg" alt="" />
			<div>Treatments for all skin types</div>
		</div>
		<div class="img-item">
			<img src="/images/homeicon-smile.svg" alt="" />
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
				'/images/home-carousel-1.png',
				'/images/home-carousel-2.png',
				'/images/home-carousel-3.png',
				'/images/home-carousel-4.png'
			]}
		/>
	</div>

	<div class="carousel-desktop">
		<Carousel
			images={[
				'/images/home-carousel-desktop-1.png',
				'/images/home-carousel-desktop-2.png',
				'/images/home-carousel-desktop-3.png',
				'/images/home-carousel-desktop-4.png'
			]}
		/>
	</div>
</section>

<!-- <HomeReviews slideNumber /> -->

<style>
	.splash {
		height: 610px;
		margin-top: 30px;
		position: relative;
	}

	.mobile {
		width: 360px;
	}
	.main {
		position: absolute;
		z-index: 2;
		pointer-events: none;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 0 0 400px 400px;
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
		height: 550px;
		display: flex;
		margin: 0 auto;
		object-fit: cover;
	}

	.desktop-side {
		display: flex;
		flex-direction: column;
		gap: 50px;
		justify-content: center;
	}

	.desktop-side h1 {
		font-size: clamp(38px, 5vw, 46px);
		max-width: 322px;
		min-width: 318px;
	}

	.desktop-img-container {
		height: 100%;
		overflow: hidden;
	}
	.link-container {
		margin: 0 auto;
	}
	@media (min-width: 769px) {
		.mobile {
			display: none;
		}

		.splash {
			display: flex;
			margin: 0 auto;
		}
		.splash img.bg {
			bottom: 40px;
			right: -90px;
			transform: rotate(30deg);
		}
		.main {
			position: relative;
		}

		.desktop {
			max-width: 800px;
		}

		.section-two {
			background-color: white;
			padding: 40px 0;
			margin: 20px auto 50px;
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
