<script lang="ts">
	import LinkButton from './link-button.svelte';

	let { src, alt } = $props();
</script>

<section class="img">
	<LinkButton text="MAKE AN APPOINTMENT" />
	<img class="main" {src} {alt} />
	<img class="bg" src="/images/dotted-circle.png" alt="dotted semicircle" />
</section>

<style>
	.img {
		position: relative;
		text-align: center;
		padding: 20px 0 60px;
	}

	.main {
		display: block;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	.bg {
		position: absolute;
		left: 30px;
		bottom: -50px;
		z-index: 1;
		pointer-events: none;
		z-index: 1;
	}
</style>
