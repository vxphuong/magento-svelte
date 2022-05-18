<script>
	export let links = [];
	// {
	// 	title: '',
	// 	url: ''
	// }
</script>

<div class="pt-5 pb-4 px-5">
	<a href="/" class="text-xs hover:underline underline-offset-1 custom-transition">Home</a>

	{#each links.length && links as link}
		<span> / </span>
		<a href={link.url} class="text-xs font-medium text-[#707070]">{link.title}</a>
	{/each}
</div>
