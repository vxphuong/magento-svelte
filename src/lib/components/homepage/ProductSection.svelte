<script>
	const data = {
		overline: "INTRODUCING DR. BERG'S NEW FORMULA",
		title: 'Veggie Solution, Raspberry & Lemon Natural Flavor',
		description:
			'Support a healthy body with Dr. Berg’s Veggie Solution, Raspberry & Lemon Natural Flavor. One delicious scoop a day gives you a boost of organic vegetables. Veggie Solution offers you a convenient way to increase your nutrient intake and combat brain fog, low energy, and premature aging.',
		url: '#!',
		image: '/images/homepage/product.jpg'
	};
</script>

<section class="pt-20 px-4 xl:px-0 md:grid grid-cols-2">
	<div>
		<img src={data.image} alt="" />
	</div>

	<div class="flex flex-col justify-center">
		<h5 class="text-sm">{data.overline}</h5>
		<h2 class="text-4xl mt-2">{data.title}</h2>
		<p class="text-sm mt-4">{data.description}</p>

		<a href={data.url} class="text-lg text-secondary-100 font-medium mt-7 inline-block"
			>View details</a
		>
	</div>
</section>
