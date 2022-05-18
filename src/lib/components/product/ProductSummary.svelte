<script>
	import Icons from '$lib/components/global/icons.svelte';

	const product = {
		title: 'Nutritional Yeast Tablets',
		star: 4.8,
		reviews: 736,
		benefits:
			"Support keto-adaptation, instantly relieve stress, and stop cravings with Dr. Berg's Nutritional Yeast Tablets. Nutritional yeast is nature's best source of B vitamins, which support your mood, skin health, metabolism, and energy. These nutritional yeast tablets make it easy for you to replenish your B vitamins daily without added synthetic ingredients. Each bottle contains 270 tablets that are easy to chew or swallow."
	};
</script>

<section class="pt-6">
	<h2 class="hidden xl:block">{product.title}</h2>

	<!-- review -->
	<div class="mt-6">
		<h5 class="hidden xl:block text-xs font-bold uppercase">Product Reviews</h5>

		<!-- stars and reviews -->
		<div class="mt-2 flex flex-col justify-center items-center xl:items-start">
			<!-- stars -->
			<div class="text-[#e2bf30] flex justify-start items-center space-x-0.5">
				<Icons name="star" classList="h-6 w-6" />
				<Icons name="star" classList="h-6 w-6" />
				<Icons name="star" classList="h-6 w-6" />
				<Icons name="star" classList="h-6 w-6" />
				<Icons name="star" classList="h-6 w-6" />
				<span class="text-primary-100 font-semibold pl-2">{product.star}</span>
			</div>

			<div class="text-secondary-100 text-sm whitespace-nowrap mt-2">
				<a href="#!" class="hover:underline custom-transition"> {product.reviews} Reviews</a>
				<span> | </span>
				<a href="#!" class="hover:underline custom-transition"> Ask A Question</a>
			</div>
		</div>

		<!-- Benefits -->
		<div class="mt-8 hidden xl:block">
			<h4 class="text-xs font-bold uppercase">Benefits</h4>
			<p class="text-sm">{product.benefits}</p>
		</div>
	</div>

	<h2 class="xl:hidden mt-4 text-xl">{product.title}</h2>
</section>
