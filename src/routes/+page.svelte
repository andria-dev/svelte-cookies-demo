<script lang="ts">
	function callAPI() {
		return fetch('/api/auth', { method: 'POST' });
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={callAPI}>Call API</button>
