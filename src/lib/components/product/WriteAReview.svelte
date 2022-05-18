<script>
	import Icons from '../global/icons.svelte';
	import { createEventDispatcher } from 'svelte';
	import RatingStar from './RatingStar.svelte';

	const dispatch = createEventDispatcher();

	let selectedRating = null;
	const ratings = [1, 2, 3, 4, 5];

	const onChecked = (e) => {
		selectedRating = e.target.value;
	};
</script>

<div class="bg-gray-lighter rounded pb-2 mt-6">
	<div class="px-4 py-3 w-full flex justify-between items-center bg-secondary-100 rounded">
		<span class="text-xs font-medium">WRITE A REVIEW</span>

		<button class="p-1.5" on:click={() => dispatch('close')}>
			<Icons name="cross" />
		</button>
	</div>

	<div class="py-4 px-2 md:px-4">
		<!-- Rating -->
		<div class="flex justify-start items-center">
			<p>Rating</p>

			<div class="pl-4 md:flex justify-start items-center space-x-7">
				{#each ratings as rating, i}
					<div class="flex justify-start items-center relative">
						<input
							id="item-{i}"
							type="radio"
							name="rating"
							value={rating}
							checked={selectedRating === rating}
							on:change={onChecked}
							class="h-6 w-6 z-[1] absolute top-0 left-0 opacity-0"
						/>

						<span class="">
							<span
								class="h-3.5 w-3.5 inline-block ring-1 ring-offset-[3px] ring-primary-100 rounded-full relative z-0 bg-white mr-4"
							/>
						</span>

						<label for="item-{i}" class="flex flex-col space-y-[6px] pb-1">
							<RatingStar noOfStar={rating} />
						</label>
					</div>
				{/each}
			</div>
		</div>

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

<style>
	input[type='radio']:checked ~ span span {
		@apply bg-secondary-100;
	}
</style>
