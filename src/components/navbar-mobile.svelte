<script lang="ts">
	import Logo from './logo.svelte';
	import Sidebar from './sidebar.svelte';

	let isActive = $state(false);
	let menuButtonRef = $state<HTMLElement | null>(null);
	let asideRef = $state<HTMLElement | null>(null);

	const toggleSidebar = () => (isActive = !isActive);
	const closeSidebar = () => (isActive = false);
</script>

<nav>
	<div class="title-wrapper">
		<Logo />
		<button
			class="menu-button"
			aria-label="Open navigation menu"
			onclick={toggleSidebar}
			bind:this={menuButtonRef}
		>
			<img src="src/public/images/menu.svg" alt="" class="menu-icon" />
		</button>
	</div>
	<Sidebar {isActive} {closeSidebar} {menuButtonRef} {asideRef} />
</nav>

<style>
	nav {
		position: relative;
		width: 100%;
		height: 235px;
		z-index: 4;
		background-color: #faf5ef;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
	}

	.title-wrapper {
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-content: flex-end;
	}

	.menu-icon {
		position: fixed;
		top: 64px;
		right: 20px;
		height: auto;
		cursor: pointer;
		z-index: 11;
	}
</style>
