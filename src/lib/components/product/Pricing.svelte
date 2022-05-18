<script>
	import OneTimePurchaseRadioButton from '$lib/components/product/OneTimePurchaseRadioButton.svelte';
	import Icons from '../global/icons.svelte';
	import ProductOptions from './ProductOptions.svelte';

	const productOptions = [
		{
			minPurchase: 1,
			unit: 'bottle',
			price: 26.99,
			discountPercent: 18.97
		}
	];
</script>

<section>
	<div class="mt-8 border-2 border-primary-100 px-4 py-6 rounded-md">
		<OneTimePurchaseRadioButton />
		<ProductOptions />

		<!-- buttons -->
		<div class="mt-6 flex flex-col justify-center items-center space-y-2">
			<button
				class=" w-full py-2.5 bg-[#f9a13d] rounded text-white uppercase hover:bg-white hover:text-[#f9a13d] font-bold border-2 border-[#f9a13d] custom-transition"
				>Add to Cart</button
			>

			<button class="hidden group md:flex justify-center items-center">
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

				<span class="px-1 py-1.5 text-xs whitespace-nowrap">Add to favorites</span>
			</button>
		</div>
	</div>

	<div class="px-4 py-6">
		<p class="text-xs text-black">This product can be purchased also in package bundles</p>

		<a href="#!" class="text-sm text-secondary-a-100 flex justify-start space-x-1 mt-2">
			<Icons name="chevron" classList="h-6 w-6" />
			<span> See active bundles (4) </span>
		</a>
	</div>
</section>
