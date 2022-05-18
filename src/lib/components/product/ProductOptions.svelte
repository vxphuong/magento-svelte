<script>
	import { createEventDispatcher } from 'svelte';

	const productOptions = [
		{
			unit: 1,
			unitType: 'bottle',
			price: 26.99,
			discount: 18.97
		},
		{
			unit: 3,
			unitType: 'bottles',
			price: 25.99,
			discount: 21.98
		}
	];

	let selectedOption = productOptions[0];

	const dispatch = createEventDispatcher();
	const onSelectItem = (item) => {
		dispatch('onSelectActivityLevel', item);
	};
</script>

<div class="pt-6">
	<p class="text-xs uppercase font-bold">Product Options</p>

	{#each productOptions as item, i}
		<div class="mt-4 flex justify-start items-start relative">
			<input
				id={'product-option-' + (i + 1)}
				type="radio"
				name="product-options"
				checked={selectedOption === item}
				bind:value={selectedOption}
				on:change={() => onSelectItem(item)}
				class="h-6 w-6 z-[1] absolute top-0 left-0 opacity-0"
			/>

			<span>
				<span
					class="ml-2 h-3 w-3 inline-block ring-1 ring-offset-[4px] ring-primary-100 rounded-full relative z-0 bg-white mr-4"
				/>
			</span>

			<label for={'product-option-' + (i + 1)} class="">
				<span class="text-sm">{item.unit} {item.unitType}</span>

				<span class="text-sm text-secondary-100">(${item.price}/unit)</span>
				<span class="bg-primary-40 text-white text-xs font-medium rounded px-2 py-1"
					>-{item.discount}%</span
				>
			</label>
		</div>
	{/each}
</div>

<style>
	input[type='radio']:checked ~ span span {
		@apply bg-primary-100;
	}
</style>
