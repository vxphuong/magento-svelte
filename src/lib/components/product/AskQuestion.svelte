<script>
	import Icons from '../global/icons.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="bg-gray-lighter rounded pb-2 mt-4">
	<div class="px-4 py-3 w-full flex justify-between items-center bg-secondary-100 rounded">
		<span class="text-xs font-medium">ASK A QUESTION</span>

		<button class="p-1.5" on:click={() => dispatch('close')}>
			<Icons name="cross" />
		</button>
	</div>

	<div class="py-4 px-2 md:px-4">
		<textarea
			placeholder="Your answer here..."
			class="border w-full h-36 p-2 mt-2 placeholder:text-gray-900"
		/>

		<div
			class="mt-2 flex flex-col md:flex-row justify-between items-stretch space-y-2 md:space-y-0 md:space-x-1"
		>
			<input
				type="text"
				placeholder="Name"
				class="w-full px-2 py-3 border placeholder:text-gray-900"
			/>
			<input
				type="email"
				placeholder="Email"
				class="w-full px-2 py-3 border placeholder:text-gray-900"
			/>
			<button
				class="w-full md:w-1/3 px-8 p-3 md:py-1.5 rounded-sm bg-secondary-100 text-white font-bold"
				>SUBMIT</button
			>
		</div>

		<p class="mt-2 text-sm text-primary-100">
			We will send a verification email to confirm your answer. All responses are subject to store
			approval.
		</p>
	</div>
</div>
