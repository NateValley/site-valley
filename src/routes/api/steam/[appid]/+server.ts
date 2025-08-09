import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, fetch, setHeaders }) => {
	const appid = params.appid!;

	const url = `https://store.steampowered.com/api/appdetails?appids=${appid}&l=en`;

	const res = await fetch(url);
	if (!res.ok) {
		return new Response(JSON.stringify({ ok: false, error: 'steam request failed!' }), { status: 502 });
	}

	const json = await res.json();
	const payload = json?.[appid];
	if (!payload?.success || !payload?.data) {
		return new Response(JSON.stringify({ ok: false, error: 'app not found!' }), { status: 404 });
	}

	const data = payload.data;
	const out = {
		ok: true,
		appid,
		name: data.name,
		header_image: data.header_image,
		capsule_image: data.capsule_image,
		short_description: data.short_description
	};

	setHeaders({
		'Cache-Control': 'public, max-age=600, s-maxage=600, stale-while-revalidate=86400'
	});

	return new Response(JSON.stringify(out), {
		headers: { 'content-type': 'application/json; charset=utf-8' }
	});
};