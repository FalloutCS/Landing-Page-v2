<script>
  let numbers = $state([
    {
      Amount: 50,
      Type: "High Elo Players",
    },
    {
      Amount: 25,
      Type: "Intermediate+ Teams",
    },
    {
      Amount: 10,
      Type: "HLTV Pro’s",
    },
  ]);
</script>

<section
  class="bg-radial from-skyblue-3 from-10% to-skyblue-5 text-white-1 p-10"
>
  <!-- Waves IMG -->
  <img
    src="/waves1.svg"
    alt=""
    class="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
  />

  <!-- Title -->
  <div class="mt-10 text-center">
    <h1 class="text-2xl md:text-3xl xl:text-4xl text-white-1 font-bold">
      Our solution is based on interview with:
    </h1>
  </div>

  <!-- Numbers -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {#each numbers as number, i}
      <div
        class="bg-skyblue-1 rounded-md p-3 border-skyblue-4 shadow-xl border flex flex-col items-center justify-center"
      >
        <h1 class="text-2xl text-white-1 font-bold">{number.Amount}+</h1>

        <p class="text-white-2 pb-3">
          {number.Type}
        </p>
      </div>
    {/each}
  </div>
</section>

<!-- Start working on the numbers cards, maybe use some component from the animation library u found -->
