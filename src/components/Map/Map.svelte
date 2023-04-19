<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { geoData } from '../../utils/getGeoData';
	/**
	 * @type {HTMLDivElement}
	 */
	let mapElement;
	/**
	 * @type {{ remove: () => void; }}
	 */
	let map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([41.40856543129339, 2.1299572085542677], 15);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				// @ts-ignore
				.addTo(map);
			// @ts-ignore
			leaflet.geoJSON(geoData).addTo(map);
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: 800px;
	}
</style>
