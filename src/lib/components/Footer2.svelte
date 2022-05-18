<script>
	import Icons from '$lib/components/global/icons.svelte';

	let showDisclaimer = false;

	const toggleDisclaimer = () => {
		showDisclaimer = !showDisclaimer;
	};
</script>

<footer class="bg-gray-lighter">
	<div class="width-1260">
		<!-- disclaimer -->
		<div class="py-6 border-y">
			<button class="flex justify-start items-center py-1 space-x-4" on:click={toggleDisclaimer}>
				<span>*Disclaimers</span>
				<span class="transform custom-transition {showDisclaimer && 'rotate-180'}">
					<Icons name="chevron" />
				</span>
			</button>

			{#if showDisclaimer}
				<div>
					<p>
						Disclaimer: The dietary and other substances, and/or materials, equipment or devices
						discussed on this site may not have undergone evaluation and/or testing by the United
						States Food and Drug Administration or like agency of any other country. Risks that
						might be determined by such testing are unknown. <a href="#!" class="font-bold"
							>Click here</a
						> to read the full disclaimer text.
					</p>

					<p class="mt-6">
						These statements have not been evaluated by the FDA. This product is not intended to
						diagnose, treat, cure or prevent any disease. Information on this site is provided for
						informational purposes only, it is not meant to substitute medical advice provided by
						your physician or any other medical professional. You should not use the information
						contained on this site for diagnosing or treating a health problem, disease, or
						prescribing any medication. Please read product label before use. Best results are only
						achieved when combined with diet and exercise program. Results not typical for any or
						all claims.
					</p>
				</div>
			{/if}
		</div>

		<!-- footer content -->
		<div>
			<div>
				<a href="/">
					<img src="/images/logo.svg" alt="" class="h-16" />
				</a>

				<!-- social media icons -->
				<div>
					<a href="#!">
						<Icons name="youtube" />
					</a>
					<a href="#!">
						<Icons name="facebook" />
					</a>
					<a href="#!">
						<Icons name="twitter" />
					</a>
					<a href="#!">
						<Icons name="pinterest" />
					</a>
					<a href="#!">
						<Icons name="intagram" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
