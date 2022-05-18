<script>
	const images = [
		'/images/homepage/community/1.webp',
		'/images/homepage/community/2.webp',
		'/images/homepage/community/3.webp',
		'/images/homepage/community/4.jpg'
	];
</script>

<section class="pt-8 lg:pt-5 px-4 xl:px-0 pb-12">
	<h3 class="font-semibold text-xl">Be a part of our community!</h3>
	<p class="mt-2">
		Post a photo of you and your Dr. Berg products for a chance to be featured on our page. Tag
		@drericberg and use hashtag #drberglove
	</p>

	<div class="mt-4 lg:mt-8 space-y-6 md:space-y-0 md:grid grid-cols-4 gap-3">
		{#each images as image}
			<div class="w-full aspect-w-1 aspect-h-[1.45]">
				<img src={image} alt="" class="w-full object-contain object-center" />
			</div>
		{/each}
	</div>
</section>
