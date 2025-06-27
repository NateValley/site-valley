import { writable } from "svelte/store";
import type { Project } from "./projects";

export const selectedProject = writable<Project | null>(null);
export const navItems = [
	{ label: 'projects', href: '/'},
	{ label: 'about', href: '/about'},
	{ label: 'resume', href: '/resume'},
	{ label: 'contact', href: '/contact'}
]