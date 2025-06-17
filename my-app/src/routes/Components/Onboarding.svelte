<script>
  let onboardingSteps = $state([
    {
      name: "While playing a game...",
      description: "Wether it be a Pug, Scrim or Official",
      img: "/Onboarding/Playing.png",
    },
    {
      name: "Save learning moments",
      description: "Type your costumised keyword in the in game chat",
      img: "/Onboarding/Saving.png",
    },
    {
      name: "Upload and analyze moments",
      description:
        "Our program will automatically extract your saved moments + remove any waste...",
      img: "/Onboarding/Uploading.png",
    },
  ]);
</script>

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
    {#each onboardingSteps as onboardingStep}
      <div class="flex flex-col items-center justify-center text-center p-10">
        <img src={onboardingStep.img} alt="" />
        <h1 class="text-xl text-white-1 font-bold">{onboardingStep.name}</h1>
        <p class="text-white-2 text-center pb-3 justify-self-end">
          {onboardingStep.description}
        </p>
      </div>
    {/each}
  </div>
</section>
