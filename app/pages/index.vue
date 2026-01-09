<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-7xl mx-auto space-y-16 pb-20 px-4">
      
      <!-- Section Hero -->
      <HeroSection :post="featuredPost" />

      <section>
        <div class="flex justify-between items-end mb-10">
          <h2 class="text-3xl font-bold">Dernières Publications</h2>
          <UButton variant="link" color="teal" trailing-icon="i-heroicons-arrow-right">Voir tout</UButton>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <article v-for="(post, index) in posts" :key="post.id" class="group cursor-pointer">
            <div class="relative rounded-[32px] overflow-hidden mb-6 aspect-[4/3]">
              <img :src="`https://picsum.photos/id/${post.id + 10}/600/450`" 
                   class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <UBadge class="absolute top-4 left-4" color="white">Design</UBadge>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <span>{{ new Date().toLocaleDateString() }}</span>
                <span>•</span>
                <span>5 min de lecture</span>
              </div>
              <h3 class="text-xl font-bold leading-snug group-hover:text-teal-700 transition">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 line-clamp-2 text-sm">
                {{ post.body }}
              </p>
              <div class="flex items-center gap-3 pt-4">
                <UAvatar :src="`https://i.pravatar.cc/150?u=${post.userId}`" size="sm" />
                <span class="text-sm font-semibold text-gray-700">Auteur #{{ post.userId }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="bg-teal-50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1 space-y-4">
          <h2 class="text-3xl font-bold text-teal-900">Restez inspiré.</h2>
          <p class="text-teal-700">Recevez nos meilleurs conseils en design et architecture chaque semaine.</p>
          <div class="flex flex-col sm:flex-row gap-3">
            <UInput placeholder="Votre email" size="xl" class="flex-1 rounded-full" />
            <UButton size="xl" color="teal" class="rounded-full px-8">S'inscrire</UButton>
          </div>
        </div>
        <div class="hidden md:block flex-1">
          <img src="https://picsum.photos/id/160/600/400" class="rounded-[32px] shadow-xl transform rotate-2" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
    // Récupération des données avec le nouveau moteur de Nuxt 3
    const { data: postsData } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
    import HeroSection from '~/components/HeroSection.vue';
    
    // Le premier post sert pour le Hero, les autres pour la grille
    const featuredPost = computed(() => postsData.value?.[0])
    const posts = computed(() => postsData.value?.slice(1))
    useSeoMeta({
      title: 'Accueil - Ghost Design',
      description: 'Découvrez les dernières tendances en design et architecture avec Ghost Design.'
    })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
body {
  font-family: 'Inter', sans-serif;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>