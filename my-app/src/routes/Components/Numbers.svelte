<script>
  import NumberFlow, { continuous } from "@number-flow/svelte";
  import { observeElement } from "$lib/utils.js";

  let numbers = $state([
    {
      Amount: 0,
      Type: "High Elo Players",
    },
    {
      Amount: 0,
      Type: "Intermediate+ Teams",
    },
    {
      Amount: 0,
      Type: "HLTV Pro’s",
    },
  ]);

  function editNumbers(isVisible, i) {
    if (isVisible) {
      switch (i) {
        case 0:
          numbers[i].Amount = 50;
          break;
        case 1:
          numbers[i].Amount = 25;
          break;
        case 2:
          numbers[i].Amount = 10;
          break;
        default:
          // optional: handle unexpected index
          numbers[i].Amount = 25;
          break;
      }
    } else {
      numbers[i].Amount = 0;
    }
  }
</script>

<section
  class="bg-skyblue-5 text-white-1 p-10 xl:px-48"
>

  <!-- Title -->
  <div class="text-center">
    <h1 class="text-2xl md:text-3xl xl:text-4xl text-white-1 font-bold">
      Our solution is based on interview with:
    </h1>
  </div>

  <!-- Numbers -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {#each numbers as number, i}
      <div
        use:observeElement={{ callback: editNumbers, index: i }}
        class="bg-skyblue-1 rounded-md p-3 border-skyblue-4 shadow-xl border flex flex-col items-center justify-center"
      >
        <div class="text-3xl font-bold flex items-center">
          <NumberFlow plugins={[continuous]} value={number.Amount} />
          +
        </div>

        <p class="text-white-2 pb-3">
          {number.Type}
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
</style>
