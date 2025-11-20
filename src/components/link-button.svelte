<script lang="ts">
	let { text } = $props();
</script>

<a
	class="aside-link book-button"
	href="https://www.fresha.com/a/insidebeautylondon-shepperton-ashford-13-chessholme-road-th8rk3em"
	aria-label="book now via Fresha">{text}</a
>

<style>
	.book-button {
		display: inline-block;
		position: relative;
		color: white;
		padding: 10px 20px;
		border: 2px solid #2ecc71;
		cursor: pointer;
		font-size: 15px;
		font-weight: 600;
		border: 1px solid #fff;
		background: #819e80;
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
		margin-bottom: 40px;
		z-index: 2;
	}
</style>
