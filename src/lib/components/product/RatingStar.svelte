<script>
	import Icons from '../global/icons.svelte';

	export let noOfStar = 1;
</script>

<div class="flex justify-start items-center text-primary-100">
	<Icons name="star" classList="h-6 w-6 fill-currentColor" />

	{#if noOfStar > 1}
		<Icons name="star" classList="h-6 w-6 fill-currentColor" />
	{/if}

	{#if noOfStar > 2}
		<Icons name="star" classList="h-6 w-6 fill-currentColor" />
	{/if}
	{#if noOfStar > 3}
		<Icons name="star" classList="h-6 w-6 fill-currentColor" />
	{/if}
	{#if noOfStar > 4}
		<Icons name="star" classList="h-6 w-6 fill-currentColor" />
	{/if}
</div>
