<script>
	import { slide, fade } from 'svelte/transition';

	import Icons from '$lib/components/global/icons.svelte';
	import SelectProductType from './SelectProductType.svelte';

	let showMobileProductTypes = false;
	let selectedTypes = [];

	const categories = [
		{
			name: 'All Products',
			url: '#!',
			totalItem: 76,
			tag: ''
		},
		{
			name: 'Supplements',
			url: '#!',
			totalItem: 47,
			tag: ''
		},
		{
			name: 'Powders',
			url: '#!',
			totalItem: 15,
			tag: ''
		},
		{
			name: 'Bundles',
			url: '#!',
			totalItem: 15,
			tag: ''
		},
		{
			name: 'Books',
			url: '#!',
			totalItem: 5,
			tag: ''
		},
		{
			name: 'Digital Programs',
			url: '#!',
			totalItem: 4,
			tag: ''
		},
		{
			name: 'Immune',
			url: '#!',
			totalItem: 5,
			tag: ''
		},
		{
			name: 'Beauty',
			url: '#!',
			totalItem: 8,
			tag: 'New'
		},
		{
			name: 'Deals',
			url: '#!',
			totalItem: 8,
			tag: 'Hot'
		}
	];

	const types = [
		{
			name: 'Powders',
			url: '#!',
			totalItem: 15,
			tag: ''
		},
		{
			name: 'Liquid',
			url: '#!',
			totalItem: 15,
			tag: ''
		},
		{
			name: 'Capsules',
			url: '#!',
			totalItem: 5,
			tag: ''
		},
		{
			name: 'Tablets',
			url: '#!',
			totalItem: 4,
			tag: ''
		},
		{
			name: 'Tea',
			url: '#!',
			totalItem: 5,
			tag: ''
		},
		{
			name: 'Physical product',
			url: '#!',
			totalItem: 8,
			tag: 'New'
		}
	];

	const handleTypeSelect = ({ detail }) => {
		selectedTypes = [...detail];
	};

	const removeSelectedType = ({ detail }) => {
		selectedTypes.splice(selectedTypes.indexOf(selectedTypes.find((el) => el === detail)), 1);
		selectedTypes = [...selectedTypes];
	};
</script>

<section>
	<button
		class="text-gray-darkest font-bold py-1 px-2.5 bg-gray-lighter border border-gray-base rounded-r-sm md:hidden"
		on:click={() => (showMobileProductTypes = true)}>Shop By</button
	>

	<!-- CATEGORIES -->
	<div class="bg-[#0132530d] p-4 rounded-sm mt-8">
		<h3 class="font-bold">SHOP CATEGORIES</h3>

		<div class="pt-3 space-y-4 px-2">
			{#each categories as item}
				<a
					href={item.url}
					class="flex justify-start items-center text-sm font-bold text-primary-100"
				>
					<span>{item.name}</span>
					{#if item.totalItem}
						<span class="text-secondary-100 font-normal px-1">({item.totalItem})</span>
					{/if}
					{#if item.tag}
						<span
							class="bg-secondary-a-100 text-white uppercase px-1.5 py-0.5 text-[.625rem] transform translate-x-1 rounded-sm h-5 flex justify-center items-center"
							>{item.tag}</span
						>
					{/if}
				</a>
			{/each}
		</div>
	</div>

	<!-- selected types -->
	<div class="text-sm mt-6">
		{#if selectedTypes.length > 0}
			<h4 class="font-bold">Now shopping by</h4>
		{:else}
			<h4 class="font-bold">Shopping Options</h4>
		{/if}

		<div class="space-y-2 mt-6">
			{#each selectedTypes as item, i}
				<div transition:slide={{ duration: 300 }} class="flex justify-start items-center space-x-2">
					<button class="-mt-1" on:click={() => removeSelectedType(item)}
						><Icons name="cross" classList="h-3 text-gray-base removeTypebtn" /></button
					>

					<span>
						<span class="font-bold">Products Type:</span>
						<span>{item}</span>
					</span>
				</div>
			{/each}

			{#if selectedTypes.length > 0}
				<button class="mt-6 text-secondary-100" on:click={() => (selectedTypes = [])}
					>Clear All</button
				>
			{/if}
		</div>
	</div>

	<!-- Product Types mobile -->
	{#if showMobileProductTypes}
		<div class="md:hidden fixed top-0 left-0 w-screen h-screen bg-white z-50">
			<div class="p-4 flex justify-between items-center border-b">
				<h3 class="font-bold">Shopping Options</h3>

				<button class="p-2" on:click={() => (showMobileProductTypes = false)}>
					<Icons name="cross" />
				</button>
			</div>

			<SelectProductType {types} on:handleTypeSelect={handleTypeSelect} />
		</div>
	{/if}

	<!-- desktop product types -->
	<div class="hidden md:block">
		<SelectProductType {types} on:handleTypeSelect={handleTypeSelect} />
	</div>
</section>

<style>
	.removeTypebtn:hover .removeTypebtn ~ span {
		@apply opacity-50;
	}
</style>
