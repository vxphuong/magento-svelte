<script>
	// @ts-nocheck

	import ShopCategories from '$lib/components/all-products/ShopCategories.svelte';
	import Breadcrumb from '$lib/components/global/Breadcrumb.svelte';
	import Icons from '$lib/components/global/icons.svelte';

	let expandPerpage = false;
	let expandSort = false;
	const perpageOptions = [9, 15, 30, 40];
	const sortOptions = ['Product Name'];

	const breadcrumb = [
		{
			title: 'Product Slug',
			url: '#!'
		}
	];
</script>

<div class="width-1260 px-4">
	<Breadcrumb links={breadcrumb} />

	<div class="md:grid grid-cols-12 gap-x-6">
		<!-- Shop Categries -->
		<div class="col-start-1 col-end-4">
			<ShopCategories />
		</div>

		<!-- All Products -->
		<div class="col-start-4 col-end-13">
			<h1 class="text-4xl text-primary-100">All Products</h1>

			<div>
				<!-- per page -->
				<div>
					<p>Display</p>
					<div class="relative">
						<button
							class=" font-bold flex justify-between items-center w-full"
							on:click={() => (expandPerpage = !expandPerpage)}
						>
							<span>Product Type</span>
							<span class="transform custom-transition {expandPerpage ? 'rotate-0' : 'rotate-180'}">
								<Icons name="chevron" />
							</span>
						</button>

						<!-- options -->
						{#if expandPerpage}
							<div
								class="absolute top-full left-0 w-44 rounded-xl bg-gray-lighter shadow-md border"
							>
								{#each perpageOptions as item}
									<button class="px-4 py-2 hover:bg-secondary-20 w-full">{item} per page</button>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
