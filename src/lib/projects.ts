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
				subheader: 'order + serving phase architecture',
				description: 'designed the customer order interaction flow, syncing table seating, orders, and serving logic across clients in a multiplayer setting'
			},
			{
				tag: 'systems design',
				subheader: 'customer behavior state machine',
				description: 'built a full customer logic system, managing states like waiting, ordering, eating, and leaving'
			},
			{
				tag: 'systems design',
				subheader: 'seat & table system logic',
				description: 'implemented dynamic seating and table systems, tracking customer assignments and order delivery across gameplay sessions'
			},
			{
				tag: 'systems design',
				subheader: 'randomized customer flow',
				description: 'created logic for randomizing customer seating and order types to increase replayability and variety'
			},
			{
				tag: 'systems design',
				subheader: 'cosmetic propagation system',
				description: 'defined and implemented how cosmetic data syncs across clients and resets between multiplayer sessions'
			},
			// #endregion
			// #region Game Programming
			{
				tag: 'game programming',
				subheader: 'modular player manager',
				description: 'implemented a centralized PlayerManager to handle player input, movement, and object interactions'
			},
			{
				tag: 'game programming',
				subheader: 'rebindable control scheme',
				description: 'developed a fully rebindable input system for customizable controls'
			},
			{
				tag: 'game programming',
				subheader: 'unified interaction interface',
				description: 'created a base interaction system used by furniture, customers, and held items for consistent player interaction behavior'
			},
			{
				tag: 'game programming',
				subheader: 'object pickup & handheld logic',
				description: 'built a system for interacting with and transporting handheld objects like customer orders'
			},
			{
				tag: 'game programming',
				subheader: 'customer AI & navigation',
				description: 'integrated Unity NavMesh navigation and state transitions for responsive customer movement and behavior'
			},
			{
				tag: 'game programming',
				subheader: 'furniture spawning & placement',
				description: 'developed furniture spawning logic using a GridManager and custom furniture placement tools'
			},
			{
				tag: 'game programming',
				subheader: 'in-game HUD & interaction feedback',
				description: 'assisted in creating the in-game HUD and supporting UI for customer conversations and interactions'
			},
			// #endregion
			// #region Tools Programming
			{
				tag: 'tools programming',
				subheader: 'data-driven orders & cosmetics',
				description: 'created centralized databases for storing and managing orders and cosmetic item data'
			},
			{
				tag: 'tools programming',
				subheader: 'grid-based furniture placement tools',
				description: 'developed editor-facing systems to handle furniture placement using café-bound grids'
			},
			{
				tag: 'tools programming',
				subheader: 'spawn managers for dynamic furniture',
				description: 'built modular managers for spawning and tracking furniture like tables and seats at runtime'
			},
			// #endregion
			// #region Multiplayer Programming
			{
				tag: 'multiplayer programming',
				subheader: 'lobby creation & matchmaking',
				description: 'implemented a join/create lobby system using Photon PUN 2'
			},
			{
				tag: 'multiplayer programming',
				subheader: 'full network state sync',
				description: 'synchronized player movement, customer data, furniture, orders, and cosmetics across networked players'
			},
			{
				tag: 'multiplayer programming',
				subheader: 'RPC-heavy network communication',
				description: 'authored numerous RPCs (Remote Procedure Calls) to coordinate real-time multiplayer events and actions'
			},
			{
				tag: 'multiplayer programming',
				subheader: 'customer data sync architecture',
				description: 'used decoupled CustomerData components to sync customer behavior without tight coupling between systems'
			},
			{
				tag: 'multiplayer programming',
				subheader: 'networked furniture interaction',
				description: 'enabled full multiplayer furniture placement and interaction through Photon-compatible spawning logic'
			},
			// #endregion
			// #region Misc.
			{
				tag: 'misc.',
				subheader: 'lead programmer role',
				description: 'oversaw systems architecture, implementation planning, and team programming coordination'
			},
			{
				tag: 'misc.',
				subheader: 'steam store content writing',
				description: 'authored the official Pawfee Bean Steam page, showcasing gameplay features, multiplayer systems, and cozy café vibes'
			},
			{
				tag: 'misc.',
				subheader: 'ui development support',
				description: 'helped implement the in-game HUD and customer conversation interface elements'
			},
			// #endregion
		],
		tags: ['systems design', 'game programming', 'tools programming', 'multiplayer programming', 'misc.'],
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