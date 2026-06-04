<script>
	let loaded = false;
</script>

<a href="/">
	<img
		src="/images/logo.png"
		alt="half mandala logo"
		width="200"
		height="118"
		style:opacity={loaded ? 1 : 0}
		style:transition="opacity 0.2s"
		onload={() => (loaded = true)}
	/>
</a>
