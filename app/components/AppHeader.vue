<template>
  <nav class="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
    <div class="text-2xl font-bold text-[#004d4d]">FFurnish.</div>
    <div class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.href"
        :class="link.isActive ? 'text-teal-700 border-b-2 border-teal-700 pb-1' : 'hover:text-teal-500 transition'"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
    <div class="flex items-center gap-4">
      <UButton icon="i-heroicons-magnifying-glass" variant="ghost" color="gray" />
      <UButton icon="i-heroicons-shopping-bag" variant="ghost" color="gray" />
      <UAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" size="sm" />
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const isOpen = ref(false)

// Liste des liens (sans active, on le calcule dynamiquement)
const baseLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Posts', href: '/posts' },
  // Ajoute d'autres liens ici plus tard
]

// Computed qui retourne les liens avec isActive à jour
const navLinks = computed(() => {
  return baseLinks.map(link => ({
    ...link,
    isActive: route.path === link.href
  }))
})

// Fermer le menu mobile automatiquement lors du changement de page
watch(() => route.path, () => {
  isOpen.value = false
})
</script>