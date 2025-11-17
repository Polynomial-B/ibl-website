<script lang="ts">
	import Faq from '../../components/faq.svelte';
	import Footer from '../../components/footer.svelte';
	import Imagebody from '../../components/imagebody.svelte';
	import Splash from '../../components/splash.svelte';
</script>

<h1>Dermal filler treatment</h1>

<Splash src="src/public/images/dermal-filler.png" alt="syringe on white background" />

<section>
	<h2>WHAT IS IT?</h2>
	<p>
		Dermal fillers are injectable treatments that restore lost volume, define facial contours, and
		smooth deeper lines caused by ageing or changes in facial structure. Over time, collagen,
		elastin and fat naturally deplete, leading to a loss of firmness and shape: particularly around
		the cheeks, lips, jawline, and under-eye area.
	</p>
	<p>
		By placing filler beneath the skin, structure and support can be instantly restored or enhanced,
		creating a refreshed appearance that still looks entirely your own.
	</p>
</section>
<section>
	<h2>ABOUT THE TREATMENT</h2>
	<p>
		At Inside Beauty London, dermal filler treatments are crafted to enhance not overpower your
		natural features. Every appointment begins with a one-to-one consultation where we will talk
		through your goals, assess your facial structure, and decide together on the most suitable
		treatment areas.
	</p>
	<p>
		Rather than following trends or creating exaggerated volume, the focus is on restoring subtle
		definition and harmony. Each treatment is informed by a deep understanding of facial anatomy to
		ensure results that feel soft, balanced, and truly individual.
	</p>
	<p>
		Whether you’re looking to add volume and shape to the lips or soften marionette lines, your
		treatment will be precise, tailored and always led by the principle that less is more.
	</p>
</section>

<Imagebody src="src/public/images/dermal-filler-body.png" alt="before and after of lips" />

<Faq
	prep="Before your procedure, it’s essential to follow a few simple steps to ensure the best possible results. Avoid blood-thinning or anti-inflammatory medications, alcohol, and supplements like aspirin or fish oil at least 24 hours prior to your treatment to minimise bruising. Arrive with clean skin and avoid wearing makeup on the lower face if possible. If you’re prone to cold sores and are having lip filler, let me know in advance so we can take precautions."
	post="Avoid touching or applying pressure to the treated areas for the first 24 hours. Refrain from strenuous exercise, heat exposure (such as saunas or sunbeds), and alcohol for at least 24 hours, as these can increase swelling or bruising. Avoid facial treatments or massages in the treated areas for 2 weeks. Mild swelling or small bruises are normal and should settle within a few days. Keep the area clean and avoid makeup for 12 hours, especially around injection points."
	results="Results from dermal filler are visible immediately, but the final result becomes clearer over the next 5–7 days as any swelling settles. The treated area may initially feel slightly firm or tender- this is completely normal and will soften as the filler integrates with your natural tissue. "
/>

<Footer />
