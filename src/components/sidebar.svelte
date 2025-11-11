<script lang="ts">
	import { fly } from 'svelte/transition';
	import LinkButton from './link-button.svelte';
	import Logo from './logo.svelte';
	import { clickOutside } from '../utils/utils';

	let treatment = $state<'home' | 'treatments' | 'advanced' | 'aesthetics' | 'beauty'>('beauty');
	let { isActive, closeSidebar, menuButtonRef, asideRef } = $props();
</script>

{#snippet link(link: string, title: string)}
	<a class="aside-link" onclick={closeSidebar} href={link}>{title}</a>
{/snippet}

{@render link('/', 'Home')}

{#if isActive}
	<aside
		class:active={isActive}
		in:fly={{ x: -600, duration: 500 }}
		out:fly={{ x: -600, duration: 500 }}
		use:clickOutside={{ enabled: isActive, callback: closeSidebar, exclude: [menuButtonRef] }}
	>
		<a class="title-wrapper" href="/" onclick={closeSidebar}>
			<Logo />
		</a>
		<div class="main">
			<hr />
			<div class:hidden={treatment !== 'home'}>
				{@render link('/', 'Home')}
				<button class="aside-link" class:hidden={treatment !== 'home'}>Treatments</button>
				{@render link('/about', 'About us')}
				{@render link('/gallery', 'Gallery')}
				{@render link('/contact', 'Contact')}
			</div>
			<div class="treatments" class:hidden={treatment !== 'treatments'}>
				<button class="aside-link" aria-label="back"></button>
				<button class="aside-link">Advanced skincare</button>
				<button class="aside-link">Aesthetics </button>
				<button class="aside-link">Beauty </button>
			</div>

			<div class="advanced" class:hidden={treatment !== 'advanced'}>
				{@render link('/facials', 'Facials')}
				{@render link('/dermaplaning', 'Dermaplaning')}
			</div>
			<div class="aesthetics" class:hidden={treatment !== 'aesthetics'}>
				{@render link('/anti-wrinkle-injections', 'Anti-wrinkle Injections')}
				{@render link('/dermal-filler', 'Dermal Filler')}
				{@render link('/skin-boosters', 'Skin Boosters')}
				{@render link('/polynucleotides', 'Polynucleotides')}
			</div>
			<div class="beauty" class:hidden={treatment !== 'beauty'}>
				{@render link('/lash-lifts-and-tints', 'Lash lifts & tints')}
				{@render link('/waxing-and-hair-removal', 'Waxing & hair removal')}
			</div>

			<div class="link-button">
				<LinkButton href="/" aria="Book your appointment now" />
			</div>
		</div>
	</aside>
{/if}

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		height: 100%;
		padding: 0 1rem;
		box-sizing: border-box;
		position: relative;
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
		display: flex;
		flex-direction: column;
		transition: all 0.5s;
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
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-left: 25dvw;
		height: 70px;
		text-decoration: none;
		color: inherit;
	}

	hr {
		border: none;
		height: 2px;
		background-color: #ede3d9;
	}

	.hidden {
		display: none;
	}

	.link-button {
		margin-top: auto;
		margin-left: 0;
		padding: 1rem 0;
		display: flex;
		justify-content: center;
	}
</style>
