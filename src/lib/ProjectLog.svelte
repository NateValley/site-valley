<script lang="ts">
	import { selectedProject } from "./stores";

	let groupedLogs = new Map();

	$: groupedLogs = (() => {
			if (!$selectedProject?.logs) return new Map();

			const map = new Map();
			for (const entry of $selectedProject?.logs) {
				if (!map.has(entry.tag)) {
					map.set(entry.tag, []);
				}

				map.get(entry.tag).push(entry);
			}
			return map;
		})();
</script>

{#if $selectedProject}
	<div class="project-log">
		<h1>{$selectedProject.title.toUpperCase()}</h1>
		<h5 class="project-tags">{$selectedProject.tags.join(', ').toUpperCase()}</h5>
	
		{#if !$selectedProject.logs?.length}
			<div class="section">
				<h3 class="log-tag">> NO LOGS FOUND :[</h3>
			</div>
		{:else}
			{#each Array.from(groupedLogs.entries()) as [tag, entries]}
				<div class="section">
					<h3 class="log-tag">{tag.toUpperCase()}</h3>
					{#each entries as entry}
						<div class="log-entry">
							<h4 class="log-header">> {entry.subheader}</h4>
							<p class="log-description">{entry.description}</p>
						</div>
					{/each}
				</div>
			{/each}
		{/if}
	</div>
{:else}
	<div class="project-log">
		<p>> select a project to view</p>
	</div>
{/if}

<style lang="scss">
	@import '../styles/variables.scss';

	.project-log {
		height: 70vh;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: $color-ember transparent;
		
		border: $border;
		animation: shimmer 6s ease-in-out infinite;
		border-radius: $radius;
		padding: 1rem;
		font-family: $font-family;

		color: $color-mossy;
	}

	.project-tags {
		color: $color-ember;

		display: flex;
		gap: 0.5rem; // optional: space between tags
		white-space: nowrap;
		padding-bottom: 0.5rem;

		overflow-x: auto;
		overflow-y: hidden;

		scrollbar-width: thin;
		scrollbar-color: $color-ember transparent;

		height: auto; // let it expand to fit content unless you have a reason for fixed height
		max-width: 100%; // ensures it doesn't overflow the container
	}

	.section {
		margin-top: 1rem;
		padding-top: 0.5rem;
		border-top: 2px dotted $color-ember;
	}

	.log-entry {
		margin-bottom: 1rem;
		line-height: 1.75;
	}

	.log-tag {
		color: $color-ember;
	}

	.log-header {
		color: $color-twilight;
	}

	.log-description {
		color: $color-mossy;
	}

</style>