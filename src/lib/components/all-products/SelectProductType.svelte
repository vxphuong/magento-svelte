<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';

	import Icons from '$lib/components/global/icons.svelte';

	export let types = [];
	let selectedTypes = [];

	const dispatch = createEventDispatcher();

	let expandTypes = false;

	$: dispatch('handleTypeSelect', selectedTypes);

	const handelChecked = (e) => {
		if (e.target.checked) {
			dispatch('addType', e.target.value);
		} else {
			dispatch('removeType', e.target.value);
		}

		console.log(selectedTypes);
	};
</script>

<div class="p-4 md:rounded-sm md:mt-8 md:border rounded">
	<button
		class=" font-bold flex justify-between items-center w-full"
		on:click={() => (expandTypes = !expandTypes)}
	>
		<span>Product Type</span>
		<span class="transform custom-transition {expandTypes ? 'rotate-0' : 'rotate-180'}">
			<Icons name="chevron" />
		</span>
	</button>

	{#if expandTypes}
		<div transition:slide={{ duration: 300 }} class="space-y-6 mt-4">
			{#each types as item, i}
				<div
					class="relative flex justify-start items-center space-x-6 md:space-x-4 text-gray-darker md:-ml-4"
				>
					<input
						type="checkbox"
						id="type-{i}"
						name="type-{i}"
						value={item.name}
						bind:group={selectedTypes}
						class="h-4 w-4 absolute top-.5 left-6 z-10 cursor-pointer opacity-0"
					/>
					<span
						class="h-4 w-4 border border-gray-dark flex justify-center items-center rounded-sm text-white"
					>
						<Icons name="check-sign" classList="h-3.5" />
					</span>
					<label for="type-{i}" class="text-sm cursor-pointer whitespace-nowrap"
						>{item.name} ({item.totalItem})</label
					>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	input[type='checkbox']:checked ~ span {
		@apply bg-[#0091a8];
	}
</style>
