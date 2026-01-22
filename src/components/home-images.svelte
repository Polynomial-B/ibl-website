<script lang="ts">
</script>

{#snippet image(img: string, alt: string, title: string, textbold: string, textbody: string)}
	<article class="container">
		<img src="src/public/images/{img}" {alt} />
		<div class="img-text">
			<h2>{title}</h2>

			<span>{textbold}</span><br />
			{textbody}
		</div>
	</article>
{/snippet}

<section>
	{@render image(
		'home-ampules.png',
		'assorted ampules',
		'Aesthetics',
		'Subtle tweaks. Powerful results.',
		'Skin boosters, anti-wrinkle, fillers, polynucleotides'
	)}
	{@render image(
		'home-facemask.png',
		'lady with facemask lying down',
		'Beauty',
		'All the finishing touches.',
		'Brows, lashes, waxing and glow-up essentials.'
	)}
	{@render image(
		'home-medik8.png',
		'bottle with pipette balanced on top',
		'Advanced Skincare',
		'Where science meets skin.',
		'Medical-grade facials, skin peels, hydro-treatments and Korean skincare.'
	)}

	<img class="bg-top" src="src/public/images/home-circle-full.png" alt="brown dotted circle" />
	<img class="bg-middle" src="src/public/images/home-circle-full.png" alt="brown dotted circle" />
	<img class="bg-bottom" src="src/public/images/home-circle-full.png" alt="brown dotted circle" />
</section>

<style>
	h2 {
		font-size: 28px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 103px;
		margin-bottom: 198px;
		position: relative;
	}

	.container {
		position: relative;
		z-index: 2;
		text-align: center;
		margin: 0 auto;
		display: inline-block;
		width: 310px;
		text-align: center;
	}
	img {
		display: block;
		border-radius: 150px 150px 0 0;
		pointer-events: none;
	}

	.img-text {
		padding: 0 22px 18px;
		background-color: rgb(255, 255, 255);
		text-align: center;
		width: 100%;
		text-wrap: balance;
	}

	span {
		font-weight: 700;
	}

	.bg-bottom,
	.bg-middle,
	.bg-top {
		position: absolute;
		z-index: 1;
		pointer-events: none;
	}

	.bg-bottom {
		transform: scaleX(-1);
		bottom: -100px;
		right: -10px;
	}

	.bg-middle {
		transform: scaleY(-1);
		top: 870px;
		left: 12vw;
	}

	.bg-top {
		top: 133px;
		left: -15px;
	}

	@media (min-width: 1024px) {
		section {
			flex-direction: row;
			gap: 0px;
		}
		.container {
			padding: 0;
		}
	}
</style>
