<script>
  import { observeElement } from "$lib/utils";
  let benefits = $state([
    {
      name: "Save Time",
      description:
        "Instantly mark and revisit key moments — no scrubbing through full demos.",
      icon: "/Feature1Icon.svg",
      isVisible: false,
    },
    {
      name: "Understand",
      description:
        "Review moments that teach. Reflect solo or collaborate with your team.",
      icon: "/Feature1Icon.svg",
      isVisible: false,
    },
    {
      name: "Improve Fast",
      description: "Jump into analysis right after the match ends.",
      icon: "/Feature1Icon.svg",
      isVisible: false,
    },
    {
      name: "Rank Up",
      description: "Turn insights into habits and climb the ladder faster.",
      icon: "/Feature1Icon.svg",
      isVisible: false,
    },
  ]);

  function startAnimation(result, i) {
    if (result) {
      benefits[i].isVisible = true;
    }
  }
</script>

<section class="bg-skyblue-1 text-white-1 p-10 relative">
  <!-- Title -->
  <div class="mt-10 text-center">
    <h1 class="text-2xl md:text-3xl xl:text-4xl text-white-1 font-bold">
      Your Benefits
    </h1>
    <p class="text-white-2 text-xl xl:text-2xl pb-3">
      The Reasons Why You Will Become A Pro Faster
    </p>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 lg:px-32 xl:px-52 mt-10"
  >
    {#each benefits as benefit, i}
      <div
        use:observeElement={{ callback: startAnimation, index: i }}
        class="bg-skyblue-1 rounded-md p-3 border-skyblue-4 shadow-xl border flex flex-col items-center justify-center transition-opacity transition-transform transition-colors duration-1000 ease-in-out
         {benefit.isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8'}
         hover:border-NeonBlue-2 hover:scale-105"
         style="transition-delay: {i * 100}ms"
      >
        <div class="flex gap-2 w-full justify-center items-center">
          <img src="/Icons/{benefit.icon}" alt="-" />
          <h1 class="text-xl text-white-1 font-bold">{benefit.name}</h1>
        </div>
        <p class="text-white-2 text-base pb-3">
          {benefit.description}
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
