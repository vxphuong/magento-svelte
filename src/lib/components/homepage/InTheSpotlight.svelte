<script>
	import ProductCard from '../ProductCard.svelte';

	const data = [
		{
			slug: '',
			title: 'Nutritional Yeast Tablets',
			stars: 4.6,
			review: 2242,
			regularPrice: 33.31,
			discountPercent: 19.97,
			currentPrice: 26.99,
			limitedQty: false,
			image: '/images/homepage/1.webp'
		},
		{
			slug: '',
			title: 'Nutritional Yeast Tablets',
			stars: 4.6,
			review: 2242,
			regularPrice: 33.31,
			discountPercent: 19.97,
			currentPrice: 26.99,
			limitedQty: false,
			image: '/images/homepage/2.webp'
		},
		{
			slug: '',
			title: 'Nutritional Yeast Tablets',
			stars: 4.6,
			review: 2242,
			regularPrice: 33.31,
			discountPercent: 19.97,
			currentPrice: 26.99,
			limitedQty: false,
			image: '/images/homepage/3.webp'
		},
		{
			slug: '',
			title: 'Nutritional Yeast Tablets',
			stars: 4.6,
			review: 2242,
			regularPrice: 33.31,
			discountPercent: 19.97,
			currentPrice: 26.99,
			limitedQty: false,
			image: '/images/homepage/4.webp'
		},
		{
			slug: '',
			title: 'Nutritional Yeast Tablets',
			stars: 4.6,
			review: 2242,
			regularPrice: 33.31,
			discountPercent: 19.97,
			currentPrice: 26.99,
			limitedQty: false,
			image: '/images/homepage/4.webp'
		}
	];
</script>

<section class="pt-8 lg:pt-5 px-4 xl:px-0 pb-12">
	<h2 class="text-xl font-bold uppercase text-[#333]">IN THE SPOTLIGHT</h2>

	<div class="mt-8 md:grid grid-cols-2 lg:grid-cols-5 gap-4 space-y-6 md:space-y-0">
		{#each data as item}
			<ProductCard data={item} addToCartBtn={true} />
		{/each}
	</div>
</section>
