<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// État : la flèche est visible ou non
const isVisible = ref(false)

// Seuil en pixels pour afficher la flèche (ex. : après 300px de scroll)
const scrollThreshold = 300

// Fonction pour vérifier la position du scroll
const checkScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

// Fonction pour remonter en haut en douceur
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Ajouter/Retirer l'écouteur d'événement scroll
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <!-- Bouton flottant -->
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 p-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
      aria-label="Remonter en haut de la page"
      title="Remonter en haut"
    >
      <UIcon
        name="i-heroicons-arrow-up-20-solid"
        class="w-6 h-6"
      />
    </button>
  </transition>
</template>

<style scoped>
/* Animation d'apparition/disparition douce */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>