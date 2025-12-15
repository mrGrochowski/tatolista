<template>
  <div class="space-y-6">
    <NuxtImg src="/logo.jpeg" alt="Mateusz Grochowski"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      Drodzy rodzice. Robię listę filmików dla chłopców 6-12 lat które sa dla nich ciekawe i rozwijające, zarówno muzyka jak i filmy. Domyślnie chcę zrobić taką społeczność która będzie dodawała takie filmiki i będziemy je wrzucać z poczekalni na główną listę. Zasady są takie, nie wrzucamy przemocy, nie wrzucamy nudów, nie wrzucamy skrajnie agresywnych tematów. W liscie poczekalni możemy głosować strzałką w dół i w górę 
https://tatolista.short.gy/oczekujace-youtube
tutaj przykład listy gotowej do wyświetlania dzieciakom
https://tatolista.short.gy/tatolista-chlopcy-6-12lat
Jeżeli uważacie że filmik trzeba zdjąć z głównej tatolisty wklejajcie tutaj link. Filmiki uzyskujące ok 90% głosów będą wrzucane do listy głównej.
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
