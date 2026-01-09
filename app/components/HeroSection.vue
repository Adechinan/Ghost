<template>
  <div class="flex items-center justify-center">
    
    <div id="hero-section" class="relative bg-teal-800 w-full h-100 max-w-6xl aspect-[16/9] rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-white/20">
        
        <div class="absolute inset-0 bg-white/20"></div>
      
        <div class="text-center max-w-3xl">        
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ghost
        </h1>
        
        <p class="text-white text-sm md:text-base font-bold leading-relaxed mb-4 max-w-2xl mx-auto">
            Allez à la découverte des mots. Plongez-vous dans les récits et laissez l'univers vous conter ses merveilles.
        </p>
        <p class="text-white text-sm md:text-base font-bold leading-relaxed mb-10 max-w-2xl mx-auto">
          Chers aventuriers, bienvenue sur Ghost !
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            class="px-8 py-3 text-black rounded-lg bg-yellow-400 shadow-lg shadow-teal-500/30 transition-all"
          >
            Plus d'histoires
          </UButton>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Optionnel : Ajout d'un effet de grain ou de lueur sur le fond */
</style>