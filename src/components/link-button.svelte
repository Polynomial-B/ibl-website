<script lang="ts">
	let { href, aria } = $props();
</script>

<a class="aside-link book-button" {href} aria-label={aria}>BOOK NOW</a>

<style>
	.book-button {
		padding: 12px;
		margin-left: 22dvw;
		border: 1px solid #fff;
		border-radius: 10px;
		background: rgba(255, 200, 144, 0.49);
		font-size: 1rem;
		cursor: pointer;
		text-decoration: none;
		width: 147px;
		height: 46px;
		color: #4d4d4d;
		font-size: 15px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-align: center;
	}
</style>
