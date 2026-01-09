<template>
  <nav class="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
    <!-- Logo -->
    <div class="text-2xl font-bold text-[#004d4d]">Ghost</div>

    <!-- Liens de navigation (desktop) -->
    <div class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.href"
        class="pb-1 hover:text-teal-500 transition"
        active-class="text-teal-700 border-b-2 border-teal-700"
        exact
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <!-- Menu mobile toggle et boutons -->
    <div class="flex items-center gap-4">
      <UButton icon="i-heroicons-magnifying-glass" variant="ghost" color="gray" />
      <UButton icon="i-heroicons-shopping-bag" variant="ghost" color="gray" />
      <UAvatar
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
        size="sm"
      />
      <!-- Bouton menu mobile -->
      <button class="md:hidden" @click="isOpen = !isOpen">
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Menu mobile (affiché si ouvert) -->
    <div v-if="isOpen" class="absolute top-full left-0 w-full bg-white shadow-md md:hidden p-4 flex flex-col gap-4">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.href"
        class="pb-1 hover:text-teal-500 transition"
        active-class="text-teal-700 border-b-2 border-teal-700"
        exact
        @click="isOpen = false"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const isOpen = ref(false);

// Liens de navigation
const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Posts", href: "/posts" },
  // Ajoute d'autres liens ici
];

// Fermer le menu mobile automatiquement quand on change de page
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);
</script>
