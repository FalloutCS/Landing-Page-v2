<script>
  import { observeElement } from "$lib/utils";

  let windowWidth = $state(0);
  let onboardingSteps = $state([
    {
      name: "While playing a game...",
      description: "Wether it be a Pug, Scrim or Official",
      img: "/Onboarding/Playing.webp",
      isVisible: false,
    },
    {
      name: "Save learning moments",
      description: "Type your costumised keyword in the in game chat",
      img: "/Onboarding/Saving.webp",
      isVisible: false,
    },
    {
      name: "Upload and analyze moments",
      description:
        "Our program will automatically extract your saved moments + remove any waste...",
      img: "/Onboarding/Uploading.webp",
      isVisible: false,
    },
  ]);

  function startAnimation(result, i) {
    if (result) {
      onboardingSteps[i].isVisible = true;
    }
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section id="How It Works_ID" class="bg-skyblue-5 p-10">
  <!-- Title -->
  <div class="mt-10 text-center">
    <h1 class="text-2xl md:text-3xl xl:text-4xl text-white-1 font-bold">
      How it works
    </h1>
    <p class="text-white-2 text-xl xl:text-2xl pb-3">
      It's easy, and effective...
    </p>
  </div>

  <div
    class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 lg:px-32 xl:px-52 mt-10"
  >
    {#each onboardingSteps as onboardingStep, i}
      <div
        use:observeElement={{ callback: startAnimation, index: i }}
        class="flex flex-col items-center justify-center text-center p-10transition-opacity transition-transform duration-1000 ease-out
         {onboardingStep.isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'}"
        style={windowWidth >= 768 ? `transition-delay: ${i * 200}ms` : ``}
      >
        <img src={onboardingStep.img} alt="" />
        <h1 class="text-xl text-white-1 font-bold">{onboardingStep.name}</h1>
        <p class="text-white-2 text-center pb-3 justify-self-end">
          {onboardingStep.description}
        </p>
      </div>
    {/each}
  </div>
</section>
