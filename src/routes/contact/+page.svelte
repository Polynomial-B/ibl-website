<script>
	import { PUBLIC_KEY } from '$env/static/public';
	import ContactForm from '../../components/contact-form.svelte';
</script>

<h1>Contact us</h1>

<ContactForm />

<section>
	<h3>Contact</h3>
	<p>insidebeautylondon@gmail.com</p>

	<h3>Based in</h3>
	<address>
		<span>Ashford,</span>
		<span>Surrey <abbr title="United Kingdom">UK</abbr></span>
	</address>
</section>

<iframe
	title="google-maps"
	width="600"
	height="450"
	style="border:0"
	loading="lazy"
	allowfullscreen
	referrerpolicy="no-referrer-when-downgrade"
	src="https://www.google.com/maps/embed/v1/place?key={PUBLIC_KEY}
    &q=Space+Needle,Seattle+WA"
>
</iframe>

<style>
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
</style>
