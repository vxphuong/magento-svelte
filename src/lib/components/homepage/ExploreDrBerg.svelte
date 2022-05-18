<script>
	const items = [
		{
			title: 'Supplements',
			subtitle: 'Nutrient-dense and mineral rich. High quality source ingredients.',
			image: '/images/homepage/explore/1.png'
		},
		{
			title: 'Packages & Kits',
			subtitle: 'Body Type Packages & Kits, Uniquely formulated by Dr. Berg',
			image: '/images/homepage/explore/2.webp'
		},
		{
			title: 'Books',
			subtitle: 'Author of the best selling The 7 Principles of Fat Burning',
			image: '/images/homepage/explore/3.webp'
		},
		{
			title: 'Digital programs',
			subtitle: 'Exclusive Membership, Coaching, Meal Maker & Keto',
			image: '/images/homepage/explore/4.png'
		}
	];
</script>

<section class="pt-5 px-4 xl:px-0">
	<h3 class="text-xl font-bold text-primary-100 uppercase">Explore drberg</h3>

	<div class="overflow-x-scroll hide-scrollbar">
		<div
			class="mt-4 flex justify-start space-x-4 md:space-x-0 md:grid grid-cols-2 md:gap-4 lg:grid-cols-4"
		>
			{#each items as item}
				<div
					class="shadow-md my-1 rounded md:grid grid-cols-6 gap-2 xl:shadow-none hover:shadow-md custom-transition"
				>
					<div class="h-20 w-28 overflow-hidden md:h-full md:col-start-1 col-end-3 md:w-full">
						<img src={item.image} alt="" class="object-cover h-28 object-center" />
					</div>

					<div
						class="px-2 py-2 md:col-start-3 md:col-end-7 md:flex flex-col justify-center md:space-y-2"
					>
						<h4 class="text-xs text-primary-100 md:text-black font-bold uppercase">{item.title}</h4>
						<p class="text-xs text-gray-500 hidden md:block">{item.subtitle}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
