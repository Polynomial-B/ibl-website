<script>
	import Faq from '../../components/faq.svelte';
	import Imagebody from '../../components/imagebody.svelte';
	import Splash from '../../components/splash.svelte';
</script>

<h1>Lash lifts, brows <span>and</span> tints</h1>

<Splash src="src/public/images/eyebrows.png" alt="eyebrow being tinted" />

<section>
	<h2>shape. define. enhance.</h2>
	<p>
		A lash lift is a semi-permanent treatment that enhances your natural lashes by lifting and
		curling them from the root, giving the appearance of longer, lifted lashes without the need for
		extensions. When combined with a lash tint, the result is darker, more defined lashes that
		beautifully frame the eyes — mascara becomes optional. Who needs mascara when your lashes look
		this good straight from the moment you wake up?
	</p>
	<p>
		Brow tints work in a similar way — depositing semi-permanent colour onto the brows to create a
		fuller, more polished look. This treatment can subtly enhance your natural shape or add more
		definition, making your brows appear thicker and more balanced.
	</p>
</section>
<section>
	<h2>ABOUT THE TREATMENT</h2>
	<p>
		At Inside Beauty London, lash lifts, lash tints, and brow tints are tailored to enhance your
		natural features while keeping your routine effortless.
	</p>
	<p>
		A lash lift uses a gentle solution to curl lashes from the root, followed by a setting solution
		to hold them in place. Adding a tint deepens the colour for maximum definition, while brow tints
		are blended to complement your hair and skin tone.
	</p>
	<p>
		The treatment takes around 1 hour and is suitable for anyone wanting to wake up with lashes and
		brows that already look polished. With results lasting up to 6 weeks for a lash lift and around
		4–6 weeks for tints, you can enjoy a fresh, wide-awake look without the need for mascara or brow
		pencils every morning.
	</p>
</section>

<Imagebody src="src/public/images/eyebrows-body.png" alt="tinted eyebrows" />

<Faq
	prep="If it’s your first time having a lash or brow tint, you’ll need a patch test at least 24 hours prior to your appointment. On the day, arrive with clean lashes and brows, free from makeup or oils, and avoid waterproof mascara for 24 hours beforehand."
	post="Keep lashes and brows dry for 24 hours and avoid steam, heavy creams, or rubbing the area. After that, follow your usual routine; for lash lifts, using a lash conditioner is always advised to keep the lashes hydrated and healthy."
	results="Immediately! Enjoy lifted, defined lashes and polished brows straight after your appointment, lasting up to 6 weeks."
/>

<style>
	h1 {
		padding-right: 40px;
	}
</style>
