<script>
	const videoIds = ['CsTmgX32Uk8', 'P7fHYSyvxU0'];
	// 'Z-HB_Xt8dUw', 'd02wQEm0xDo'
</script>

<section id="videos" class="pt-6">
	<h4 class="text-sm font-bold uppercase">Videos</h4>

	<div class="mt-1 space-y-4">
		{#each videoIds as item}
			<div class="w-full aspect-w-16 aspect-h-16 md:aspect-h-9">
				<iframe
					src={`https://www.youtube.com/embed/${item}`}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					class="w-full h-full"
				/>
			</div>
		{/each}
	</div>
</section>
