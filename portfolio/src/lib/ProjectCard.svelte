<script lang="ts">
	export let title: string;
	export let description: string;
	export let tags: string[];
</script>

<div class="project-card">
	<h3>{title}</h3>
	<p>{description}</p>
	<div class="tags">
		{#each tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</div>

<style>
	.project-card {
		background: white;
		padding: 1rem;
		margin-bottom: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0,0,0,0.1);
	}
	
	.tags {
		margin-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		background: #ddd;
		padding: 0.2rem 0.6rem;
		border-radius: 5px;
		font-size: 0.75rem;
	}
</style>