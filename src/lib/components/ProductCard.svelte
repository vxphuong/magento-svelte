<script>
	import Icons from '$lib/components/global/icons.svelte';

	export let data = null;

	export let addToCartBtn = false;
</script>

<div class="relative rounded-xl border-2 border-gray-100 hover:border-[#58bccc4d]">
	<!-- Add to Wish List -->
	<button class="absolute top-4 left-4 group z-10">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 hover:fill-gray-900"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>

		<span
			class="hidden px-2 py-1.5 bg-gray-900 text-white text-xs group-hover:block absolute top-6 left-6 whitespace-nowrap"
			>Add to Wish List</span
		>
	</button>

	<!-- Image -->
	<div class="mx-5 aspect-w-10 aspect-h-11">
		<img src={data.image} alt="" class="w-full object-contain object-center" />
	</div>

	<div class="px-4 pb-6">
		<!-- stars and reviews -->
		<div class="flex flex-wrap justify-start items-center space-x-2">
			<!-- stars -->
			<div class="text-[#e2bf30] flex justify-start items-center space-x-0.5">
				<Icons name="star" classList="h-4 w-4" />
				<Icons name="star" classList="h-4 w-4" />
				<Icons name="star" classList="h-4 w-4" />
				<Icons name="star" classList="h-4 w-4" />
				<Icons name="star" classList="h-4 w-4" />
				<span class="text-primary-100 font-semibold">{data.stars}</span>
			</div>

			<a href="#!" class="text-secondary-100 text-sm font-semibold whitespace-nowrap"
				>| {data.review} Reviews</a
			>
		</div>

		<!-- title -->
		<div class="min-h-[3rem] my-2.5">
			<a href="#!" class="text-primary-100 font-semibold text-lg">{data.title}</a>
		</div>

		<!-- Limited quantity -->
		{#if data.limitedQty}
			<div class="flex justify-start items-center space-x-2 pb-5 pt-5">
				<img src="/images/homepage/limitedQty.svg" alt="" />
				<span class="text-primary-cta-100 text-sm font-bold">Limited quantity</span>
			</div>
		{/if}

		<!-- price -->
		<div>
			<div class="text-primary-100 text-xs mb-1">
				<span class="line-through">${data.regularPrice}</span>
				<span class="px-1"> -{data.discountPercent} </span>
			</div>
			<span class="text-primary-100 font-bold">${data.currentPrice}</span>
		</div>

		<!-- buttons -->
		<div class="mt-7">
			{#if addToCartBtn}
				<button
					class="w-full py-3.5 border-2 border-secondary-a-100 rounded-sm text-secondary-a-100 font-bold hover:bg-secondary-a-100 hover:text-white transition-all duration-500 ease-in-out uppercase font-roboto"
					>Add to cart</button
				>
			{:else}
				<a href="#!" class="text-secondary-100 font-bold text-sm underline hover:no-underline"
					>View details »</a
				>
			{/if}
		</div>
	</div>
</div>
