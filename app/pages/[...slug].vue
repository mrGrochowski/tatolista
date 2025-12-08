<script setup>
import { useRoute } from 'vue-router';
import { queryContent } from '#content/client'; // Lub po stronie serwera

const route = useRoute();
const path = route.params.slug && route.params.slug.length > 0
    ? '/' + route.params.slug.join('/')
    : '/'; // Jeśli slug jest pusty (czyli ścieżka to '/'), ustaw ścieżkę na '/' (co w Nuxt Content odpowiada 'content/index.md')

// Pobieranie danych dla bieżącej ścieżki
const { data: page } = await useAsyncData(path, () => {
    // Używamy queryContent() z konkretną ścieżką
    return queryContent(path).findOne();
});

// Jeśli strona nie istnieje, możesz obsłużyć błąd 404
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>

<template>
  <main>
    <ContentRenderer :value="page" />
  </main>
</template>