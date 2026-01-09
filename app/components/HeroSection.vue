<template>
  <section class="px-8 py-10">
    <div class="hero-mask relative bg-[#004146] min-h-[600px] flex items-center justify-center">
      <div class="text-center text-white z-10">
        <h1 class="text-6xl font-serif mb-4">Discover Your Perfect Space</h1>
        <NuxtLink src="https://path-to-your-sofa.png" class="max-w-3xl mx-auto" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-mask {
  /* Cette forme reproduit l'encoche arrondie en haut à gauche et la découpe en bas à droite */
  clip-path: url(#hero-shape); 
  /* Alternative simplifiée en CSS pur sans SVG externe : */
  border-radius: 120px 40px 40px 120px;
}

/* Pour un rendu pixel-perfect comme sur l'image, 
   ajoutez ce SVG masqué quelque part dans votre template (caché) */
</style>