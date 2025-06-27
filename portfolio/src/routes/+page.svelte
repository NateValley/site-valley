<script lang="ts">
	import { projects } from '$lib/projects';

	import { selectedProject, navItems, tags } from '$lib/stores';
	
	import { page } from '$app/stores';
	
	import ProjectCard from '$lib/ProjectCard.svelte';
	import ProjectDetail from '$lib/ProjectLog.svelte';
	import TagToggle from '$lib/TagToggle.svelte';
	import { onDestroy, onMount } from 'svelte';
    import ProjectLog from '$lib/ProjectLog.svelte';

	let activeTags: string[] = [];
	

	function toggleTag(tag: string) {
		activeTags = activeTags.includes(tag)
			? activeTags.filter(t => t !== tag)
			: [...activeTags, tag];
	}

	$: filteredProjects = activeTags.length === 0
		? projects
		: projects.filter(p =>
			activeTags.every(t =>
				p.tags.some(tag => tag.toLowerCase() === t.toLowerCase())
			)
		);

	let currentPath = '';
	const unsubscribe = page.subscribe(($page) => {
		currentPath = $page.url.pathname;
	});

	onDestroy(() => unsubscribe());
</script>

<header class="valley-header">
	<p>> profile of: nathaniel valdenor</p>
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

	<!-- project list + filters (middle) -->
	 <div>
		<h3>project filters:</h3>
		<div class="tags">
			{#each tags as tag}
				<TagToggle
					{tag}
					isActive={activeTags.includes(tag)}
					toggle={toggleTag}
				/>
			{/each}
		</div>

		<h5>selected project: {$selectedProject?.title ?? 'NULL'}</h5>
		<div class="project-list">
			{#if filteredProjects.length > 0}
				{#each filteredProjects as project}
					<ProjectCard
						title={project.title}
						tags={project.tags}
						projectData={project}
					/>
				{/each}
			{:else}
				<p>> no matching projects !</p>
			{/if}
		</div>
	 </div>

	 <!-- project logs (right) -->
	  <div class="project-log-pane">
		<ProjectLog />
	  </div>
</div>
