<script>
	import Icons from '$lib/components/global/icons.svelte';

	export let data = {};

	let showShareOptions = false;
</script>

<section>
	<div class="py-4 lg:px-4 border-b text-sm">
		<div class="md:flex justify-start space-x-4">
			<div class="flex justify-start items-center space-x-4 w-full">
				<div class="text-[#e2bf30] flex justify-start items-center space-x-0.5">
					<Icons name="star" classList="h-5 w-5" />
					<Icons name="star" classList="h-5 w-5" />
					<Icons name="star" classList="h-5 w-5" />
					<Icons name="star" classList="h-5 w-5" />
					<Icons name="star" classList="h-5 w-5" />
				</div>

				<p class="font-semibold">{data.name}</p>
				<p>{data.address}</p>

				<span class="text-secondary-100 md:flex justify-start items-center space-x-1 hidden">
					<Icons name="check-round" />
					<span>Varified Buyer</span>
				</span>
			</div>

			<div class="flex justify-between items-center mt-2 md:mt-0 ">
				<span class="md:hidden text-secondary-100 flex justify-start items-center space-x-1">
					<Icons name="check-round" />
					<span>Varified Buyer</span>
				</span>

				<p class="ml-auto">{data.date}</p>
			</div>
		</div>

		<p class="mt-4">{data.text}</p>

		<!-- buttons -->
		<div class="mt-4">
			<div class="flex justify-between items-center">
				<!-- share -->
				<button
					class="flex justify-center items-center px-2 md:px-6 py-1.5 border border-secondary-100 rounded-sm text-secondary-100 uppercase space-x-1 hover:bg-secondary-100 hover:text-white custom-transition"
					on:click={() => (showShareOptions = !showShareOptions)}
				>
					<Icons name="share" />
					<span>share</span>
				</button>

				<!-- Helpful -->
				<div class="flex justify-end items-center space-x-2">
					<span class="font-bold text-secondary-100">Was this review helpful?</span>

					<div class="flex justify-end items-stretch">
						<button
							class="flex justify-center items-center space-x-1 px-2 py-1 text-sm bg-secondary-100 text-white rounded"
						>
							<Icons name="like" />
							<span>{data.isHelpful}</span>
						</button>

						<button
							class="flex justify-center items-center space-x-1 px-2 py-1 text-sm bg-gray-base text-white rounded"
						>
							<span class="transform -rotate-180">
								<Icons name="like" />
							</span>
							<span>{data.isHelpful}</span>
						</button>
					</div>
				</div>
			</div>

			<!-- share social media button -->
			{#if showShareOptions}
				<div class="mt-3">
					<button>
						<img src="/images/fb.webp" alt="" class="h-8" />
					</button>
					<button>
						<img src="/images/tweet.webp" alt="" class="h-8" />
					</button>
					<button>
						<img src="/images/in.webp" alt="" class="h-8" />
					</button>
				</div>
			{/if}
		</div>
	</div>
</section>
