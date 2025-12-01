<script>
	import Carousel from '../components/carousel.svelte';
	import HomeImages from '../components/home-images.svelte';
	import LinkButton from '../components/link-button.svelte';
</script>

<section class="splash">
	<img
		class="main"
		src="src/public/images/main-splash.png"
		alt="person receiving rose facial treatment"
	/>
	<img class="bg" src="src/public/images/about-circles.png" alt="dotted brown circle underlay" />
</section>

<section class="section-two">
	<h2>Experience results-driven skincare, aesthetics and beauty designed for every complexion.</h2>
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
	<LinkButton text="MAKE AN APPOINTMENT" />
</section>

<HomeImages />

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
</style>
