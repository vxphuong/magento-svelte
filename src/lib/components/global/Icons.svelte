<script>
	export let name = '';
	export let width = '';
	export let height = '';
	export let classList = '';
</script>

<div>
	{#if name === 'linkedin'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="linkedin-in"
			class="svg-inline--fa fa-linkedin-in fa-w-14 h-8"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			><path
				fill="currentColor"
				d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
			/></svg
		>
	{/if}

	{#if name === 'mail'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="envelope"
			class="svg-inline--fa fa-envelope fa-w-16 h-5"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			><path
				fill="currentColor"
				d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
			/></svg
		>
	{/if}

	{#if name === 'facebook'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="facebook-f"
			class="svg-inline--fa fa-facebook-f fa-w-16 h-8"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512"
			><path
				fill="currentColor"
				d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
			/></svg
		>
	{/if}

	{#if name === 'facebook2'}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40" width="40"
			><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path
				d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
			/></svg
		>
	{/if}

	{#if name === 'pinterest'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="pinterest-p"
			class="svg-inline--fa fa-pinterest-p fa-w-12 h-5"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			><path
				fill="currentColor"
				d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
			/></svg
		>
	{/if}

	{#if name === 'twitter'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="twitter"
			class="svg-inline--fa fa-twitter fa-w-16 h-5"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			><path
				fill="currentColor"
				d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
			/></svg
		>
	{/if}

	{#if name === 'youtube'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="youtube"
			class="svg-inline--fa fa-youtube fa-w-18 h-5"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
			><path
				fill="currentColor"
				d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
			/></svg
		>
	{/if}

	{#if name === 'love'}
		<svg class="like-icon h-6" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"
			><path
				fill="currentColor"
				d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"
			/></svg
		>
	{/if}

	{#if name === 'love-outline'}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21.494" viewBox="0 0 24 21.494"
			><path
				id="Heart"
				d="M2.772,3.772a6.051,6.051,0,0,0,0,8.557l9.165,9.165L12,21.431l.063.063,9.165-9.165a6.051,6.051,0,1,0-8.557-8.557l-.318.318a.5.5,0,0,1-.707,0l-.318-.318A6.051,6.051,0,0,0,2.772,3.772Z"
				transform="translate(0 -1)"
				fill="none"
				stroke="#2a363e"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			/></svg
		>
	{/if}

	{#if name === 'clock'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	{/if}

	{#if name === 'plane'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="paper-plane"
			class="svg-inline--fa fa-paper-plane fa-w-16 h-6"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			><path
				fill="currentColor"
				d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
			/></svg
		>
	{/if}

	{#if name === 'chevron'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	{/if}

	{#if name === 'chevron-left'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class={classList}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
		</svg>
	{/if}

	{#if name === 'chevron-right'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class={classList}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
		</svg>
	{/if}

	{#if name === 'spin'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="spinner"
			class="svg-inline--fa fa-spinner fa-w-16 h-4 w-4"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			><path
				fill="currentColor"
				d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
			/></svg
		>
	{/if}

	{#if name === 'star'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12.276"
			height="11.676"
			viewBox="0 0 12.276 11.676"
			class={classList}
		>
			<path
				id="Icon_metro-star-full"
				data-name="Icon metro-star-full"
				d="M14.847,7.143l-4.241-.616-1.9-3.843-1.9,3.843-4.241.616L5.64,10.134l-.725,4.224,3.794-1.994L12.5,14.359l-.725-4.224,3.069-2.992Z"
				transform="translate(-2.571 -2.683)"
				fill="currentColor"
			/>
		</svg>
	{/if}

	{#if name === 'cross'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || '14.82'}
			height={height || '14.82'}
			viewBox="0 0 14.828 14.828"
			class={classList}
		>
			<g id="Group_1207" data-name="Group 1207" transform="translate(-2.086 -1.086)">
				<line
					id="Line_98"
					data-name="Line 98"
					x1="12"
					y1="12"
					transform="translate(3.5 2.5)"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
				/>
				<line
					id="Line_132"
					data-name="Line 132"
					x1="12"
					y1="12"
					transform="translate(15.5 2.5) rotate(90)"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
				/>
			</g>
		</svg>
	{/if}

	{#if name === 'tag'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="8.757"
			height="11.676"
			viewBox="0 0 8.757 11.676"
		>
			<path
				id="Icon_awesome-bookmark"
				data-name="Icon awesome-bookmark"
				d="M0,11.676V1.095A1.1,1.1,0,0,1,1.095,0H7.662A1.1,1.1,0,0,1,8.757,1.095V11.676L4.378,9.122Z"
				fill="currentColor"
			/>
		</svg>
	{/if}

	{#if name === 'search-box-arrow'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18.62"
			height="11.717"
			viewBox="0 0 18.62 11.717"
		>
			<g id="icon.enter" transform="translate(1.414 1.414)">
				<path
					id="Path_1676"
					data-name="Path 1676"
					d="M2170.293-21963.971l-4.445,4.443,4.445,4.445"
					transform="translate(-2165.848 21963.971)"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
				/>
				<path
					id="Path_1677"
					data-name="Path 1677"
					d="M2182.053-21963.969v3.58h-15.894"
					transform="translate(-2165.848 21964.762)"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
				/>
			</g>
		</svg>
	{/if}

	{#if name === 'external-link'}
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
			<path
				id="Icon-external-link"
				d="M0,0V12H12V9H10.5v1.5h-9v-9H3V0ZM6,0,8.25,2.25,4.5,6,6,7.5,9.75,3.75,12,6V0Z"
				fill="currentColor"
			/>
		</svg>
	{/if}

	{#if name === 'menu'}
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 24 24"
			style="enable-background:new 0 0 24 24;"
			xml:space="preserve"
			class="h-6"
		>
			<style type="text/css">
				.st0 {
					fill: #2a363e;
				}
			</style>
			<path
				class="st0"
				d="M20,6.2H4C3.3,6.2,2.8,5.7,2.8,5S3.3,3.8,4,3.8h16c0.7,0,1.2,0.6,1.2,1.2S20.7,6.2,20,6.2z M21.2,12
				c0-0.7-0.6-1.2-1.2-1.2H4c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h16C20.7,13.2,21.2,12.7,21.2,12z M21.2,19c0-0.7-0.6-1.2-1.2-1.2
				H4c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h16C20.7,20.2,21.2,19.7,21.2,19z"
			/>
		</svg>
	{/if}

	{#if name === 'search'}
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="linkedin-in"
			class="w-[20px] h-[20px] !min-w-[20px]"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			><path
				fill="#2A363E"
				d="M17.7,16.3l-2.6-2.6c0.9-1.2,1.5-2.8,1.5-4.4c0-4-3.3-7.3-7.3-7.3S2,5.3,2,9.3s3.3,7.3,7.3,7.3 c1.7,0,3.2-0.6,4.4-1.5l2.6,2.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3C18.1,17.3,18.1,16.7,17.7,16.3z M4,9.3C4,6.4,6.4,4,9.3,4 s5.3,2.4,5.3,5.3s-2.4,5.3-5.3,5.3S4,12.2,4,9.3z"
				style="transform: scale(1.2);"
			/></svg
		>
	{/if}

	{#if name === 'nine-dots'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="24"
			height="24"
			version="1.1"
			id="Layer_1"
			x="0px"
			y="0px"
			viewBox="0 0 24 24"
			style="enable-background:new 0 0 24 24;"
			xml:space="preserve"
		>
			<style type="text/css">
				.st0 {
					fill: #2a363e;
				}
			</style>
			<path
				class="st0"
				d="M6.5,2.3v3.5c0,0.4-0.3,0.8-0.8,0.8H2.3c-0.4,0-0.8-0.3-0.8-0.8V2.3c0-0.4,0.3-0.8,0.8-0.8h3.5 C6.2,1.5,6.5,1.8,6.5,2.3z M13.8,1.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8V2.3 C14.5,1.8,14.2,1.5,13.8,1.5z M21.8,1.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8V2.3 C22.5,1.8,22.2,1.5,21.8,1.5z M5.8,9.5H2.3c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5 C6.5,9.8,6.2,9.5,5.8,9.5z M13.8,9.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5 C14.5,9.8,14.2,9.5,13.8,9.5z M21.8,9.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5 C22.5,9.8,22.2,9.5,21.8,9.5z M5.8,17.5H2.3c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5 C6.5,17.8,6.2,17.5,5.8,17.5z M13.8,17.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5 C14.5,17.8,14.2,17.5,13.8,17.5z M21.8,17.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5 C22.5,17.8,22.2,17.5,21.8,17.5z"
			/>
		</svg>
	{/if}

	{#if name === 'info'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			id="Layer_1"
			x="0px"
			y="0px"
			viewBox="0 0 24 24"
			style="enable-background:new 0 0 24 24;"
			xml:space="preserve"
		>
			<style type="text/css">
				.st0 {
					fill: #2a363e;
				}
			</style>
			<path
				class="st0"
				d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12  C2,6.5,6.5,2,12,2s10,4.5,10,10C22,17.5,17.5,22,12,22z M16,7.9c0.3,1.6-0.5,3.1-1.9,3.9c-0.6,0.3-1,0.9-1.1,1.5V14c0,0.6-0.4,1-1,1  s-1-0.4-1-1v-0.8c0,0,0-0.1,0-0.1c0.1-1.4,0.9-2.5,2.2-3.1c0.6-0.3,1-1.1,0.8-1.8c-0.1-0.6-0.3-0.8-0.5-0.9  c-0.7-0.4-2.2-0.1-2.7,0.1c-0.5,0.2-1.1-0.1-1.3-0.6c-0.2-0.5,0.1-1.1,0.6-1.3c0.3-0.1,2.7-1,4.4,0.1C15.1,5.9,15.8,6.6,16,7.9z   M13,17v0.5c0,0.6-0.4,1-1,1s-1-0.4-1-1V17c0-0.6,0.4-1,1-1S13,16.4,13,17z"
			/>
		</svg>
	{/if}

	{#if name === 'avatar'}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 24.102"
			><g id="user" data-name="user" transform="translate(-590.682 -465.816)"
				><path
					id="Path_3"
					data-name="Path 3"
					d="M19.837,17.886A14.555,14.555,0,0,0,12.5,15.5a14.555,14.555,0,0,0-7.337,2.386A4.46,4.46,0,0,0,3.3,21.3L3,24.385H22L21.7,21.3A4.46,4.46,0,0,0,19.837,17.886Z"
					transform="translate(588.682 464.533)"
					fill="none"
					stroke="#2a363e"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/><path
					id="Path_4"
					data-name="Path 4"
					d="M12,11A4.5,4.5,0,1,0,7.5,6.5,4.5,4.5,0,0,0,12,11Z"
					transform="translate(589.182 464.816)"
					fill="none"
					stroke="#2a363e"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/></g
			></svg
		>
	{/if}

	{#if name === 'cart'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="24"
			height="24"
			version="1.1"
			id="Layer_1"
			x="0px"
			y="0px"
			viewBox="0 0 24 24"
			style="enable-background:new 0 0 24 24;"
			xml:space="preserve"
			><style type="text/css">
				.st0 {
					fill: #2a363e;
				}
			</style><path
				id="Group_39856"
				transform="translate(-1162.717 -469.82)"
				class="st0"
				d="M1180.3,487.1h-6.3c-3.7,0-4.3-3.1-4.7-5.5l-1-5.8 l-0.6-2.8c-0.1-0.4-0.5-0.7-0.9-0.7h-2.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h2.3c1.4,0,2.5,1,2.8,2.3l0.4,2l13.6,0c0.2,0,0.4,0,0.5,0.1 c1.3,0.3,2.1,1.6,1.8,2.9l-1,4.3C1184.4,484.4,1183.8,487.1,1180.3,487.1z M1170.4,476.6l0.8,4.6c0.5,3,1,3.9,2.8,3.9h6.3 c1.7,0,2.1-0.7,2.7-3.7l1-4.3c0.1-0.2-0.1-0.5-0.3-0.5L1170.4,476.6z M1173.4,493.4c-1.1,0-1.9-0.9-1.9-1.9s0.9-1.9,1.9-1.9 s1.9,0.9,1.9,1.9S1174.5,493.4,1173.4,493.4z M1173.4,491.4L1173.4,491.4c0.1,0.1,0.1,0,0.1,0H1173.4z M1181.2,493.4 c-1.1,0-1.9-0.9-1.9-1.9s0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9S1182.2,493.4,1181.2,493.4z M1181.1,491.4L1181.1,491.4 c0.1,0.1,0.1,0,0.1,0H1181.1z"
			/></svg
		>
	{/if}

	{#if name === 'check'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			height="24"
			width="24"
			class={classList}
			><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path
				d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
			/></svg
		>
	{/if}

	{#if name === 'check-sign'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 {classList}"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}

	{#if name === 'mail2'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			/>
		</svg>
	{/if}

	{#if name === 'menu2'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	{/if}

	{#if name === 'check-round'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	{/if}

	{#if name === 'share'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
			/>
		</svg>
	{/if}

	{#if name === 'like'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
			/>
		</svg>
	{/if}

	{#if name === 'comments'}
		<svg class={classList} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
			><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path
				d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"
			/></svg
		>
	{/if}

	{#if name === 'home'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			id="Capa_1"
			x="0px"
			y="0px"
			class={classList}
			viewBox="0 0 26.39 26.39"
			style="fill: currentColor"
			xml:space="preserve"
		>
			<g>
				<g id="c14_house">
					<path
						d="M3.588,24.297c0,0-0.024,0.59,0.553,0.59c0.718,0,6.652-0.008,6.652-0.008l0.01-5.451c0,0-0.094-0.898,0.777-0.898h2.761    c1.031,0,0.968,0.898,0.968,0.898l-0.012,5.434c0,0,5.628,0,6.512,0c0.732,0,0.699-0.734,0.699-0.734V14.076L13.33,5.913    l-9.742,8.164C3.588,14.077,3.588,24.297,3.588,24.297z"
					/>
					<path
						d="M0,13.317c0,0,0.826,1.524,2.631,0l10.781-9.121l10.107,9.064c2.088,1.506,2.871,0,2.871,0L13.412,1.504L0,13.317z"
					/>
					<polygon points="23.273,4.175 20.674,4.175 20.685,7.328 23.273,9.525   " />
				</g>
				<g id="Capa_1_216_" />
			</g>
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
		</svg>
	{/if}
</div>

<style></style>
