<script lang="ts">
	let { src, alt } = $props();
</script>

<section class="img">
	<button class="book">MAKE AN APPOINTMENT</button>
	<img class="main" {src} {alt} />
	<img class="bg" src="src/public/images/dotted-semi-circle.png" alt="dotted semicircle" />
</section>

<style>
	.img {
		position: relative;
		text-align: center;
		padding: 20px 0 60px;
	}

	.book {
		display: inline-block;
		position: relative;
		color: white;
		padding: 10px 20px;
		border: 2px solid #2ecc71;
		cursor: pointer;
		margin-bottom: 20px;
		font-size: 15px;
		font-weight: 600;
		border: 1px solid #fff;
		background: #819e80;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.17);
		margin-bottom: 40px;
		z-index: 2;
	}

	.main {
		display: block;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	.bg {
		position: absolute;
		left: 0;
		bottom: -50px;
		z-index: 1;
		pointer-events: none;
		left: 50vw;
		transform: translateX(-55vw);
		z-index: 1;
	}
</style>
