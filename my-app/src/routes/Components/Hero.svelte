<script>
</script>

<section
  class="flex flex-col lg:flex-row lg:justify-evenly lg:text-left justify-center items-center w-full h-screen text-center p-10 lg:px-28"
>
  <div class="lg:w-2/5 mt-10">
    <h1 class="text-2xl md:text-3xl xl:text-4xl text-white-1 font-bold">
      How Counter Strike Players Improve Faster Than Ever
    </h1>
    <p class="text-white-2 text-xl xl:text-2xl pb-3">
      The platform to save learning moments while playing, analyze what matters,
      become a pro in strategic understanding.
    </p>
    <button
      class="rounded-lg border-1 border-skyblue-1/20 bg-NeonBlue-1 px-9 py-2 lg:px-14  cursor-pointer"
      onclick={() => {
        document.getElementById("waitlist-form").scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <h1 class="text-skyblue-1 font-bold text-center">Be the first to improve</h1>
    </button>
  </div>

  <video
    src="/HeroVid.webm"
    autoplay
    loop
    muted
    playsinline
    class="rounded-2xl w-full lg:w-3/5 max-w-2xl lg:max-w-4xl"
  />
</section>
