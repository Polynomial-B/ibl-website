<script lang="ts">
	import CarouselReview from './carousel-review.svelte';
	let { slideNumber } = $props();
</script>

<section>
	<h1>Real stories, <span>with</span><br /> real results.</h1>
	<div class="mobile-review-carousel">
		<CarouselReview
			slideNumber={1}
			images={[
				'src/public/images/review-9.png',
				'src/public/images/review-11.png',
				'src/public/images/review-12.png',
				'src/public/images/review-13.png',
				'src/public/images/review-14.png',
				'src/public/images/review-16.png',
				'src/public/images/review-17.png',
				'src/public/images/review-19.png',
				'src/public/images/review-21.png',
				'src/public/images/review-22.png'
			]}
		></CarouselReview>
	</div>
	<div class="desktop-review-carousel">
		<CarouselReview
			slideNumber={4}
			images={[
				'src/public/images/review-9.png',
				'src/public/images/review-11.png',
				'src/public/images/review-12.png',
				'src/public/images/review-13.png',
				'src/public/images/review-14.png',
				'src/public/images/review-16.png',
				'src/public/images/review-17.png',
				'src/public/images/review-19.png',
				'src/public/images/review-21.png',
				'src/public/images/review-22.png'
			]}
		></CarouselReview>
	</div>
</section>

<style>
	h1 {
		margin-top: 80px;
		margin-bottom: -40px;
	}

	@media (max-width: 768px) {
		section {
			height: 800px;
		}
		h1 {
			margin-bottom: 80px;
		}
		.desktop-review-carousel {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.mobile-review-carousel {
			display: none;
		}
	}
</style>
