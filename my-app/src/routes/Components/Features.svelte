<script lang="ts">
  import { observeElement } from "$lib/utils";
  import { onMount } from 'svelte';

  let delay = $state(200)
  let isXl = $state(false)

  let features = $state([
    {
      Title: "Browse through moments",
      Description:
        "Once you uploaded your demo, you can browse through the moments you saved during your game.",
      Img: "Features2.png",
      Icon: "Feature1Icon.svg",
      isVisible: false
    },
    {
      Title: "Browse through moments",
      Description:
        "Once you uploaded your demo, you can browse through the moments you saved during your game.",
      Img: "Features2.png",
      Icon: "Feature2Icon.svg",
      isVisible: false
    },
    {
      Title: "Browse through moments",
      Description:
        "Once you uploaded your demo, you can browse through the moments you saved during your game.",
      Img: "Features2.png",
      Icon: "Feature3Icon.svg.svg",
      isVisible: false
    },
  ]);

  function startAnimation(result, i) {
    if (result) {
      features[i].isVisible = true
    }
  }

    // Update on resize
  const updateSize = () => {
    isXl = window.innerWidth >= 768; // Tailwind's `xl` starts at 1280px
  }

  onMount(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  });
</script>

<section
  class="relative bg-gradient-to-br from-skyblue-1 to-skyblue-5 text-white-1 p-10"
>
  <!-- Title -->
  <div class="mt-10 text-center">
    <h1 class="text-2xl md:text-3xl xl:text-4xl text-white-1 font-bold">
      Features That Make You Better
    </h1>
    <p class="text-white-2 text-xl xl:text-2xl pb-3">
      The platform to save learning moments while playing, analyze what matters,
      become a pro in strategic understanding.
    </p>
  </div>

  <!-- Feature Cards -->
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-6 2xl:mx-32 mt-10"
  >
    {#each features as feature, i}
      <div
        use:observeElement={{ callback: startAnimation, index: i }}
        class="bg-skyblue-1 rounded-md p-3 border-skyblue-4 shadow-xl border transition-opacity transition-transform duration-1000 ease-out
         {feature.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}"
         style={isXl ? `transition-delay: ${i*delay}ms` : ``}
      >
        <img src="/{feature.Img}" alt="Analyse" class="rounded-md" />
        <div class="flex gap-2">
          <img src="/Icons/{feature.Icon}" alt="-" />
          <h1 class="text-xl text-white-1 font-bold">{feature.Title}</h1>
        </div>
        <p class="text-white-2 text-base pb-3">
          {feature.Description}
        </p>
      </div>
    {/each}
  </div>

  <div class="h-20 md:h-32 lg:h-40 2xl:h-60"></div>

  <div class="w-full overflow-hidden">
    <img
      src="/waves1.svg"
      alt="decorative wave"
      class="absolute bottom-0 left-0 w-full pointer-events-none select-none"
    />
  </div>
</section>
