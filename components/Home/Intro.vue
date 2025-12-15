<template>
  <div class="space-y-6">
    <NuxtImg src="/logo.jpeg" alt="Mateusz Grochowski"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm Mateusz, I work as a software, product engineer and designer from
      Łódź, Poland. I specialize in building web applications and sites
      using Javascript, Vue &amp; Node. I've procrastinated building this
      website for years but finally it's here, I've carved out my own little
      nook on the internet to share my silly experiments, nifty projects, and
      thoughts (mostly about tech and design).
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a FrontEnd Developer at
      <a href="https://redge.com" target="_blank" class="underline">Redge</a>.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Mateusz Grochowski",
  description:
    "I'm Mateusz, your friendly neighborhood software, product engineer and designer from Łódź, Poland. I specialize in building web applications and sites using Javascript, Vue & Node.",
});
</script>
