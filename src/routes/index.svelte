<script>
	export const prerender = true;
	import BeAPartOfOurCommunity from '$lib/components/homepage/BeAPartOfOurCommunity.svelte';
	import DontBeAStranger from '$lib/components/homepage/DontBeAStranger.svelte';
	import ExploreDrBerg from '$lib/components/homepage/ExploreDrBerg.svelte';
	import InTheSpotlight from '$lib/components/homepage/InTheSpotlight.svelte';
	import NewestProducts from '$lib/components/homepage/NewestProducts.svelte';
	import ProductSection from '$lib/components/homepage/ProductSection.svelte';
	import RecommendedProducts from '$lib/components/homepage/RecommendedProducts.svelte';
	import Reviews from '$lib/components/homepage/Reviews.svelte';
	import Subscribe from '$lib/components/homepage/Subscribe.svelte';
	import SuccessStories from '$lib/components/homepage/SuccessStories.svelte';
	import { onMount } from 'svelte';
	let data = null;

	onMount(async () => {
		const query = `
    {
      cmsPage(identifier: "home") {
        identifier
        url_key
        title
        content
        content_heading
        page_layout
        meta_title
        meta_description
        meta_keywords
      }
    }
    `;

		const res = await fetch('https://uat.drberg-aws2.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query })
		});

		data = await res.json();
	});
</script>

<div class="width-1260">
	<ExploreDrBerg />
	<ProductSection />
	<NewestProducts />
	<DontBeAStranger />
	<RecommendedProducts />
	<SuccessStories />
	<InTheSpotlight />
	<BeAPartOfOurCommunity />
	<Reviews />
	<Subscribe />
</div>
