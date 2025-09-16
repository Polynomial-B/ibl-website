<script lang="ts">
	import { fly } from 'svelte/transition';
	import LinkButton from './link-button.svelte';
	import Logo from './logo.svelte';
	import { clickOutside } from '../utils/utils';

	let { isActive, closeSidebar, menuButtonRef, asideRef } = $props();
</script>

{#if isActive}
	<aside
		class:active={isActive}
		in:fly={{ x: -600, duration: 500 }}
		out:fly={{ x: -600, duration: 500 }}
		use:clickOutside={{ enabled: isActive, callback: closeSidebar, exclude: [menuButtonRef] }}
	>
		<div class="title-wrapper">
			<Logo />
		</div>
		<div class="main">
			<hr />
			<a class="aside-link" href="/">Home</a>
			<button class="aside-link">Treatments</button>
			<a class="aside-link" href="/about">About us</a>
			<a class="aside-link" href="/gallery">Gallery</a>
			<a class="aside-link" href="/contact">Contact</a>
			<LinkButton href="/" aria="Book your appointment now" />
			<!-- <a class="aside-link book-button" href="/" aria-label="">BOOK NOW</a> -->
		</div>

		<!-- <div class="treatments">
			<button aria-label="back"></button>
			<button>Advanced skincare</button>
			<button>Aesthetics </button>
			<button>Beauty </button>
		</div>

		<div id="advanced">
			<a href="/facials">Facials</a>
			<a href="/dermaplaning">Dermaplaning</a>
		</div>
		<div id="aesthetics">
			<a href="/anti-wrinkle-injections">Anti-wrinkle Injections</a>
			<a href="/dermal-filler">Dermal Filler</a>
			<a href="/skin-boosters">Skin Boosters</a>
			<a href="/polynucleotides">Polynucleotides</a>
		</div>
		<div id="beauty">
			<a href="/lash-lifts-and-tints">Lash lifts & tints</a>
			<a href="/waxing-and-hair-removal">Waxing & hair removal</a>
		</div> -->
	</aside>
{/if}

<style>
	.main * {
		display: flex;
		flex-direction: column;
	}

	.main {
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}

	.title-wrapper {
		padding-right: 10dvw;
		display: flex;
		justify-content: center;
		align-content: flex-end;
	}

	aside {
		position: fixed;
		top: 0px;
		left: -800px;
		height: 650px;
		width: 334px;
		transition: all 0.5s;
		padding-top: 36px;
		background-color: #fff;
		z-index: 10;
	}
	aside.active {
		left: 0px;
	}
	aside::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 10%;
		height: 100%;
		background-color: #ede3d9;
		border-bottom-right-radius: 40px;
	}

	.aside-link {
		align-items: first baseline;
		padding-left: 25dvw;
		height: 70px;
		justify-content: center;
	}

	hr {
		border: none;
		height: 2px;
		background-color: #ede3d9;
	}
</style>
