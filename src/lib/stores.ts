import { writable } from "svelte/store";
import type { Project } from "./projects";

export const selectedProject = writable<Project | null>(null);

export const navItems = [
	{ label: 'projects', href: '/site-valley/'},
	{ label: 'about', href: '/site-valley/about'},
	{ label: 'resume', href: '/site-valley/resume'},
	{ label: 'contact', href: '/site-valley/contact'}
]

export const tags = [
	'systems design',
	'game programming',
	'multiplayer programming',
	'tools programming'
];