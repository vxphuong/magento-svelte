<script>
	import Pagination from './Pagination.svelte';
	import ProductReviewCard from './ProductReviewCard.svelte';

	let showShareOptions = false;
	const reviews = [
		{
			name: 'Alexandra i',
			address: 'Sacramento, CA',
			isVarified: true,
			date: '04/30/2022',
			text: "5 stars Although I don't use it daily as I should, it does increase my energy when I do use it. I hate taking pills so I don't use it much. I'd rather have another version. I wouldn't buy it again just because it is a pill.",
			isHelpful: 0,
			notHelpful: 0
		},
		{
			name: 'Idil A',
			address: 'Toronto, ON',
			isVarified: true,
			date: '04/28/2022',
			text: "5 stars I don't like the tast very much, but the benefit is amazing. I'm probably pretty menopausal and my hormones became unbalanced and I started to lose hair fast. After I started taking these tablets I started to see my hair growing back. I know that B6 is good for balancing hormones and so is the whole B Complex for that matter.Thank God and thanks to Dr.Berg. Two thumbs up all the way De. Berg.",
			isHelpful: 0,
			notHelpful: 0
		},
		{
			name: 'Guest',
			address: 'Rancho Cucamonga, CA',
			isVarified: true,
			date: '04/22/2022',
			text: "5 stars I chew 9 tablets every day however I'm on a powerful antibiotic my doctor told me that it depletes the yeast effects, so I'm going to try to load up on a lot of other B-1 i.e. 100 mg of Thiamine and maybe folate?? Tell me what you think. Thank you.",
			isHelpful: 0,
			notHelpful: 0
		}
	];
</script>

<section>
	{#each reviews as item}
		<ProductReviewCard data={item} />
	{/each}

	<Pagination />
</section>
