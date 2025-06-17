<script>
  import { enhance } from "$app/forms";

  let submitted = $state(false);
  let error = $state("");

  /** @type {import('./$types').PageProps} */
  let { form } = $props();

  function handleSubmit(event) {
    submitted = false;
    error = "";
  }
</script>

<section
    id="waitlist-form"
  class="relative bg-skyblue-2 text-white-1 pb-10"
>
  <!-- Waves -->
  <div class="w-full overflow-hidden">
    <img
      src="/waves1_Reverse.svg"
      alt="decorative wave"
      class="absolute w-full pointer-events-none select-none"
    />
  </div>

  <div class="h-20 md:h-32 lg:h-40 2xl:h-56"></div>

  <div class="my-10 text-center">
    <h1 class="text-2xl md:text-3xl xl:text-4xl text-white-1 font-bold">
      Join the Waitlist
    </h1>
  </div>

  <form
    method="POST"
    use:enhance={() => {
      return async ({ result }) => {
        if (result.type === "success") {
          submitted = true;
        } else {
          error = "Something went wrong. Please try again.";
        }
      };
    }}
    onsubmit={handleSubmit}
    class="mx-auto max-w-md rounded-lg border bg-skyblue-3 border-NeonBlue-2/20 p-8 shadow-2xl"
  >
    <div class="mb-2">
      <label class="mb-2 block" for="email"> Email Address </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="your@email.com"
        class="w-full rounded-md border border-white-2 bg-skyblue-1 px-4 py-3 transition duration-200 focus:outline-0 focus:ring-2 focus:ring-NeonBlue-1 mb-2"
      />

      <label class="inline-flex cursor-pointer items-center">
        <span class="m-3 text-sm font-medium text-white-5 "
          >Q: Is your team playing together for 6 months or more?</span
        >
        <input
          id="team"
          name="team"
          type="checkbox"
          value="true"
          class="peer sr-only"
        />
        <div
          class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-NeonBlue-2 rtl:peer-checked:after:-translate-x-full"
        ></div>
      </label>
    </div>

    <button
      type="submit"
      class="	w-full rounded-md bg-NeonBlue-1 px-6 py-3 font-bold text-skyblue-1
			 			transition duration-200 hover:bg-accent-cyan-dark
			 			disabled:cursor-not-allowed disabled:opacity-50"
    >
      {#if submitted}
        Thanks for joining! ✨
      {:else}
        Join Waitlist
      {/if}
    </button>

    {#if error}
      <p class="mt-4 text-center text-red-500">{error}</p>
    {/if}
  </form>

  <div class="h-20 "></div>
</section>
