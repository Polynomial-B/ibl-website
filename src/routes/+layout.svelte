<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import NavbarMobile from '../components/navbar-mobile.svelte';
	import '../styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<NavbarMobile />
<main>
	{@render children?.()}
</main>

<style>
	main {
		padding-top: 235px;
	}
</style>
