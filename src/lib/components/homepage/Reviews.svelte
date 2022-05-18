<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	const options = {
		arrows: false,
		pagination: false,
		gap: '1.5rem',
		autoWidth: true
	};
</script>

<section class="pt-8 lg:pt-5 px-4 xl:px-0 pb-12">
	<h3 class="text-xl font-bold">On the Web</h3>
	<h4 class="text-2xl font-bold">4.89 Overall</h4>
	<p>Out of 21350 Reviews</p>

	<!-- slider -->
	<div class="mt-8">
		<Splide {options}>
			<!-- google -->
			<SplideSlide>
				<a href="#!" class="flex justify-start items-center space-x-6 border px-7 py-6">
					<img src="/images/homepage/community/google.webp" alt="" />

					<div>
						<div class="flex justify-start items-center space-x-2">
							<span class="text-sm text-gray-dark inline-block mt-2">4.9</span>

							<div class="text-[#e2bf30] flex justify-start items-center ">
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
							</div>
						</div>

						<span
							class="text-sm font-bold underline underline-offset-1 hover:no-underline custom-transition"
							>View 4920 reviews</span
						>
					</div>
				</a>
			</SplideSlide>

			<!-- trust spot -->
			<SplideSlide>
				<a href="#!" class="flex justify-start items-center space-x-6 border px-7 py-6">
					<img src="/images/homepage/community/trustspot.webp" alt="" />

					<div>
						<div class="flex justify-start items-center space-x-2">
							<span class="text-sm text-gray-dark inline-block mt-2">4.9</span>

							<div class="text-[#e2bf30] flex justify-start items-center ">
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
								<img src="/images/homepage/community/icon_star.svg" alt="" />
							</div>
						</div>

						<span
							class="text-sm font-bold underline underline-offset-1 hover:no-underline custom-transition"
							>View 28750 reviews</span
						>
					</div>
				</a>
			</SplideSlide>

			<!-- twitter -->
			<SplideSlide>
				<a href="#!" class="flex justify-start items-center space-x-8 border px-7 py-6">
					<div class="flex justify-start items-center space-x-4">
						<img src="/images/homepage/community/avatar.webp" alt="" class="h-12" />

						<div>
							<span class="flex justify-start items-center space-x-1.5">
								<span class="text-xs font-bold">DR. Eric Berg DC</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="#0091A8"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>

							<span class="text-[11px]">Published on Dec 15, 2016</span>
						</div>
					</div>

					<span class="font-bold text-error-100">SUBSCRIBE 7.18 M</span>
				</a>
			</SplideSlide>

			<!-- facebook -->
			<SplideSlide>
				<a href="#!" class="flex justify-start items-center space-x-8 border px-7 py-6">
					<div class="flex justify-start items-center space-x-4">
						<img src="/images/homepage/community/avatar2.webp" alt="" class="h-12" />

						<div>
							<span class="flex justify-start items-center space-x-1.5">
								<span class="text-xs font-bold">DR. Eric Berg</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="#D3D6D7"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>

							<span class="text-[11px]">Published on Dec 15, 2016</span>
						</div>
					</div>

					<div class="flex justify-start items-center space-x-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							height="40"
							width="40"
							fill="#395185"
							><path
								d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
							/></svg
						>
						<span class="text-[#395185]">Become a supporter</span>
					</div>
				</a>
			</SplideSlide>
		</Splide>
	</div>
</section>
