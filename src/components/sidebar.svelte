<script lang="ts">
	import { fly } from 'svelte/transition';
	import LinkButton from './link-button.svelte';
	import Logo from './logo.svelte';
	import { clickOutside } from '../utils/utils';

	type Treatment = 'home' | 'treatments' | 'advanced' | 'aesthetics' | 'beauty';

	let treatment = $state<Treatment>('home');
	let { isActive, closeSidebar, menuButtonRef, asideRef } = $props();

	const closeAndNavigate = () => {
		closeSidebar();
		treatment = 'home';
	};
</script>

{#snippet link(link: string, title: string)}
	<a class="aside-link" onclick={closeSidebar} href={link}>{title}</a>
{/snippet}

{#snippet backButton(location: Treatment)}
	<button class="aside-link backbutton" onclick={() => (treatment = location)} aria-label="back">
		<svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.99868 15.938L7.95367 17L0.287675 9.21C0.103176 9.0197 0 8.76505 0 8.5C0 8.23495 0.103176 7.9803 0.287675 7.79L7.95367 0L8.99868 1.063L1.68067 8.5L8.99868 15.938Z"
				fill="#5B4C3F"
			/>
		</svg>
	</button>
{/snippet}

{#if isActive}
	<aside
		class:active={isActive}
		in:fly={{ x: -600, duration: 500 }}
		out:fly={{ x: -600, duration: 500 }}
		use:clickOutside={{ enabled: isActive, callback: closeSidebar, exclude: [menuButtonRef] }}
	>
		<a class="title-wrapper" href="/" onclick={closeAndNavigate}>
			<Logo />
		</a>
		<div class="main">
			<hr />
			<div class:hidden={treatment !== 'home'}>
				{@render link('/', 'Home')}
				<button
					class="aside-link"
					class:hidden={treatment !== 'home'}
					onclick={() => (treatment = 'treatments')}>Treatments</button
				>
				{@render link('/about', 'About us')}
				{@render link('/gallery', 'Gallery')}
				{@render link('/contact', 'Contact')}
			</div>

			<div class="treatments" class:hidden={treatment !== 'treatments'}>
				{@render backButton('home')}
				<h2 class="menu-header">Treatments</h2>
				<button onclick={() => (treatment = 'advanced')} class="aside-link"
					>Advanced skincare</button
				>
				<button class="aside-link" onclick={() => (treatment = 'aesthetics')}>Aesthetics</button>
				<button class="aside-link" onclick={() => (treatment = 'beauty')}>Beauty</button>
			</div>

			<div class="advanced" class:hidden={treatment !== 'advanced'}>
				{@render backButton('treatments')}
				<h2 class="menu-header">Advanced Skincare</h2>
				{@render link('/facials', 'Facials')}
				{@render link('/dermaplaning', 'Dermaplaning')}
			</div>
			<div class="aesthetics" class:hidden={treatment !== 'aesthetics'}>
				{@render backButton('treatments')}
				<h2 class="menu-header">Aesthetics</h2>
				{@render link('/anti-wrinkle-injections', 'Anti-wrinkle Injections')}
				{@render link('/dermal-filler', 'Dermal Filler')}
				{@render link('/skin-boosters', 'Skin Boosters')}
				{@render link('/polynucleotides', 'Polynucleotides')}
			</div>
			<div class="beauty" class:hidden={treatment !== 'beauty'}>
				{@render backButton('treatments')}
				<h2 class="menu-header">Beauty</h2>
				{@render link('/lash-lifts-and-tints', 'Lash lifts & tints')}
				{@render link('/waxing-and-hair-removal', 'Waxing & hair removal')}
			</div>

			<div class="link-button">
				<LinkButton text="BOOK NOW" />
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
		border-bottom-right-radius: 40px;
	}
	aside.active {
		left: 0px;
	}

	.aside-link {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 18px 0px 17px 82px;
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

	.menu-header {
		color: #5b4c3f;
		padding: 18px 0px 17px 82px;
		font-family: Raleway;
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-decoration-line: underline;
	}

	.backbutton {
		position: absolute;
		z-index: 2;
		padding: 0 20px 0;
	}
</style>
