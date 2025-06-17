<script>
  import { backOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  let y = $state();
  let menuOpen = $state(false);
  let windowWidth = $state(0);

  let pages = $state([
    {
      name: "Features",
      id: "Features_ID",
    },
    {
      name: "Solution",
      id: "Solution_ID",
    },
    {
      name: "Benefits",
      id: "Benefits_ID",
    },
    {
      name: "How It Works",
      id: "How It Works_ID",
    },
  ]);
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={windowWidth} />

<section
  class="fixed z-20 w-full px-2.5 md:px-10 flex flex-col justify-center items-center"
>
  <div
    class="w-full flex justify-between items-center mt-2.5 py-2.5 px-2.5 lg:max-w-7xl
    {y
      ? 'bg-skyblue-2/50 rounded-2xl border border-white-3/50 backdrop-blur-sm'
      : ''}"
  >
    {#if windowWidth <= 1024}
      <img src="/Logo.svg" class="size-7" alt="GROW" />

      <!-- Only for mobile -->
      <button onclick={(menuOpen = !menuOpen)} class="cursor-pointer lg:hidden">
        {#if menuOpen}
          <img in:fade src="/Icons/Close.svg" class="size-7" alt="Menu" />
        {:else}
          <img in:fade src="/Icons/Menu.svg" class="size-7" alt="Menu" />
        {/if}
      </button>
    {:else}
      <div class="w-1/3 h-full flex">
        <img src="/Logo.svg" class="size-7" alt="GROW" />
      </div>
      <div class="w-1/3 h-full flex justify-center gap-3">
        {#each pages as page}
          <button
            class="text-white cursor-pointer"
            onclick={() => {
              document.getElementById(page.id).scrollIntoView({
                behavior: "smooth",
              });
            }}>{page.name}</button
          >
        {/each}
      </div>
      <div class="w-1/3 h-full flex justify-end">
        <button
          class="rounded-lg border-1 border-skyblue-1/20 bg-NeonBlue-1 px-4 py-1 font-bold text-center text-skyblue-1 cursor-pointer"
          onclick={() => {
            document.getElementById("waitlist-form").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Join Now
        </button>
      </div>
    {/if}
  </div>

  {#if menuOpen}
    <div
      transition:fade={{ duration: 200 }}
      class="w-full lg:max-w-7xl bg-skyblue-2 rounded-2xl border border-white-2/20 flex flex-col gap-4 p-6"
    >
      {#each pages as page}
        <button
          class="text-white cursor-pointer"
          onclick={() => {
            document.getElementById(page.id).scrollIntoView({
              behavior: "smooth",
            });
            menuOpen = false
          }}>{page.name}</button
        >
      {/each}
    </div>
  {/if}
</section>
