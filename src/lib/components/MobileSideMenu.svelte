<script>
	// @ts-nocheck

	import Icons from '$lib/components/global/icons.svelte';
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from '../js/clickOutside';

	const dispatch = createEventDispatcher();

	const navList = [
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
			totalItem: null,
			tag: 'Hot'
		}
	];

	const closeMenu = () => {
		console.log('test');
		dispatch('close');
	};

	const handleClickOutside = () => {
		dispatch('close');
	};
</script>

<div use:clickOutside on:click_outside={handleClickOutside} class="h-screen w-full bg-white">
	<!-- search and cross button -->
	<div class="grid grid-cols-5 px-5 pt-6 pb-8">
		<button
			class="col-start-1 col-end-5 flex justify-start items-center space-x-1.5 py-3 px-6 bg-gray-lighter hover:bg-gray-light rounded-3xl lg:hidden"
		>
			<Icons name="search" />
			<span class="text-gray-darker truncate">Search for Dr. Berg health products</span>
		</button>

		<button class="col-start-6 px-2 lg:col-start-1 lg:col-end-2 lg:ml-8" on:click={closeMenu}>
			<Icons name="cross" />
		</button>

		<a href="/" class="mr-16 lg:col-start-2 lg:col-end-6 hidden lg:block">
			<img src="/images/logo-small.svg" alt="" class="h-16" />
		</a>
	</div>

	<!-- nav Items -->
	<div class="lg:grid grid-cols-5 px-5">
		<div
			class="flex flex-col justify-start items-start space-y-4 pt-4 lg:col-start-2 lg:col-end-6 lg:space-y-6"
		>
			{#each navList as item}
				<a
					href={item.url}
					class="flex justify-center items-center text-xl font-bold text-primary-100"
				>
					<span>{item.name}</span>
					{#if item.totalItem}
						<span class="lg:hidden">({item.totalItem})</span>
					{/if}
					{#if item.tag}
						<span
							class="bg-secondary-a-100 text-white px-1 py-0.5 text-[.625rem] transform -translate-y-1 translate-x-1 rounded-lg h-5 flex justify-center items-center"
							>{item.tag}</span
						>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</div>
