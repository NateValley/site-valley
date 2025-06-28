<script>
	import '../styles/main.scss';
	import { navItems } from '$lib/stores';
	
	import { page } from '$app/stores';

	import { onDestroy, onMount } from 'svelte';

	let currentPath = '';
	const unsubscribe = page.subscribe(($page) => {
		currentPath = $page.url.pathname;
	});
	onDestroy(() => unsubscribe());

</script>

<main>
	<header class="valley-header">
		<h2>> valley protocol<span class="blinker">_</span></h2>
		<p>created by nathaniel berl valdenor :]</p>
	</header>


	<div class="portfolio-grid">
		<!-- nav stuff (left nav) -->
		<nav class="nav-stuff">
			{#each navItems as item}
				<a href={item.href} class:active={currentPath === item.href}>
					<span class="caret">{'>'}</span> 
					{item.label}
					{#if currentPath === item.href}
						<span class="blinker">_</span>
					{/if}
				</a>
			{/each}
		</nav>
		
		<slot /> <!-- page content here -->
	</div>
</main>