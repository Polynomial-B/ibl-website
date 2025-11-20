<script>
	// Props
	let { images } = $props();

	let index = $state(0);

	function next() {
		index = (index + 1) % images.length;
	}

	function prev() {
		index = (index - 1 + images.length) % images.length;
	}
</script>

<div class="carousel">
	<div class="track" style="transform: translateX(-{index * 100}%);">
		{#each images as img}
			<div class="slide">
				<img src={img} alt="" />
			</div>
		{/each}
	</div>

	<button class="prev" onclick={prev}>‹</button>
	<button class="next" onclick={next}>›</button>
</div>

<style>
	.carousel {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 300px;
	}

	.track {
		display: flex;
		transition: transform 0.4s ease;
		height: 100%;
	}

	.slide {
		min-width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.prev,
	.next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.4);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-size: 2rem;
		z-index: 10;
	}

	.prev {
		left: 10px;
	}
	.next {
		right: 10px;
	}
</style>
