<script>
	import { onMount } from "svelte";
	import { projects } from '$lib/projects';

	let activeTag = 'None';
	let tags = ['Systems Design', 'Game Programming', 'Tools Development'];

	function filterProjects() {
		return activeTag === 'None'
		? projects
		: projects.filter(p => p.tags.includes(activeTag));
	}
</script>

<style>
	.layout {
		display: flex;
		height: 100vh;
	}

	.navbar {
		width: 200px;
		background: #1e1e2f;
		color: white;
		padding: 1rem;
	}

	.content {
		flex-grow: 1;
		padding: 2rem;
		overflow-y: auto;
		background: #f4f4f7;
	}

	.tags {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		padding: 0.5rem 1rem;
		border: none;
		background: #ddd;
		cursor: pointer;
		border-radius: 5px;
	}

	.tag.active {
		background: #1e1e2f;
		color: white;
	}

	.project {
		background: white;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 10px;
		box-shadow: 0 2px 6px rba(0,0,0,0.1);
	}
</style>

<div class="layout">
	<!-- vertical navbar -->
	<nav class="navbar">
		<h2>nate stuff :3</h2>
		<ul></ul>
	</nav>

	<!-- main stuff -->
	 <main class="content">
		<!-- tag toggles -->
		 <div class="tags">
			{#each tags as tag}
				<button
					class="tag {tag === activeTag ? 'active' : ''}"
					on:click={() => activeTag = tag}
				>
					{tag}
				</button>
			{/each}	
		 </div>

		<!-- project list -->
		{#each filterProjects() as project}
		  	<div class="project">
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<small>Tags: {project.tags.join(', ')}</small>
			</div>
		{/each}	
	 </main>
</div>