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

<script lang="ts">
	// Local component state
	let { isOpen } = $state({ isOpen: false });

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<nav class="menu" onclick_outside={closeMenu}>
	<ul class="menu-list">
		<li class="menu-item">Home</li>
		<li class="menu-item">About</li>
		<li class="menu-item treatments">
			<button class="menu-button" onclick={toggleMenu}> Treatments </button>
			{#if isOpen}
				<ul class="submenu">
					<li class="submenu-item">Facial</li>
					<li class="submenu-item">Massage</li>
					<li class="submenu-item">Body Treatment</li>
				</ul>
			{/if}
		</li>
		<li class="menu-item">Contact</li>
	</ul>
</nav>

<style>
	.menu {
		background-color: #fff;
		padding: 1rem 2rem;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		font-family: sans-serif;
	}

	.menu-list {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.menu-item {
		position: relative;
	}

	.menu-button {
		background: none;
		border: none;
		font-size: 1rem;
		cursor: pointer;
		padding: 0;
	}

	.submenu {
		position: absolute;
		top: 100%;
		left: 0;
		background: white;
		border: 1px solid #ddd;
		list-style: none;
		margin: 0;
		padding: 0.5rem 0;
		min-width: 150px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
		z-index: 100;
	}

	.submenu-item {
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	.submenu-item:hover {
		background-color: #f5f5f5;
	}
</style>
