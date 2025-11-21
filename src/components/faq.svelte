<script lang="ts">
	let { prep, post, results } = $props();
</script>

<section>
	<h2>FAQs</h2>
	<details name="faq">
		<summary>How should I prepare for my treatment?</summary>
		<p>{prep}</p>
	</details>
	<details name="faq">
		<summary>What should I do post-treatment?</summary>
		<p>{post}</p>
	</details>
	<details name="faq">
		<summary>When will I see results?</summary>
		<p>{results}</p>
	</details>
</section>

<style>
	section {
		margin: 30px 0;
	}
	details {
		margin: 12px 0;
		border-radius: 16px;
		overflow: hidden;
		background: #ffffff;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
	}

	details summary {
		list-style: none;
	}

	details summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 22px;
		cursor: pointer;
		font-size: 16px;
		color: #7f9680;
		font-weight: 600;
		position: relative;
	}

	details summary::after {
		content: '';
		display: inline-block;
		width: 28px;
		height: 28px;
		background: #aaba9f
			url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M8.13867 16.1641L14.0938 10.209L8.13867 4.25385" stroke="white" stroke-width="1.70146" stroke-linecap="round" stroke-linejoin="round"/></svg>')
			no-repeat center center;
		background-size: 12px 12px;
		border-radius: 50%;
		transition: transform 0.25s ease;
		flex-shrink: 0;
	}

	summary::after {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	details[open] summary::after {
		transform: rotate(90deg);
	}

	details p {
		padding: 0 22px 18px 22px;
		margin: 0;
		color: #555;
		font-size: 15px;
		line-height: 1.4;
	}

	details p {
		color: #a2a2a3;
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 166%;
	}
</style>
