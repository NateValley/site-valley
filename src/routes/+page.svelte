<script lang="ts">
	import { projects } from '$lib/projects';

	import { selectedProject, tags } from '$lib/stores';
	
	import ProjectCard from '$lib/ProjectCard.svelte';
	import ProjectDetail from '$lib/ProjectLog.svelte';
	import TagToggle from '$lib/TagToggle.svelte';
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
</script>


	<!-- project list + filters (middle) -->
<div>
	<div class="portfolio-grid">

		<div class="project-media">

		</div>

		<div class="filters-cards-column">
			<div class="project-filters">
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
			</div>
	
			<div class="projects-group">
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
		</div>
	
		<!-- project logs (right) -->
		<div class="project-log-pane">
				<ProjectLog />
		</div>

	</div>
</div>