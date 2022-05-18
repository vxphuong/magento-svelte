<script>
	import Icons from '../global/icons.svelte';

	const items = [
		{
			question:
				"Am I supposed to take all tablets at the same time or spread them out throughout the day? (I've been putting them in a smoothie, as you suggested!)",
			by: 'Andrea Orr',
			date: '05/04/2022',
			answers: [
				{
					answer: 'You can take them at the same time, or spread throughout the day.',
					by: 'Dr. Berg Nutritionals',
					email: '',
					date: '05/06/2022',
					like: 0,
					dislike: 0
				}
			]
		},
		{
			question:
				"Am I supposed to take all tablets at the same time or spread them out throughout the day? (I've been putting them in a smoothie, as you suggested!)",
			by: 'Andrea Orr',
			date: '05/04/2022',
			answers: [
				{
					answer: 'You can take them at the same time, or spread throughout the day.',
					by: 'Dr. Berg Nutritionals',
					email: '',
					date: '05/06/2022',
					like: 0,
					dislike: 0
				}
			]
		},
		{
			question:
				"Am I supposed to take all tablets at the same time or spread them out throughout the day? (I've been putting them in a smoothie, as you suggested!)",
			by: 'Andrea Orr',
			date: '05/04/2022',
			answers: [
				{
					answer: 'You can take them at the same time, or spread throughout the day.',
					by: 'Dr. Berg Nutritionals',
					email: '',
					date: '05/06/2022',
					like: 0,
					dislike: 0
				}
			]
		},
		{
			question:
				"Am I supposed to take all tablets at the same time or spread them out throughout the day? (I've been putting them in a smoothie, as you suggested!)",
			by: 'Andrea Orr',
			date: '05/04/2022',
			answers: [
				{
					answer: 'You can take them at the same time, or spread throughout the day.',
					by: 'Dr. Berg Nutritionals',
					email: '',
					date: '05/06/2022',
					like: 0,
					dislike: 0
				}
			]
		}
	];

	let showAnswersIndexArr = [];
	let showGiveAnswerIndexArr = [];

	const toggleGiveAnswer = (i) => {
		if (showGiveAnswerIndexArr.includes(i)) {
			showGiveAnswerIndexArr.splice(i, 1);
			showGiveAnswerIndexArr = showGiveAnswerIndexArr;
		} else {
			showGiveAnswerIndexArr = [...showGiveAnswerIndexArr, i];
		}
	};

	const toggleShowAnswer = (i) => {
		if (showAnswersIndexArr.includes(i)) {
			showAnswersIndexArr.splice(i, 1);
			showAnswersIndexArr = showAnswersIndexArr;
		} else {
			showAnswersIndexArr = [...showAnswersIndexArr, i];
		}
	};

	const onLike = (i, z) => {
		items[i].answers[z].like += 1;
	};

	const onDislike = (i, z) => {
		items[i].answers[z].dislike += 1;
	};
</script>

<section class="pt-4">
	{#each items as item, i}
		<div class="md:px-4 py-4 border-b">
			<p class="text-[15px] leading-tight font-bold text-primary-100 italic">{item.question}</p>

			<div class="mt-2">
				<span class="text-sm font-semibold text-primary-80 mr-6">{item.by}</span>
				<span class="text-sm text-primary-80">{item.date}</span>
			</div>

			<!-- Give New Answer -->
			<div class="mt-4">
				<button
					class="px-8 py-2 rounded bg-secondary-100 text-xs text-white font-bold"
					on:click={() => {
						toggleGiveAnswer(i);
					}}>ANSWER QUESTION</button
				>

				{#if showGiveAnswerIndexArr.includes(i)}
					<div class="p-4">
						<textarea
							placeholder="Your answer here..."
							class="border w-full h-36 p-2 mt-2 placeholder:text-gray-900"
						/>

						<div
							class="mt-2 flex flex-col md:flex-row justify-between items-stretch space-y-2 md:space-y-0 md:space-x-1"
						>
							<input
								type="text"
								placeholder="Name"
								class="w-full px-2 py-3 border placeholder:text-gray-900"
							/>
							<input
								type="email"
								placeholder="Email"
								class="w-full px-2 py-3 border placeholder:text-gray-900"
							/>
							<button
								class="w-full md:w-1/3 px-8 p-3 md:py-1.5 rounded-sm bg-secondary-100 text-white font-bold"
								>SUBMIT</button
							>
						</div>

						<p class="mt-2 text-sm text-primary-100">
							We will send a verification email to confirm your answer. All responses are subject to
							store approval.
						</p>
					</div>
				{/if}
			</div>

			<!-- Answers -->
			<div class="mt-6">
				<button
					class="flex justify-start items-center space-x-1 w-full bg-secondary-100 px-4 py-3.5 font-medium rounded text-sm tracking-wide"
					on:click={() => toggleShowAnswer(i)}
				>
					<Icons name="comments" classList="h-3 w-3" />
					<span>ANSWERS</span>
					<span class="font-normal"> {item.answers.length}</span>
				</button>

				{#if showAnswersIndexArr.includes(i)}
					<div class="mt-8 px-6 space-y-6 pb-6">
						{#each item.answers as answer, z}
							<div>
								<div
									class="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0"
								>
									<div class="flex justify-start items-center space-x-4">
										<h5 class="text-lg font-bold tracking-wide text-primary-100">{answer.by}</h5>

										<span class="flex justify-start items-baseline space-x-1">
											<Icons name="home" classList="h-3.5 text-secondary-100" />
											<span class="text-sm text-secondary-100">Dr. Berg</span>
										</span>
									</div>

									<p class="text-sm text-primary-80 self-end">{answer.date}</p>
								</div>

								<p class="mt-4 text-primary-100 text-sm">{answer.answer}</p>

								<!-- Helpful -->
								<div class="flex justify-end items-center space-x-3 mt-1">
									<span class="font-bold text-secondary-100 text-sm">Was this answer helpful?</span>

									<div class="flex justify-end items-stretch">
										<button
											class="flex justify-center items-center space-x-1 text-sm px-2 py-1 bg-secondary-100 text-white rounded"
											on:click={() => onLike(i, z)}
										>
											<Icons name="like" />
											<span>{answer.like}</span>
										</button>

										<button
											class="flex justify-center items-center space-x-1 px-2 py-1 text-sm bg-gray-base text-white rounded"
											on:click={() => onDislike(i, z)}
										>
											<span class="transform -rotate-180">
												<Icons name="like" />
											</span>
											<span>{answer.dislike}</span>
										</button>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/each}
</section>
