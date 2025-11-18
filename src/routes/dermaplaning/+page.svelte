<script lang="ts">
	import Faq from '../../components/faq.svelte';
	import Footer from '../../components/footer.svelte';
	import Imagebody from '../../components/imagebody.svelte';
	import Splash from '../../components/splash.svelte';
</script>

<h1>Dermaplaning treatment</h1>

<Splash src="src/public/images/dermaplaning.png" alt="peach with dermaplane blade" />

<section>
	<h2>WHAT IS IT?</h2>
	<p>
		Dermaplaning is a professional exfoliation treatment that removes dead skin cells and fine
		vellus hair (“peach fuzz”) using a sterile, surgical-grade blade. This instantly reveals
		smoother, brighter skin, allowing skincare products to absorb more effectively and makeup to
		glide on flawlessly.
	</p>
	<p>
		It’s a gentle yet effective treatment suitable for most skin types, leaving the complexion
		looking refreshed and luminous without downtime.
	</p>
</section>
<section>
	<h2>ABOUT THE TREATMENT</h2>
	<p>
		Dermaplaning is carried out using a precision medical tool, handled at a specialist angle to
		safely exfoliate and resurface the skin. The scalpel glides across the skin in light, controlled
		strokes, removing the top layer of dead cells along with any fine hair.
	</p>
	<p>
		The procedure is painless and chemical-free, making it ideal for those with sensitive skin or
		for anyone wanting immediate visible results. As well as improving skin radiance and texture,
		dermaplaning can reduce the appearance of fine lines, uneven skin tone, and mild acne scarring.
	</p>
	<p>
		For the ultimate glow and long-lasting benefits, dermaplaning can be paired with of our facial
		treatments. By removing the barrier of dead skin, your skin is primed to absorb the powerful,
		active ingredients in our medical-grade products, maximising hydration, repair, and visible
		results.
	</p>
</section>

<Imagebody
	src="src/public/images/dermaplaning-body.png"
	alt="face receiving dermaplane treatment"
/>

<Faq
	prep="Avoid active skincare (retinoids, exfoliating acids) for 3–5 days beforehand. Arrive with clean skin, free from makeup."
	post="Follow any specific aftercare given for your skin type. Avoid heat treatments and direct sun exposure for 24–48 hours. Always apply SPF daily."
	results="You’ll notice visible improvement after just one treatment, with skin appearing more hydrated, radiant, and with a smoother texture. For best results, a course of facials is recommended. Results generally last around 4–6 weeks, although this can vary depending on your individual hair growth cycle and skin condition."
/>
