<script>
	import Icons from '$lib/components/global/icons.svelte';
	import AskQuestion from './AskQuestion.svelte';
	import ProductReviews from './ProductReviews.svelte';
	import Questions from './Questions.svelte';
	import StarsAndReviews from './StarsAndReviews.svelte';
	import WriteAReview from './WriteAReview.svelte';

	let showMobileButtons = false;
	let showSortList = false;
	let selectedTab = 'reviews';
	let selectedSort = 'Highest Rating';
	let showAskQuestion = false;
	let showWriteReviewBox = false;

	const sortOptions = ['Most Recent', 'Highest Rating', 'Lowest Rating', 'Most Votes', 'Has Photo'];

	const setSort = (item) => {
		selectedSort = item.name;
		showSortList = false;
	};
</script>

<section id="reviews" class="pt-12 xl:px-4">
	<!-- heading -->
	<div class="bg-secondary-100 text-white flex flex-col justify-between p-4 xl:px-6">
		<div class="flex justify-between items-center">
			<h4 class=" flex justify-start items-center space-x-2">
				<span>Authentic Reviews By</span>
				<img src="/images/product/widget_logo.webp" alt="" />
			</h4>

			<button class="md:hidden" on:click={() => (showMobileButtons = !showMobileButtons)}>
				<Icons name="menu" />
			</button>

			<div class="hidden md:flex justify-end items-center space-x-8">
				<button
					class="text-xs font-semibold px-4 py-1 uppercase"
					on:click={() => (showAskQuestion = true)}>Ask Question</button
				>
				<button
					class="text-xs font-semibold px-4 py-1 uppercase"
					on:click={() => (showWriteReviewBox = true)}>Write a review</button
				>
			</div>
		</div>

		{#if showMobileButtons}
			<div class="flex flex-col space-y-6 xl:space-x-6 pt-8 pb-4">
				<button
					class="text-xs font-semibold px-4 py-1 uppercase"
					on:click={() => (showAskQuestion = true)}>Ask Question</button
				>
				<button
					class="text-xs font-semibold px-4 py-1 uppercase"
					on:click={() => (showWriteReviewBox = true)}>Write a review</button
				>
			</div>
		{/if}
	</div>

	<div class="px-2 md:px-4">
		<!-- stars and reviews -->
		<StarsAndReviews />

		{#if showAskQuestion}
			<AskQuestion
				on:close={() => {
					showAskQuestion = false;
				}}
			/>
		{/if}

		{#if showWriteReviewBox}
			<WriteAReview
				on:close={() => {
					showWriteReviewBox = false;
				}}
			/>
		{/if}

		<!-- Tabs -->
		<div class="mt-4 md:flex justify-between border-b pb-2">
			<div class="space-x-10">
				<button
					class="text-sm font-bold pb-1.5 border-b-[3px] {selectedTab === 'reviews'
						? 'border-primary-100'
						: 'border-transparent'}"
					on:click={() => (selectedTab = 'reviews')}>Product Reviews (738)</button
				>
				<button
					class="text-sm font-bold pb-1.5 border-b-[3px] {selectedTab === 'questions'
						? 'border-primary-100'
						: 'border-transparent'}"
					on:click={() => (selectedTab = 'questions')}>Questions (17)</button
				>
			</div>

			<!-- sort -->
			<div class="relative flex justify-end items-center space-x-3 mt-6 md:mt-0">
				<span class="text-sm font-bold uppercase">Sort By:</span>

				<button
					class="flex justify-end items-center text-sm"
					on:click={() => (showSortList = !showSortList)}
				>
					<span>Highest Rating</span>
					<Icons name="chevron" />
				</button>

				<!-- sort options -->
				{#if showSortList}
					<div
						class="flex flex-col absolute top-5 right-0 bg-white rounded-xl py-2 overflow-hidden shadow-md"
					>
						{#each sortOptions as item}
							<button
								class="w-full text-left text-sm px-4 py-1 hover:bg-primary-60 hover:text-white"
								on:click={() => {
									setSort(item);
								}}>{item}</button
							>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		{#if selectedTab === 'reviews'}
			<ProductReviews />
		{/if}

		{#if selectedTab === 'questions'}
			<Questions />
		{/if}
	</div>
</section>
