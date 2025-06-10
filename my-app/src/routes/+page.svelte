<script>
  import Hero from "./Components/Hero.svelte";
  import Features from "./Components/Features.svelte";
  import Numbers from "./Components/Numbers.svelte";
</script>

<svelte:head>
  <title>GrowGG - Level Up Your CS Strategy</title>
  <meta
    name="description"
    content="Analyze your CS gameplay like the pros with GrowGG. Get instant insights, compare with professional matches, and improve your strategic understanding."
  />
  <meta property="og:title" content="GrowGG - Level Up Your CS Strategy" />
  <meta
    property="og:description"
    content="Analyze your CS gameplay like the pros with GrowGG's Demo Master."
  />
</svelte:head>

<main class="">
	<!-- To Do General: Compress images and remove bloat -->
  <Hero />
  <!-- To Do Features: Add Animations: when scrolling in view, and when hovering over -->
  <Features />
  <!-- To Do Numbers: Add some component with animation that fits a numbers section -->
  <Numbers />
</main>
