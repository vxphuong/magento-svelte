<script>
	import { slide } from 'svelte/transition';
	import Icons from '../global/icons.svelte';

	let showAnswers = [];

	const faqs = [
		{
			question: 'How should I use this product?',
			answer: 'Take 3 tablets three times per day, with or without meals.'
		},
		{
			question: 'What is the maximum daily dose?',
			answer: 'Do not exceed the recommended dose. Do not take 3 tablets before bed.'
		},
		{
			question: 'Can I use this while doing Keto?',
			answer:
				'Yes! In fact, this supplement can help you to maximize your results on the keto diet. It can help you adapt faster to your new way of making fuel, it can help reduce the keto flu, and it can help prevent any other side effects of starting keto.'
		},
		{
			question: 'How big of a supply do I get with each order?',
			answer:
				'Each bottle contains 30 servings of Dr. Berg’s Nutritional Yeast. That is 270 tablets per bottle.'
		}
	];

	const toggleShowAnswers = (index) => {
		if (showAnswers.includes(index)) {
			showAnswers.splice(showAnswers.indexOf(index), 1);
			showAnswers = [...showAnswers];
			console.log(showAnswers);
		} else {
			showAnswers = [...showAnswers, index];
		}
	};
</script>

<section id="faq" class="my-16">
	<h3 class="text-sm font-bold">FAQ</h3>

	<div class="border mt-1">
		{#each faqs as item, i}
			<div class="border-b px-4">
				<div class="py-3 text-sm">
					<p
						class="cursor-pointer flex justify-start items-center space-x-4 text-primary-100"
						on:click={() => toggleShowAnswers(i)}
					>
						<span
							class="transform custom-transition {showAnswers.includes(i)
								? 'rotate-30'
								: '-rotate-90'}"
						>
							<Icons name="chevron" />
						</span>
						<span>{item.question}</span>
					</p>

					{#if showAnswers.includes(i)}
						<p transition:slide={{ duration: 300 }} class="px-8 py-3">{item.answer}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
