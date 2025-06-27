export interface Project {
	title: string;
	descriptions: string[][];
	tags: string[]
}

export const projects: Project[] = [
	{
		title: 'Pawfee Bean',
		descriptions: [['Synopsis', 'an epic cat cafe']],
		tags: ['systems design', 'game programming']
	},
	{
		title: 'another thing',
		descriptions: [['Synopsis', '2222']],
		tags: ['systems design', 'game programming']
	},
	{
		title: 'some secret third thing',
		descriptions: [['Synopsis', '333333333']],
		tags: ['game programming', 'tools programming']
	}
]