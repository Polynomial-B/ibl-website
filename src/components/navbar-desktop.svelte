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

<nav>
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
				<h4>ADVANCED SKINCARE</h4>
				<a href="/facials" onclick={() => close()}>Facials</a>
				<a href="/dermaplaning" onclick={() => close()}>Dermaplaning</a>
			</div>

			<div class="col">
				<h4>AESTHETICS</h4>
				<a href="/anti-wrinkle-injections" onclick={() => close()}>Anti-wrinkle injections</a>
				<a href="/dermal-filler" onclick={() => close()}>Dermal filler</a>
				<a href="/skin-boosters" onclick={() => close()}>Skin boosters</a>
				<a href="/polynucleotides" onclick={() => close()}>Polynucleotides</a>
			</div>

			<div class="col">
				<h4>BEAUTY</h4>
				<a href="/lash-lifts-and-tints" onclick={() => close()}>Lash lifts, brows & tints</a>
				<a href="/waxing-and-hair-removal" onclick={() => close()}>Waxing & hair removal</a>
			</div>
			<div class="col"></div>
		</div>
	{/if}
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 84px;
		padding: 24px 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
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
		right: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 40px;
		padding: 32px 40px;
		background: #fff;
		box-shadow: 0 12px 0 rgba(0, 0, 0, 0.006);
		z-index: 5;
		font-size: 15px;
	}

	h4 {
		color: #666060;
		text-decoration: none;
		font-weight: 600;
		letter-spacing: -0.12px;
	}

	.submenu .col {
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-width: 100px;
	}

	.logo-small {
		height: 68px;
	}

	.book {
		margin-top: 36px;
	}

	@media (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
