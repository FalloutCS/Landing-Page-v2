<script>
  import { backOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  let y = $state();
  let menuOpen = $state(false);

  let pages = $state([
    {
      name: "Features",
      id: "Features",
    },
    {
      name: "Solution",
      id: "Solution",
    },
    {
      name: "Benefits",
      id: "Benefits",
    },
    {
      name: "How It Works",
      id: "How It Works",
    },
  ]);
</script>

<svelte:window bind:scrollY={y} />

<section class="fixed z-20 w-full px-2.5 flex flex-col items-center">
  <div
    class="w-full flex justify-between mt-2.5 p-2.5 lg:max-w-7xl {y
      ? 'bg-skyblue-2/50 rounded-2xl border border-white-3/50 backdrop-blur-sm'
      : ''}"
  >
    <img src="/Logo.svg" class="size-7" alt="GROW" />
    <button onclick={(menuOpen = !menuOpen)} class="cursor-pointer lg:hidden">
      {#if menuOpen}
      <img in:fade
       src="/Icons/Close.svg" class="size-7" alt="Menu" />
      {:else}
      <img in:fade
      src="/Icons/Menu.svg" class="size-7" alt="Menu" />
      {/if}
      
      </button
    >
  </div>

  {#if menuOpen}
    <div
      in:fade={{ duration: 100 }}
      class="w-full lg:max-w-7xl bg-skyblue-2 rounded-2xl border border-white-2/20 flex flex-col justify-center gap-4 p-6"
    >
      {#each pages as page, i}
        <a
          class="text-white-2 text-lg"
          href="#">{page.name}</a
        >
      {/each}
    </div>
  {/if}
</section>
