<script lang="ts">
	export let tag: string;
	export let isActive: boolean;
	export let toggle: (tag: string) => void;
</script>

<button
	class="tag-toggle {isActive ? 'active' : ''}"
	onclick={() => toggle(tag)}
>
	<span class="label">&gt; {tag.toLowerCase()}</span>
	<span class="state">[{isActive ? 'x' : ' '}]</span>
</button>

<style lang="scss">
	@import '../styles/variables.scss';

	.tag-toggle {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		max-width: 450px;
		min-width: 400px;

		border: 1px solid transparent;
		border-radius: $radius;
		padding: 0.25rem 1.25rem;
		background: transparent;
		color: $color-mossy;
		font-family: $font-family;
		font-size: 0.85rem;
		cursor: pointer;
		transition: box-shadow 0.2s ease, background $transition, color $transition;
		
		&:hover {
			box-shadow: 0 0 8px $color-twilight;
		}
	}
</style>
