<script lang="ts">
	import Carousel from '../../components/carousel.svelte';
	const images: string[] = [
		'src/public/images/about-profile.png',
		'src/public/images/about-circles.png',
		'src/public/images/about-profile.png',
		'src/public/images/about-circles.png'
	];
</script>

<section>
	<h1>The face behind <span>the</span> brand</h1>
	<div class="aboutsplash">
		<img class="main" src="src/public/images/about-profile.png" alt="woman smiling" />
		<img class="bg" src="src/public/images/about-circles.png" alt="dotted brown circle underlay" />
	</div>
	<h2>ABOUT ME</h2>
	<p>
		Hi, I’m Jourdain, founder of Inside Beauty London and a passionate skin specialist with nearly
		two decades of hands-on experience in skincare, beauty and advanced aesthetics.
	</p>
	<p>
		My love for skincare runs deep. I’ve spent over 18 years immersed in understanding the skin —
		how it functions, how it responds, and how to treat it with intention, not just intervention.
		From luxury spa environments to advanced clinical settings, I’ve honed my craft through
		thousands of facials and skin treatments, always led by one goal: to help people feel more
		confident and radiant in their own skin.
	</p>
	<p>
		Inside Beauty London is more than a clinic, it’s a space I created for calm, clarity and
		transformation. Whether you’re here for skin confidence, a targeted concern, or some
		well-deserved self-care, you’re in expert hands.
	</p>
	<h2>MY APPROACH</h2>
	<p>
		Skincare isn’t one-size-fits-all, and neither is the way I work. Every treatment is thoughtfully
		built around your unique skin, using insight gained through in-depth consultation and analysis.
	</p>
	<p>
		Whether you’re managing breakouts, signs of ageing, dullness, or sensitivity, I tailor your plan
		using trusted, results-led techniques — from medical-grade facials and Korean-inspired skin
		therapies to subtle, skin-first aesthetic treatments.
	</p>
	<p>
		I believe in working with the skin, not against it — supporting its natural function while
		helping it heal, strengthen and glow from within. There are no generic routines here, just
		honest advice, expert care, and a commitment to achieving skin that looks and feels its best —
		for the long term.
	</p>
</section>

<section class="img-body">
	<img class="main-body" src="src/public/images/about-body.png" alt="person receiving treatment" />
	<img class="bg-body" src="src/public/images/dotted-circle-full.png" alt="dotted circle" />
</section>

<section>
	<h1 class="accredited-title">Accredited <span>and</span> trusted by</h1>
	<img class="accredited" src="src/public/images/logo-cpd.png" alt="" />
	<img class="accredited" src="src/public/images/logo-ctia.png" alt="" />
	<!-- <Carousel {images} /> -->
</section>

<style>
	.aboutsplash {
		padding: 50px 10px;
		position: relative;
		height: 450px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.aboutsplash img.main {
		position: relative;
		z-index: 2;
		height: 350px;
		background: lightgray 50% / cover no-repeat;
		border-radius: 0 0 150px 150px;
		border: 2px solid white;
	}

	.aboutsplash img.bg {
		position: absolute;
		top: 0;
		left: -16px;
		z-index: 1;
		pointer-events: none;
	}

	.img-body {
		position: relative;
		text-align: center;
		padding: 20px 0 60px;
		height: 650px;
	}

	.main-body {
		display: block;
		margin: 0 auto;
		position: relative;
		z-index: 2;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
	}

	.bg-body {
		position: absolute;
		left: 0;
		bottom: -50px;
		z-index: 1;
		pointer-events: none;
		left: 50vw;
		transform: translateX(-55vw);
		z-index: 1;
	}
	.accredited-title {
		margin-bottom: 60px;
	}

	.accredited {
		margin: 20px auto;
		display: block;
		height: 162px;
		flex-shrink: 0;
	}
</style>
