<script lang="ts">

  let features = $state([
    {
      Title: "Browse through moments",
      Description:
        "Once you uploaded your demo, you can browse through the moments you saved during your game.",
      Img: "Features2.png",
      Icon: "Feature1Icon.svg",
    },
    {
      Title: "Browse through moments",
      Description:
        "Once you uploaded your demo, you can browse through the moments you saved during your game.",
      Img: "Features2.png",
      Icon: "Feature2Icon.svg",
    },
    {
      Title: "Browse through moments",
      Description:
        "Once you uploaded your demo, you can browse through the moments you saved during your game.",
      Img: "Features2.png",
      Icon: "Feature3Icon.svg.svg",
    },
  ]);

  let cardsVisible = $state([]);

  $inspect(cardsVisible)

  /** @type {import('svelte/action').Action} */
  function myaction(node, options) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardsVisible[options] = true
        } else {
          cardsVisible[options] = false
        }
      });
    });
    observer.observe(node)
  }
</script>

<section
  class="bg-gradient-to-br from-skyblue-1 to-skyblue-5 text-white-1 p-10"
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
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {#each features as feature, i}
      <div
        use:myaction={i}
        class="bg-skyblue-1 rounded-md p-3 border-skyblue-4 shadow-xl border"
      >
        <img src="/{feature.Img}" alt="Analyse" class="rounded-md" />
        <div class="flex gap-2">
          <img src="/Icons/{feature.Icon}" alt="-" />
          <h1 class="text-2xl text-white-1 font-bold">{feature.Title}</h1>
        </div>
        <p class="text-white-2 pb-3">
          {feature.Description}
        </p>
      </div>
    {/each}
  </div>
</section>
