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
			{#if $selectedProject && $selectedProject.media.length > 0}
				<div class="media-container">
					{#each $selectedProject.media as mediaItem}
						<div class="media-item">
							<h3 class="media-header">{mediaItem.header}</h3>
							<div class="media-content">
								{#if mediaItem.url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)}
									<img src={mediaItem.url} alt="Project media" loading="lazy" />
								{:else if mediaItem.url.match(/\.(mp4|webm|ogg|mov)$/i)}
									<video controls preload="metadata">
										<source src={mediaItem.url} type="video/mp4">
										Your browser does not support the video tag.
									</video>
								{:else if mediaItem.url.includes('youtube.com') || mediaItem.url.includes('youtu.be')}
									{@const videoId = mediaItem.url.includes('youtu.be') 
										? mediaItem.url.split('/').pop()?.split('?')[0]
										: new URL(mediaItem.url).searchParams.get('v')}
									{#if videoId}
										<iframe 
											src="https://www.youtube.com/embed/{videoId}" 
											title="YouTube video"
											frameborder="0" 
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
											allowfullscreen>
										</iframe>
									{/if}
								{:else}
									<div class="unsupported-media">
										<p>Unsupported media type</p>
										<a href={mediaItem.url} target="_blank" rel="noopener noreferrer">View externally</a>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{:else}
				{#if $selectedProject}
					<div class="no-media-section">
						<h3 class="log-tag">> NO MEDIA FOUND :[</h3>
					</div>
				{:else}
					<div class="no-media">
						<h3>> select a project to view</h3>
					</div>
				{/if}
			{/if}
		</div>

		<div class="filters-cards-column">
			<div class="project-filters">
				<h3 class="filters-header">project filters:</h3>
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

<style lang="scss">
	@import '../styles/variables.scss';

	.project-media {
		.no-media {
			color: $color-mossy;
			font-family: $font-family;
			
			h3 {
				font-size: 1rem;
				font-weight: normal;
			}
		}
	}

	.filters-header {
		margin-top: 0;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	.section {
		margin-top: 1rem;
		padding-top: 0.5rem;
		border-top: 2px dotted $color-ember;
	}

	.log-tag {
		color: $color-ember;
	}

	.no-media-section {
		margin-top: 1rem;
		padding-top: 0.5rem;
	}

	.media-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		height: 100%;
		overflow-y: auto;
		align-items: center;
		padding: 0.5rem;
		scrollbar-width: thin;
		scrollbar-color: $color-ember transparent;
		
		&::-webkit-scrollbar {
			width: 4px;
			height: 4px;
		}
		
		&::-webkit-scrollbar-track {
			background: transparent;
		}
		
		&::-webkit-scrollbar-thumb {
			background: $color-ember;
			border-radius: 2px;
		}
		
		&::-webkit-scrollbar-button {
			display: none;
		}
	}

	.media-item {
		width: 100%;
		text-align: center;

		.media-header {
			color: $color-ember;
			margin: 0 0 0.75rem 0;
			font-family: $font-family;
			font-size: 1rem;
			font-weight: normal;
		}

		.media-content {
			display: flex;
			justify-content: center;
			align-items: center;

			img, video, iframe {
				max-width: 100%;
				border-radius: $radius;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
			}

			img {
				height: auto;
				object-fit: cover;
			}

			video {
				height: auto;
				max-height: 300px;
			}

			iframe {
				width: 100%;
				height: 200px;
				border: none;
			}

			.unsupported-media {
				background: rgba($color-mossy, 0.1);
				border: 1px solid $color-mossy;
				border-radius: $radius;
				padding: 1rem;
				text-align: center;
				color: $color-mossy;
				width: 100%;

				a {
					color: $color-moonlight;
					text-decoration: underline;

					&:hover {
						color: $color-ember;
					}
				}
			}
		}
	}
</style>