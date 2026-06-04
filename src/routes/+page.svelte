<script lang="ts">
	import Carousel from '../components/carousel.svelte';
	import HomeImages from '../components/home-images.svelte';
	import LinkButton from '../components/link-button.svelte';

	let desktopLoaded = $state(false);
	let mobileLoaded = $state(false);
</script>

<section class="splash">
	<!-- Background image – now behind everything -->
	<img class="bg" src="/images/about-circles.png" alt="dotted brown circle underlay" />

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
			{#if !desktopLoaded}
				<div class="subtle-placeholder desktop-placeholder"></div>
			{/if}
			<img
				class="main desktop"
				class:loaded={desktopLoaded}
				src="/images/main-splash-desktop.png"
				alt="person receiving rose facial treatment"
				onload={() => (desktopLoaded = true)}
			/>
		</div>
	</div>

	<div class="mobile-wrapper">
		{#if !mobileLoaded}
			<div class="subtle-placeholder mobile-placeholder"></div>
		{/if}
		<img
			class="main mobile"
			class:loaded={mobileLoaded}
			src="/images/main-splash.png"
			alt="person receiving rose facial treatment"
			onload={() => (mobileLoaded = true)}
		/>
	</div>
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

<style>
	.splash {
		height: 610px;
		margin-top: 30px;
		position: relative;
	}

	.splash img.bg {
		position: absolute;
		bottom: 0;
		right: -16px;
		z-index: 0;
		pointer-events: none;
		transform: rotateY(180deg);
	}

	.desktop {
		height: 550px;
		display: flex;
		margin: 0 auto;
		object-fit: cover;
		position: relative;
		z-index: 1;
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
		position: relative;
		flex: 1;
	}

	.main {
		pointer-events: none;
		border-radius: 0 0 400px 400px;
		opacity: 0;
		transition: opacity 0.4s ease-out;
		position: relative;
		z-index: 1;
	}

	.main.loaded {
		opacity: 1;
	}

	.main.desktop {
		width: auto;
		height: 100%;
		object-fit: cover;
	}

	.main.mobile {
		width: 360px;
		height: auto;
	}

	.subtle-placeholder {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 0 0 400px 400px;
		background-color: rgba(0, 0, 0, 0.04);
		backdrop-filter: blur(2px);
		pointer-events: none;
		z-index: 2;
		animation: softPulse 1.8s ease-in-out infinite;
	}

	.desktop-placeholder {
		width: 100%;
		height: 100%;
		border-radius: 0;
		left: 0;
		transform: none;
	}

	.mobile-placeholder {
		width: 360px;
		height: 360px;
	}

	@keyframes softPulse {
		0% {
			background-color: rgba(0, 0, 0, 0.02);
		}
		50% {
			background-color: rgba(0, 0, 0, 0.07);
		}
		100% {
			background-color: rgba(0, 0, 0, 0.02);
		}
	}

	.mobile-wrapper {
		position: relative;
		display: none;
		justify-content: center;
		z-index: 1;
	}

	h2 {
		font-weight: 400;
		line-height: normal;
		text-align: center;
		text-transform: none;
	}

	.img-wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
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

	.link-container {
		margin: 0 auto;
	}

	@media (min-width: 769px) {
		.mobile-wrapper {
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

		.mobile-wrapper {
			display: flex;
		}

		.carousel-desktop {
			display: none;
		}

		.splash {
			height: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
