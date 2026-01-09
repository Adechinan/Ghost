<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-teal-600 via-green-700 to-green-900 p-4 md:p-8">
    
    <div class="relative w-full max-w-6xl aspect-[16/9] bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-white/20">

      <div class="text-center max-w-3xl px-6">        
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Un simple blog
        </h1>
        
        <p class="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Découvrez des articles inspirants sur le design, l'architecture et les tendances modernes, rédigés par des experts du domaine.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            class="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-green-400 hover:from-orange-600 hover:to-orange-500 shadow-lg shadow-teal-500/30 transition-all"
          >
            Voir plus d'articles
          </UButton>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Optionnel : Ajout d'un effet de grain ou de lueur sur le fond */
.bg-gradient-to-br {
  background-attachment: fixed;
}
</style>