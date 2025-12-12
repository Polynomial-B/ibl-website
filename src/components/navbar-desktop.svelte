<script lang="ts">
	import { clickOutside } from '../utils/utils';
	import LinkButton from './link-button.svelte';
	import Logo from './logo.svelte';

	let open = $state(false);

	function close() {
		open = false;
	}

	let menuBtn = $state<HTMLElement>(undefined!);
	let dropdown = $state<HTMLElement>(undefined!);
</script>

<nav class="navbar">
	<div class="logo">
		<a href="/"
			><img
				src="src/public/images/logo.png"
				aria-label="home"
				alt="half mandala logo"
				class="logo-small"
			/></a
		>
	</div>

	<ul class="nav">
		<li><a href="/about">About</a></li>

		<li
			class="treatments-submenu {open ? 'treatments-open' : ''}"
			bind:this={menuBtn}
			use:clickOutside={{
				enabled: true,
				callback: close,
				exclude: [menuBtn, dropdown]
			}}
		>
			<button class="treatments-btn" onclick={() => (open = !open)}> Treatments </button>
		</li>
		<li><a href="/gallery">Gallery</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
	<div class="book">
		<LinkButton text="BOOK NOW" />
	</div>
	{#if open}
		<div class="submenu" bind:this={dropdown}>
			<div class="col">
				<Logo />
			</div>
			<div class="col">
				<h4>Advanced Skincare</h4>
				<a href="/facials">Facials</a>
				<a href="/dermaplaning">Dermaplaning</a>
			</div>

			<div class="col">
				<h4>Aesthetics</h4>
				<a href="/anti-wrinkle">Anti-wrinkle injections</a>
				<a href="/dermal-filler">Dermal filler</a>
				<a href="/skin-boosters">Skin boosters</a>
				<a href="/polynucleotides">Polynucleotides</a>
			</div>

			<div class="col">
				<h4>Beauty</h4>
				<a href="/lash-lift">Lash lifts, brows & tints</a>
				<a href="/waxing">Waxing & hair removal</a>
			</div>
		</div>
	{/if}
</nav>

<style>
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24px 40px;
		position: fixed;
		height: 84px;
		background-color: #fff;
		width: 100vw;
		left: 0;
		top: 0;
		right: 0;
		z-index: 5;
	}

	ul.nav {
		display: flex;
		align-items: center;
		gap: 32px;
		list-style: none;
	}

	.treatments-submenu {
		position: relative;
	}

	.treatments-btn {
		background: none;
		border: none;
		font: inherit;
		cursor: pointer;
	}

	.treatments-open::after {
		content: '';
		display: block;
		position: absolute;
		width: 60px;
		bottom: -10px;
		height: 2px;
		background-color: #e7ccae;
		margin-left: 24px;
	}

	.submenu {
		position: absolute;
		top: 80px;
		left: 0;
		display: flex;
		justify-content: center;
		gap: 40px;
		padding: 32px 40px;
		background: #fff;
		box-shadow: 0 12px 0 rgba(0, 0, 0, 0.006);
		z-index: 5;
		width: 100vw;
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.submenu .col {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.logo-small {
		height: 68px;
	}

	.book {
		margin-top: 36px;
	}
</style>
