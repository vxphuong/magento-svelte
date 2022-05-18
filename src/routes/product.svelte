<script>
	import Breadcrumb from '$lib/components/global/Breadcrumb.svelte';
	import AuthenticReviews from '$lib/components/product/AuthenticReviews.svelte';
	import BundlePacks from '$lib/components/product/BundlePacks.svelte';
	import Pricing from '$lib/components/product/Pricing.svelte';
	import ProductSummary from '$lib/components/product/ProductSummary.svelte';
	import Slider from '$lib/components/product/Slider.svelte';
	import Videos from '$lib/components/product/Videos.svelte';
	import Faq from '$lib/components/product/Faq.svelte';
	import Subscribe from '$lib/components/homepage/Subscribe.svelte';

	let currentNavItem = 'bundlePacks';

	const navItems = [
		{ name: 'BUNDLE PACKS', id: 'bundlePacks' },
		{ name: 'DETAILS', id: 'details' },
		{ name: 'VIDEOS', id: 'videos' },
		{ name: 'REVIEWS', id: 'reviews' },
		{ name: 'FAQ', id: 'faq' }
	];

	const breadcrumb = [
		{
			title: 'Product Slug',
			url: '#!'
		}
	];

	const product = {
		title: 'Nutritional Yeast Tablets',
		star: 4.8,
		reviews: 736,
		benefits:
			"Support keto-adaptation, instantly relieve stress, and stop cravings with Dr. Berg's Nutritional Yeast Tablets. Nutritional yeast is nature's best source of B vitamins, which support your mood, skin health, metabolism, and energy. These nutritional yeast tablets make it easy for you to replenish your B vitamins daily without added synthetic ingredients. Each bottle contains 270 tablets that are easy to chew or swallow."
	};
</script>

<div class="relative">
	<div class="width-1260 px-4">
		<Breadcrumb links={breadcrumb} />

		<div class="xl:grid grid-cols-12 gap-x-6">
			<div class="col-start-1 col-end-5">
				<Slider />
			</div>

			<div class="col-start-5 col-end-10">
				<ProductSummary />
			</div>

			<div class="col-start-10 col-end-13">
				<Pricing />
			</div>
		</div>
	</div>

	<!-- sticky nav -->
	<div class="bg-primary-100 pt-3 text-gray-light sticky top-16 w-full xl:top-28 z-50">
		<div
			class="width-1260 px-4 text-sm font-bold flex justify-start items-center space-x-8 overflow-x-auto"
		>
			{#each navItems as item}
				<a
					href="#{item.id}"
					class="pb-2 border-b-[4px] inline-block whitespace-nowrap custom-transition {currentNavItem ===
					item.id
						? 'border-white text-white'
						: 'border-transparent'}"
					on:click={() => (currentNavItem = item.id)}>{item.name}</a
				>
			{/each}
		</div>
	</div>

	<div class="width-1260 px-4 py-4">
		<BundlePacks />
		<Videos />
		<AuthenticReviews />

		<Faq />
		<Subscribe />
	</div>
</div>
