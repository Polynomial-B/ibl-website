<script lang="ts">
	let { images } = $props();

	let index = $state(0);

	let startX = 0;
	let currentX = $state(0);
	let dragging = $state(false);

	// let startX!: number;
	// let currentX!: number;
	// let dragging!: boolean;

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
		index = (index + 1) % images.length;
	}

	function prev() {
		index = (index - 1 + images.length) % images.length;
	}
</script>

<div
	class="carousel"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointerleave={onPointerUp}
	ontouchstart={onPointerDown}
	ontouchmove={onPointerMove}
	ontouchend={onPointerUp}
>
	<button class="arrow left" onclick={prev} aria-label="Previous image"> ‹ </button>

	<button class="arrow right" onclick={next} aria-label="Next image"> › </button>

	<div
		class="track"
		style="transform: translateX(calc(-{index * 100}% + {dragging ? currentX : 0}px));"
	>
		{#each images as img}
			<div class="slide">
				<img src={img} alt="" />
			</div>
		{/each}
	</div>
</div>

<div class="dots">
	{#each images as _, i}
		<button
			aria-label="image navigation buttons"
			class="dot {i === index ? 'active' : ''}"
			onclick={() => (index = i)}
		></button>
	{/each}
</div>

<style>
	.carousel {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 469px;
		touch-action: pan-y;
		height: 469px;
	}

	.track {
		display: flex;
		transition: transform 0.35s ease;
		height: 100%;
	}

	.slide {
		min-width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
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

	@media (min-width: 768px) {
		.carousel {
			height: auto;
			max-height: 994px;
		}

		.slide {
			max-width: 1438px;
			margin: 0 auto;
		}

		img {
			max-width: 1438px;
			max-height: 994px;
			object-fit: cover;
		}
		.arrow {
			display: flex;
			align-items: center;
			justify-content: center;

			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			width: 44px;
			height: 44px;
			border-radius: 50%;
			border: none;

			background: rgba(255, 255, 255, 0.9);
			color: #111;
			font-size: 28px;
			cursor: pointer;
			z-index: 2;

			transition:
				background 0.2s,
				transform 0.2s;
		}

		.arrow:hover {
			background: white;
			transform: translateY(-50%) scale(1.05);
		}

		.arrow.left {
			left: 16px;
		}
	}
</style>
