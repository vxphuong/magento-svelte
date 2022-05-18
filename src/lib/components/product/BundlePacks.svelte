<script>
	const bundlePacks = [
		{
			name: 'Intermittent Fasting Nutrients Bundle',
			regularPrice: 128.81,
			discountPercent: 25.53,
			discountPrice: 95.92,
			products: [
				{
					name: 'Electrolyte Powder Raspberry',
					qty: 1,
					regularPrice: 48.65,
					discountPercent: 25.53,
					discountPrice: 32.29,
					image: '/images/product/product-1.jpg'
				},
				{
					name: 'Nutritional Yeast Tablet',
					qty: 1,
					regularPrice: 33.31,
					discountPercent: 25.53,
					discountPrice: 25.64,
					image: '/images/product/product-2.jpg'
				},
				{
					name: 'Keto Essential Aminos',
					qty: 1,
					regularPrice: 46.85,
					discountPercent: 25.53,
					discountPrice: 37.99,
					image: '/images/product/product-3.jpg'
				}
			]
		},
		{
			name: 'Stress Relief Bundle',
			regularPrice: 128.21,
			discountPercent: 21.48,
			discountPrice: 100.67,
			products: [
				{
					name: 'Nutritional Yeast Tablets',
					qty: 1,
					regularPrice: 33.31,
					discountPercent: 21.48,
					discountPrice: 25.64,
					image: '/images/product/product-1.jpg'
				},
				{
					name: 'Adrenal & Cortisol Suppor',
					qty: 1,
					regularPrice: 44.95,
					discountPercent: 21.48,
					discountPrice: 35.14,
					image: '/images/product/product-2.jpg'
				},
				{
					name: 'Sleep Aid',
					qty: 1,
					regularPrice: 49.95,
					discountPercent: 28.26,
					discountPrice: 39.89,
					image: '/images/product/product-4.jpg'
				}
			]
		},
		{
			name: 'Hair Enhanced Kit',
			regularPrice: 23.34,
			discountPercent: 28.26,
			discountPrice: 165.25,
			products: [
				{
					name: 'Keto Essential Aminos',
					qty: 1,
					regularPrice: 46.85,
					discountPercent: 28.26,
					discountPrice: 37.99,
					image: '/images/product/product-3.jpg'
				},
				{
					name: 'Nutritional Yeast Tablet',
					qty: 1,
					regularPrice: 33.31,
					discountPercent: 28.26,
					discountPrice: 25.64,
					image: '/images/product/product-2.jpg'
				},
				{
					name: 'Trace Minerals Enhanced',
					qty: 1,
					regularPrice: 47.29,
					discountPercent: 28.26,
					discountPrice: 35.14,
					image: '/images/product/product-1.jpg'
				},
				{
					name: 'Hair Formula',
					qty: 1,
					regularPrice: 47.29,
					discountPercent: 28.26,
					discountPrice: 35.14,
					image: '/images/product/product-4.jpg'
				},
				{
					name: 'Scalp & Hair Follicle Serum',
					qty: 1,
					regularPrice: 47.29,
					discountPercent: 28.26,
					discountPrice: 35.14,
					image: '/images/product/product-5.webp'
				}
			]
		}
	];
</script>

<section id="bundlePacks">
	<h4 class="text-sm font-bold uppercase">Bundle Packs</h4>

	<div class="space-y-4 mt-4">
		{#each bundlePacks as item, i}
			<div class="border border-gray-light rounded-sm p-6 xl:grid grid-cols-12 gap-x-16">
				<!-- images -->
				<div class="flex justify-between items-center space-x-2 col-start-1 col-end-6">
					{#each item.products as product, z}
						<div>
							<img src={product.image} alt="" />
						</div>

						{#if item.products.length > z + 1}
							<span class="text-3xl font-bold text-secondary-100">+</span>
						{/if}
					{/each}
				</div>

				<!-- detail -->
				<div class="px-7 mt-6 col-start-6 col-end-10">
					<h3 class="text-sm font-bold text-primary-100">{item.name}</h3>

					<div class="space-y-1 mt-1">
						{#each item.products as el}
							<div class="text-sm text-primary-100">
								<span class="font-bold">{el.qty} x </span>
								<span>{el.name} </span>
								<span class="text-gray-base line-through">${el.regularPrice} </span>
								<span>${el.discountPrice}</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- price -->
				<div
					class="text-center xl:text-right mt-8 col-start-10 col-end-13 xl:flex flex-col justify-center items-end"
				>
					<div class="text-sm">
						<span class="text-gray-base line-through">${item.regularPrice}</span>
						<span class="px-4 py-1 bg-secondary-a-100 text-white rounded-2xl"
							>{item.discountPercent}%</span
						>
					</div>

					<span class="my-2 inline-block text-3xl font-bold text-primary-100"
						>${item.discountPrice}</span
					>

					<button
						class="w-full py-2.5 bg-white rounded text-secondary-a-100 uppercase hover:bg-secondary-a-100 hover:text-white font-bold border-2 border-secondary-a-100 custom-transition"
						>Add this bundle to Cart</button
					>
				</div>
			</div>
		{/each}
	</div>
</section>
