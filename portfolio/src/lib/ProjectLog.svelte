<script lang="ts">
	import { selectedProject } from "./stores";
</script>

{#if $selectedProject}
	<div class="project-log">
		<h2>{$selectedProject.title}</h2>
		<h5>{$selectedProject.tags.join(', ')}</h5>
	
		{#each $selectedProject.descriptions as [heading, text]}
			<div class="section">
				<h3>{heading.toLowerCase()}</h3>
				<h4>> {text}</h4>
			</div>
		{/each}	
	</div>
{:else}
	<div class="project-log">
		<p>> select a project to view</p>
	</div>
{/if}

<style lang="scss">
	@import '../styles/variables.scss';

	.project-log {
		border: 1px solid $color-ember;
		border-radius: $radius;
		padding: 1rem;
		font-family: $font-family;
	}

	.section {
		margin-top: 1rem;
		padding-top: 0.5rem;
		border-top: 1px dashed $color-ember;
	}
</style>