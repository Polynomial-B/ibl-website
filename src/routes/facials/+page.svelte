<script lang="ts">
	import Faq from '../../components/faq.svelte';
	import Imagebody from '../../components/imagebody.svelte';
	import Splash from '../../components/splash.svelte';
</script>

<h1>Advanced facials <span>and</span> skincare</h1>

<Splash src="src/public/images/facials.png" alt="Medik8 bakuchiol pipette and bottle" />

<section>
	<h2>exceptional skin starts here.</h2>
	<p>
		At Inside Beauty London, we believe your skin should be treated with the highest standard of
		skincare in the world.<br />
		No shortcuts. No generic salon products. No trends that ‘sound good but do nothing.’
	</p>
	<p>
		Every facial is powered by premium, clinical-grade brands and technologies trusted by
		dermatologists and used in leading global skin clinics.
	</p>
	<p>Because results matter, and the right products make all the difference.</p>
</section>
<section>
	<h2>signature treatments</h2>
	<p>
		Our Signature Facials are organised into four advanced treatment categories. Within each
		category you’ll find a selection of facials and intensities, so we can match the products,
		technology and technique to your skin and goals.
	</p>
	<h3>Medik8 Advanced Facials</h3>
	<p>
		A powerhouse skin reset, combining Medik8’s professional peels and active complexes to lift
		dullness, refine pores and transform skin with precision.
	</p>
	<h3>Hydrofacial Glow</h3>
	<p>
		A high-tech deep cleanse and hydration boost, using advanced technology such as radio-frequency
		and hydrodermabrasion to clear pores, smooth texture and instantly revive dull skin
	</p>
	<h3>Korean Glass Skin Facial</h3>
	<p>
		Inspired by Seoul’s elite skincare clinics, this facial layers advanced hydration and
		brightening formulas to give that flawless, light-reflecting, “glass skin” finish.
	</p>
	<h3>LED Light Therapy</h3>
	<p>
		A powerful treatment that uses targeted wavelengths of light to boost collagen, calm redness,
		clear breakouts, and accelerate healing from within.
	</p>
	<p>
		Each facial is a moment of calm and confidence; blending science, luxury, and visible results
		that make your skin feel as good as it looks.
	</p>
</section>

<Imagebody src="src/public/images/facials-body.png" alt="person receiving rose facial treatment" />

<Faq
	prep="Avoid active skincare (retinoids, acids) for 3–5 days before your appointment and arrive with clean skin."
	post="Follow the aftercare advice for your facial type. For advanced treatments, especially with peels, avoid heat, sun exposure, and active skincare for 3–5 days. Use SPF daily to protect your results and stay hydrated."
	results="You may notice your skin feels fresher and more hydrated after a single facial, but the most visible, lasting improvements come from a course of treatments. For targeted skin concerns such as pigmentation, fine lines, or congestion, I recommend a series of 4–6 facials spaced 2–4 weeks apart. This allows the active ingredients —  including professional-strength peels where suitable — to build on the results of each previous session, delivering healthier, clearer, and more radiant skin over time."
/>

<style>
	h3 {
		font-size: 15px;
		font-style: normal;
		font-weight: 700;
		line-height: 30px;
		margin: 20px 0 -10px;
	}
</style>
