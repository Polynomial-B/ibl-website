<script lang="ts"></script>

<section>
	<div class="contact-container">
		<form class="contact-form">
			<label for="name">Full Name</label>
			<input type="text" id="name" placeholder="" />

			<label for="email">E-mail</label>
			<input type="email" id="email" placeholder="" />

			<label for="message">Message</label>
			<textarea id="message" rows="4" placeholder=""></textarea>

			<button type="submit" class="send-btn">SEND MESSAGE</button>
		</form>
	</div>
</section>

<style>
	.contact-container {
		max-width: 400px;
		padding: 20px;
	}

	.contact-form label {
		color: #645242;
		opacity: 50%;
		font-size: 14px;
		display: block;
		margin: 25px 0 5px;
	}

	.contact-form input,
	.contact-form textarea {
		width: 100%;
		border: none;
		border-bottom: 2px solid #645242;
		background: transparent;
		padding: 8px 2px;
		font-size: 14px;
		outline: none;
	}

	.send-btn {
		margin-top: 45px;
		background: #819e80;
		color: white;
		border: none;
		padding: 12px 30px;
		font-size: 15px;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
		text-transform: uppercase;
	}
</style>
