<script lang="ts">
	import { selectedProject } from "./stores";

	export let title: string;
	export let tags: string[];
	export let projectData: any; // can pass whole project object

	function select() {
		selectedProject.set(projectData);
	}
</script>

<button class="project-card" onclick={select}>
	<h2>> {title}</h2>
	<h5>{tags.join(', ')}</h5>
</button>

<style lang="scss";>
	@import '../styles/variables.scss';

	.project-card {
		display: block;
		text-align: left;
		border: 1px solid transparent;
		border-radius: $radius;
		padding: 0.5rem;
		background: transparent;
		color: $color-mossy;
		font-family: $font-family;
		font-size: 1rem;
		cursor: pointer;
		transition: box-shadow 0.2s ease;

		&:hover {
			box-shadow: 0 0 8px $color-twilight;
		}
	}
</style>