<script>
	import Icons from '$lib/components/global/icons.svelte';
	import { fly } from 'svelte/transition';
	import MobileSideMenu from './MobileSideMenu.svelte';
	import Search from './Search.svelte';

	let showMenu = false;
	let showSearchBox = false;

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

	const toggleMenu = () => {
		showMenu = !showMenu;
	};

	const toggleSearchBox = () => {
		showSearchBox = !showSearchBox;
	};
</script>

<header class="relative bg-white pb-3">
	<div class="px-5 lg:px-8">
		<!-- header line one -->
		<div class="flex justify-between items-center border-b lg:border-none py-2">
			<div class="flex justify-start items-center">
				<button class="header-icon-btn mr-4" on:click={toggleMenu}>
					<Icons name="menu" />
				</button>

				<a href="/" class="mr-16">
					<img src="/images/logo.svg" alt="" class="hidden lg:block h-12" />
					<img src="/images/logo-small.svg" alt="" class="lg:hidden h-10" />
				</a>

				<button
					class="hidden xl:flex justify-start items-center space-x-1.5 border w-auto 2xl:w-[30rem] py-2 px-6 bg-gray-lighter hover:bg-gray-light rounded-3xl"
					on:click={toggleSearchBox}
				>
					<Icons name="search" />
					<span class="text-gray-darker">Search for Dr. Berg health products</span>
				</button>
			</div>

			<div class="flex justify-end items-center space-x-3 xl:space-x-1">
				<button
					class="lg:hidden h-8 w-8 md:h-11 md:w-11 bg-none hover:bg-primary-5 rounded-full p-1 flex justify-center items-center transition duration-300 ease-in-out"
				>
					<Icons name="search" />
				</button>

				<button
					class="hidden h-11 w-11 bg-none hover:bg-primary-5 rounded-full p-1 xl:flex justify-center items-center transition duration-300 ease-in-out"
				>
					<Icons name="nine-dots" />
				</button>

				<button
					class="hidden h-11 w-11 bg-none hover:bg-primary-5 rounded-full p-1 xl:flex justify-center items-center transition duration-300 ease-in-out"
				>
					<Icons name="info" />
				</button>

				<button
					class="hidden h-11 w-11 bg-none hover:bg-primary-5 rounded-full p-1 xl:flex justify-center items-center transition duration-300 ease-in-out"
				>
					<Icons name="love-outline" />
				</button>

				<button class="header-icon-btn">
					<Icons name="avatar" />
				</button>

				<button class="header-icon-btn">
					<Icons name="cart" />
				</button>
			</div>
		</div>

		<!-- header line Two -->
		<div class="hidden lg:block">
			<div class="flex flex-row justify-start items-center space-x-6 pl-12 pt-4 2xl:space-x-8">
				{#each navList as item}
					<a
						href={item.url}
						class="flex justify-center items-center text-lg lg:text-base font-bold text-primary-100"
					>
						<span>{item.name}</span>
						{#if item.totalItem}
							<span class="lg:hidden">({item.totalItem})</span>
						{/if}
						{#if item.tag}
							<span
								class="bg-secondary-a-100 text-white px-1 py-0.5 text-[.625rem] transform -translate-y-1 translate-x-1 rounded-lg h-4 flex justify-center items-center"
								>{item.tag}</span
							>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Mobile side bar -->
	{#if showMenu}
		<div
			transition:fly={{ duration: 500 }}
			class="fixed top-0 left-0 h-screen w-screen z-50 lg:pr-[60%] bg-gray-darkest bg-opacity-60"
		>
			<MobileSideMenu on:close={toggleMenu} />
		</div>
	{/if}

	<!-- search modal -->
	{#if showSearchBox}
		<div
			transition:fly={{ duration: 500 }}
			class="fixed top-0 left-0 h-screen w-screen z-50 lg:pr-[60%] bg-gray-darkest bg-opacity-60"
		>
			<Search on:close={toggleSearchBox} />
		</div>
	{/if}
</header>

<style>
	.header-icon-btn {
		@apply h-8 w-8 md:h-11 md:w-11 bg-none hover:bg-primary-5 rounded-full p-1 xl:flex justify-center items-center transition duration-300 ease-in-out;
	}
</style>
