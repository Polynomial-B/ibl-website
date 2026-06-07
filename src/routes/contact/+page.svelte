<script>
	import { PUBLIC_KEY } from '$env/static/public';
</script>

<svelte:head>
	<title>Contact Us | Inside Beauty London</title>
</svelte:head>

<h1>Contact us</h1>

<!-- <ContactForm /> -->

<section>
	<p>insidebeautylondon@gmail.com</p>

	<h3>Based in</h3>
	<address>
		<span>Ashford,</span>
		<span>Surrey <abbr title="United Kingdom">UK</abbr></span>
	</address>
	<div class="map-container">
		<iframe
			title="google-maps"
			width="600"
			height="450"
			style="border:0"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps/embed/v1/place/?key={PUBLIC_KEY}
    &q=Inside+Beauty+London/@51.4261217,-0.4501758,17z/"
		>
		</iframe>
	</div>
</section>

<style>
	section {
		margin: 0 auto;
		padding-top: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h3 {
		margin-top: 35px;
		margin-bottom: 12px;
	}
	p {
		padding: 0;
	}
	address {
		font-style: normal;
		font-size: 15px;
		font-weight: 500;
		margin-bottom: 30px;
	}
	span {
		display: block;
		margin: -5px 0 0;
	}
	abbr {
		text-decoration: none;
	}
	iframe {
		max-width: 300px;
		margin: 0 auto;
	}
	.map-container {
		position: relative;
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
		min-height: 450px;
		background: linear-gradient(90deg, #e2e2e2 0%, #f5f5f5 50%, #e2e2e2 100%);
		background-size: 200% 200%;
		animation: shimmer 2.5s infinite;
		border-radius: 8px;
	}
	@keyframes shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
