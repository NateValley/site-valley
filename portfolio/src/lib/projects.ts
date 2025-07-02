export interface Project {
	title: string;
	logs: Log[];
	tags: string[],
	mediaUrls: string[]
}

interface Log {
	tag: string;
	subheader: string;
	description: string;
}

export const projects: Project[] = [
	{
		title: 'Pawfee Bean',
		logs: [
			// #region Systems Design
			{
				tag: 'systems design',
				subheader: 'order interaction flow',
				description: 'implemented and refactored how customer orders, table seating, and customer serving phases sync across players using Photon PUN 2 online network features'
			},
			{
				tag: 'systems design',
				subheader: 'customer logic',
				description: 'built the customer behavior system and state machine- including seating, ordering, and responding the player interactions'
			},
			{
				tag: 'systems design',
				subheader: 'cosmetics system flow',
				description: 'defined how cosmetic changes propagate across clients and reset between sessions'
			},
			{
				tag: 'systems design',
				subheader: 'player interaction template',
				description: 'created an interface for all interactable objects in the game, supporting future content and keeping player logic modular'
			},
			// #endregion
			// #region Game Programming
			{
				tag: 'game programming',
				subheader: 'character + movement',
				description: 'helped build a reusable character class and contributed to movement & raycast behavior for players'
			},
			{
				tag: 'game programming',
				subheader: 'rebindable keys',
				description: 'implemented custom input binding for keyboard support and accessibility'
			},
			{
				tag: 'game programming',
				subheader: 'ui & menu interaction',
				description: 'wrote support for menu keyboard navigation, scene transitions, and toggleable menus'
			},
			{
				tag: 'game programming',
				subheader: 'furniture system',
				description: 'standardized seat/table interactions and wrote code for spawning seats with saved configurations'
			},
			{
				tag: 'game programming',
				subheader: 'inventory & held items',
				description: 'implemented a basic handheld inventory and item pickup/drop flow'
			},
			// #endregion
			// #region Multiplayer Programming
			{
				tag: 'multiplayer programming',
				subheader: 'core room flow',
				description: 'built out join/create room logic, synced customers/seats/orders across clients'
			},
			{
				tag: 'multiplayer programming',
				subheader: 'multiplayer sync',
				description: 'created multiplayer syncing logic for gameobjects like customers and seats using Unity’s Netcode'
			},
			{
				tag: 'multiplayer programming',
				subheader: 'multiplayer refactor',
				description: 'refactored the whole multiplayer flow to better support synced states and reduce desync issues'
			},
			// #endregion
			// #region Tools Programming
			{
				tag: 'tools programming',
				subheader: 'scriptable order system',
				description: 'made an Order scriptable object for easier management of baked goods, order types, and item categories'
			},
			{
				tag: 'tools programming',
				subheader: 'gamemanager utilities',
				description: 'organized functions and variables for phase switching, player references, and item stock syncing'
			},
			// #endregion
		],
		tags: ['systems design', 'game programming', 'multiplayer programming', 'tools programming'],
		mediaUrls: []
	},
	{
		title: 'another thing',
		logs: [
		],
		tags: ['systems design', 'game programming'],
		mediaUrls: []
	},
	{
		title: 'some secret third thing',
		logs: [
		],
		tags: ['game programming', 'tools programming'],
		mediaUrls: []
	}
]