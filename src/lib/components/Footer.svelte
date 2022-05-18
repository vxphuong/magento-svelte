<script>
	// @ts-nocheck
	import SvgIcon from './global/svg-icon.svelte';
	import {
		iconTwitter,
		iconFacebook,
		iconYoutube,
		iconPinterest,
		iconInstagram,
		arrowChevronNext
	} from '$lib/Icons/icon';
	import { slide } from 'svelte/transition';

	const links = [
		{
			title: 'About',
			children: [
				{
					text: 'Dr. Berg',
					link: ''
				}
			]
		},
		{
			title: 'Orders and shipping',
			children: [
				{
					text: 'My account',
					link: '#!'
				},
				{
					text: 'Shipping methods',
					link: '#!'
				},
				{
					text: 'Refunds',
					link: '#!'
				}
			]
		},
		{
			title: 'Support',
			children: [
				{
					text: 'Hours of operation',
					link: '#!'
				},
				{
					text: 'Contact us',
					link: '#!'
				},
				{
					text: 'Official resellers',
					link: '#!'
				},
				{
					text: 'Official social media',
					link: '#!'
				},
				{
					text: 'Wholesale application',
					link: '#!'
				}
			]
		},
		{
			title: 'Legal',
			children: [
				{
					text: 'Terms and conditions',
					link: '#!'
				},
				{
					text: 'Privacy policy',
					link: '#!'
				}
			]
		}
	];
	var comm;

	let isExpand = false;

	const toggleExpand = () => {
		isExpand = !isExpand;
	};
</script>

<div id="footer">
	<footer class="bg-gray-lighter mt-5 py-10">
		<div class="px-5 mx-auto main:container xl:px-0">
			<div class="border-b border-t border-gray-light py-5">
				<button on:click={toggleExpand} class="flex items-center">
					<span class="py-2 tracking-wide mr-5">*Disclaimers</span>
					<svelte:component
						this={SvgIcon}
						path={arrowChevronNext}
						iconClass={`w-[20px] h-[20px] duration-700 cursor-pointer select-none ${
							!isExpand ? 'rotate-90' : 'rotate-[-90deg]'
						}`}
						fill="#2A363E"
					/>
				</button>

				{#if isExpand}
					<div transition:slide={{ duration: 200 }}>
						<p class="mb-2">
							Disclaimer: The dietary and other substances, and/or materials, equipment or devices
							discussed on this site may not have undergone evaluation and/or testing by the United
							States Food and Drug Administration or like agency of any other country. Risks that
							might be determined by such testing are unknown. <a
								class="font-bold text-gray-darkest hover:text-gray-darker"
								href="/legal/earnings-disclaimer">Click here</a
							> to read the full disclaimer text.
						</p>
						<p>
							These statements have not been evaluated by the FDA. This product is not intended to
							diagnose, treat, cure or prevent any disease. Information on this site is provided for
							informational purposes only, it is not meant to substitute medical advice provided by
							your physician or any other medical professional. You should not use the information
							contained on this site for diagnosing or treating a health problem, disease, or
							prescribing any medication. Please read product label before use. Best results are
							only achieved when combined with diet and exercise program. Results not typical for
							any or all claims.
						</p>
					</div>
				{/if}
			</div>

			<!-- footer main content -->
			<div class="w-full py-8 xmd:py-10 divide-x-0 divide-gray-darkest xmd:flex xmd:items-center">
				<a href="/"
					><img
						src="/images/logo.svg"
						alt="dr. berg logo"
						class="mr-2 h-[48px] xmd:mr-[56px] mb-5"
						height="48px"
						width="259.3"
					/></a
				>

				<!-- social media icons -->
				<div class="flex items-center space-x-3 xxs:space-x-7">
					<a href="https://www.youtube.com/user/drericberg123?feature=mhee" target="_blank">
						<SvgIcon path={iconYoutube} iconClass="w-[32px] h-[32px]" fill="#2A363E" />
					</a>
					<a href="https://www.facebook.com/drericberg" target="_blank">
						<SvgIcon path={iconFacebook} iconClass="w-[32px] h-[32px]" fill="#2A363E" />
					</a>
					<a href="https://twitter.com/@drericbergdc" target="_blank">
						<SvgIcon path={iconTwitter} iconClass="w-[32px] h-[32px]" fill="#2A363E" />
					</a>
					<a href="https://www.pinterest.com/drericberg/" target="_blank">
						<SvgIcon path={iconPinterest} iconClass="w-[32px] h-[32px]" fill="#2A363E" />
					</a>
					<a href="https://www.instagram.com/drericberg" target="_blank">
						<SvgIcon
							path={iconInstagram}
							iconClass="w-[32px] h-[32px]"
							transform="translate(-443px, -933px)"
							fill="#2A363E"
						/>
					</a>
				</div>
			</div>

			<!-- navigation links -->
			<div class="grid grid-cols-1 xmd:grid-cols-4 mxl:w-8/12">
				{#each links as item}
					<div class="text-left mb-5">
						<p><strong>{item.title}</strong></p>

						<div class="flex flex-col space-y-1 mt-4">
							{#each item.children as child}
								<a href={child.link} class="text-gray-darkest hover:text-gray-darker"
									>{child.text}</a
								>
							{/each}
						</div>
					</div>
				{/each}
			</div>

			<!-- copyright -->
			<div class="mt-[10px]">
				<p class="xmd:hidden">
					The Health & Wellness Center, Inc.<br /><strong>Address:</strong> 4501 Ford Avenue,
					Alexandria, VA 22302.<br /><strong>Phone:</strong> 703-354-7336
				</p>
				<p class="hidden xmd:block">
					The Health & Wellness Center, Inc. <strong>Address:</strong> 4501 Ford Avenue, Alexandria,
					VA 22302. <strong>Phone:</strong> 703-354-7336
				</p>
				<p class="mt-2">© Copyright {new Date().getFullYear()}. All rights reserved.</p>
			</div>
		</div>
		<script src={import.meta.env.VITE_APP_COMM_URL}></script>
	</footer>
</div>

<style></style>
