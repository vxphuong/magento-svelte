<script>
	import Icons from '$lib/components/global/icons.svelte';

	let currentPage = 1;
</script>

<section class="flex justify-center md:justify-start items-center space-x-4 md:space-x-6 py-6 ">
	<button
		class="text-sm px-0.5 md:px-6 py-2 rounded text-white bg-secondary-100 font-bold flex justify-center items-center"
	>
		<Icons name="chevron-left" classList="h-4 w-4" />
		<span class="hidden md:inline">Prev</span>
	</button>

	<button class="text-sm {currentPage === 1 && 'font-bold'}">1</button>
	<button class="text-sm {currentPage === 2 && 'font-bold'}">2</button>
	<button class="text-sm {currentPage === 3 && 'font-bold'}">3</button>
	<button class="text-sm {currentPage === 4 && 'font-bold'}">4</button>

	<button
		class="text-sm px-0.5 md:px-6 py-2 rounded text-white bg-secondary-100 font-bold flex justify-center items-center"
	>
		<span class="hidden md:inline">Next</span>
		<Icons name="chevron-right" classList="h-4 w-4" />
	</button>
</section>
