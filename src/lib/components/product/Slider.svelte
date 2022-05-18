<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Icons from '../global/icons.svelte';

	const items = [
		// {
		// 	type: 'video',
		// 	videoId: 'Yb4HPDw3mIs'
		// },
		{
			type: 'image',
			src: '/images/product/1.webp'
		},
		{
			type: 'image',
			src: '/images/product/2.jpg'
		},
		{
			type: 'image',
			src: '/images/product/3.jpg'
		}
	];

	const options = {
		arrows: true,
		pagination: false,
		breakpoints: {
			1200: {
				arrows: false,
				pagination: true
			}
		},
		classes: {
			// Add classes for arrows.
			arrows: 'splide__arrows slider-arrows',
			arrow: 'splide__arrow slider-arrow',
			prev: 'splide__arrow--prev slider-prev',
			next: 'splide__arrow--next slider-next',

			// Add classes for pagination.
			pagination: 'splide__pagination slider-pagination', // container
			page: 'splide__pagination__page slider-page' // each button
		}
	};
</script>

<section id="slider" class="overflow-hidden relative">
	<div class="pb-18">
		<Splide {options}>
			{#each items as item}
				<SplideSlide>
					{#if item.type == 'image'}
						<img src={item.src} alt="" class="w-full" />
					{/if}

					{#if item.type == 'video'}
						<div class="flex justify-content items-center h-full">
							<div class="w-full aspect-w-16 aspect-h-9">
								<iframe
									src={`https://www.youtube.com/embed/${item.videoId}`}
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
									class="w-full h-full"
								/>
							</div>
						</div>
					{/if}
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<!-- Add to Wish List -->
	<button class="md:hidden absolute top-4 left-4 group z-10">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-7 w-7 hover:fill-gray-900"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>
	</button>
</section>

<style>
	#slider :global(.slider-pagination) {
		bottom: -20px;
	}

	#slider :global(.slider-page) {
		@apply bg-transparent;
		border: 1px solid black;
		transition: none;
	}

	/* #slider :global(.slider-page + .is-active) {
		@apply bg-secondary-100;
		border: 1px solid transparent;
	} */

	#slider :global(.slider-arrow) {
		@apply h-full w-24 rounded-none opacity-100 top-0 bg-gray-light;
	}

	#slider :global(.slider-prev) {
		@apply left-0 transform -translate-x-full transition duration-300 ease-in-out;
	}

	#slider :global(.slider-next) {
		@apply right-0 transform translate-x-full transition duration-300 ease-in-out;
	}

	#slider :global(.slider-next):hover {
		@apply opacity-30;
	}

	#slider :global(.slider-prev):hover {
		@apply opacity-30;
	}

	#slider:hover :global(.slider-next) {
		@apply translate-x-0;
	}

	#slider:hover :global(.slider-prev) {
		@apply translate-x-0;
	}
</style>
