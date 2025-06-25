<script lang="ts">
	import { projects } from '$lib/projects'
	import ProjectCard from '$lib/ProjectCard.svelte';
	import { onMount } from 'svelte';

	let activeTags: string[] = [];
	const tags = ['Systems Design', 'Game Programming', 'Tools Development'];

	function toggleTag(tag: string) {
		if (activeTags.includes(tag)) {
			activeTags = activeTags.filter(t => t !== tag);	// Remove the tag
		} else {
			activeTags = [...activeTags, tag];	// Add the tag
		}
	}

	function filterProjects() {
		if (activeTags.length === 0) {
			return projects;
		}
		
		return projects.filter(p =>
			p.tags.some(t => activeTags.includes(t))
		);
	}
</script>

<!-- tag buttons -->
<div class="tags">
	{#each tags as tag}
		<button
			class:selected={activeTags.includes(tag)}
			on:click={() => toggleTag(tag)}
		>
			{tag}
		</button>
	{/each}
</div>

<!-- project cards -->
 <div class="project-list">
	{#each filterProjects() as project}
		<ProjectCard
			title={project.title}
			description={project.description}
			tags={project.tags}
		/>
	{/each}
 </div>

 <style>
	.tags {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	button {
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 6px;
		background: white;
		cursor: pointer;
	}

	button.selected {
		background: #333;
		color: white;
		border-color: #333;
	}

	.project-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
 </style>