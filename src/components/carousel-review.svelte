<script lang="ts">
	let { images, slideNumber } = $props();
	let index = $state(0);
	let startX = 0;
	let currentX = $state(0);
	let dragging = $state(false);

	function onPointerDown(e: any) {
		dragging = true;
		startX = e.clientX ?? e.touches?.[0].clientX;
	}

	function onPointerMove(e: any) {
		if (!dragging) return;
		currentX = (e.clientX ?? e.touches?.[0].clientX) - startX;
	}

	function onPointerUp() {
		if (!dragging) return;
		dragging = false;
		if (currentX < -50) next();
		if (currentX > 50) prev();
		currentX = 0;
	}

	function next() {
		index = Math.min(index + 1, images.length - slideNumber);
	}

	function prev() {
		index = Math.max(index - 1, 0);
	}
</script>

<div
	class="carousel"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointerleave={onPointerUp}
>
	<button class="arrow left" onclick={prev} aria-label="Previous image"
		><img
			src="src/public/images/home-carousel-arrow-left.svg"
			alt="left arrow"
			aria-label="previous image"
		/></button
	>

	<button class="arrow right" onclick={next} aria-label="Next image"
		><img
			src="src/public/images/home-carousel-arrow-right.svg"
			alt="right arrow"
			aria-label="next image"
		/></button
	>

	<div
		class="track"
		style="--slides: {slideNumber};
		transform: translateX(calc(-{index * (100 / slideNumber)}% + {dragging ? currentX : 0}px));"
	>
		{#each images as img}
			<div class="slide">
				<img class="carousel-image" src={img} alt="" />
			</div>
		{/each}
	</div>
</div>

<div class="dots">
	{#each Array(images.length - slideNumber + 1) as _, i}
		<button
			class="dot {i === index ? 'active' : ''}"
			onclick={() => (index = i)}
			aria-label="carousel page"
		></button>
	{/each}
</div>

<style>
	.carousel {
		position: relative;
		overflow: hidden;
		touch-action: pan-y;
		margin: 0 -20px 70px;
	}

	.track {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 100%;
		height: 100%;
		transition: transform 0.35s ease;
	}

	.slide {
		height: 100%;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.dots {
		margin-top: 0.7rem;
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #bbb;
		cursor: pointer;
		transition: background 0.2s;
	}

	.dot.active {
		background: #333;
	}

	.arrow {
		display: none;
	}

	img {
		height: 486px;
	}

	@media (min-width: 768px) {
		.carousel {
			height: 720px;
			margin: 0 auto;
			max-width: 1800px;
		}

		.slide {
			margin: 0 auto;
		}

		img {
			height: 100%;
			gap: 10px;
		}

		.arrow {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			border-radius: 50%;
			border: none;
			background: rgba(255, 255, 255, 0.9);
			color: #111;
			cursor: pointer;
			z-index: 3;
			transition:
				background 0.2s,
				transform 0.2s;
		}

		.arrow:hover {
			background: white;
			transform: translateY(-50%) scale(1.05);
		}

		.arrow.left {
			left: 24px;
		}

		.arrow.right {
			right: 24px;
		}

		.track {
			grid-auto-columns: calc(100% / var(--slides));
		}

		.track img {
			object-fit: contain;
			display: block;
			max-width: 300px;
		}
	}
</style>
