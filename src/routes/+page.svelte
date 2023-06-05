<script lang="ts">
	import type { CookieStore } from 'cookie-store';
	import { onMount } from 'svelte';

	async function callAPI() {
		await fetch('/api/auth', { method: 'POST' });
		cookies = await cookieStore.getAll();
	}

	interface Cookie {
		domain?: string;
		expires?: number;
		name: string;
		path?: string;
		secure?: boolean;
		sameSite?: 'strict' | 'lax' | 'none';
		value: string;
	}

	let cookies: Cookie[] = [];
	let cookieStore: CookieStore;
	onMount(() => {
		import('cookie-store').then(async (module) => {
			cookieStore = module.cookieStore;
			cookies = await cookieStore.getAll();
		});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Cookies</h2>
<button on:click={callAPI}>Call API</button>
{#each cookies as cookie}
	<p>{cookie.name} = {cookie.value}</p>
{/each}
