<script lang="ts">
	let { src, alt } = $props();
</script>

<div class="splash">
	<img class="main" {src} {alt} />
	<img class="bg" src="src/public/images/dotted-circle.png" alt="dotted brown circle underlay" />
</div>

<style>
	.splash {
		padding: 50px 10px;
		position: relative;
		height: 450px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.splash img.main {
		position: relative;
		z-index: 2;
		height: 350px;
		border-radius: 150px 150px 0 0;
	}

	.splash img.bg {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
		pointer-events: none;
	}
</style>
