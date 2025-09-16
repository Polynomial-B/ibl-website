<!-- <script lang="ts">
	let open = $state(false);
	let menuLevel = $state<'main' | 'treatments' | 'skincare' | 'aesthetics' | 'beauty'>('main');
	const onclick = () => (open = !open);
	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		open = false;
	};
</script>

<nav>
	<a href="/"><img src="src/public/images/logo.png" aria-label="home" alt="half mandala logo" /></a>
	<div class="main">
		<hr />
		<a href="/">Home</a>
		<a href="/about">About</a>
		<button {onclick} onfocusout={handleDropdownFocusLoss}>Treatments</button>
		<a href="/gallery">Gallery</a>
		<a href="/contact">Contact</a>
		<a href="/">Book Now</a>
	</div>

	{#if open}
		<div class="treatments">
			advanced skincare
			<a href="/facials">Facials</a>
			<a href="/dermaplaning">Dermaplaning</a>
			aesthetics
			<a href="/anti-wrinkle-injections">Anti-wrinkle Injections</a>
			<a href="/dermal-filler">Dermal Filler</a>
			<a href="/skin-boosters">Skin Boosters</a>
			<a href="/polynucleotides">Polynucleotides</a>
			beauty
			<a href="/lash-lifts-and-tints">Lash lifts & tints</a>
			<a href="/waxing-and-hair-removal">Waxing & hair removal</a>
		</div>
	{/if}
</nav>

<style>
	.main * {
		display: flex;
		flex-direction: column;
	}
	nav {
		background-color: #ffffff;
		height: 100vh;
		width: 90vw;
	}
	hr {
		border: none;
		height: 2px;
		background-color: #ede3d9;
	}
</style> -->
