<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div>
	<div class="fixed top-0 left-0 right-0 z-50 shadow-md transform">
		<Header />
	</div>

	<main class="pt-20 lg:pt-32">
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
