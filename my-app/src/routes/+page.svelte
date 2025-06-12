<script>
  import Hero from "./Components/Hero.svelte";
  import Features from "./Components/Features.svelte";
  import Numbers from "./Components/Numbers.svelte";
  import Benefits from "./Components/Benefits.svelte";
  import Solution from "./Components/Solution.svelte";
  import Onboarding from "./Components/Onboarding.svelte"
  import Cta from "./Components/Cta.svelte";
  import Footer from "./Components/Footer.svelte";
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

<main class="bg-gradient-to-br from-skyblue-1 to-skyblue-5">
	<!-- To Do General: Compress images and remove bloat -->
  <Hero />
  <!-- To Do Features: Add Animations: when scrolling in view, and when hovering over -->
  <Features />
  <!-- To Do Numbers: Add some component with animation that fits a numbers section -->
  <Numbers />

  <Solution />

  <Benefits />

  <Onboarding />

  <Cta />
<!-- 
  <Footer /> -->

</main>
