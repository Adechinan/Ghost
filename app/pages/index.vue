<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-7xl mx-auto space-y-16 pb-20 px-4">
      <!-- Section Hero -->
      <HeroSection class="pt-5" />

      <section>
        <div class="flex justify-between items-end mb-10">
          <h2 class="text-3xl font-bold">Dernières Publications</h2>
          <UButton
            variant="link"
            color="teal"
            trailing-icon="i-heroicons-arrow-right"
          >
            Voir tout
          </UButton>
        </div>

        <!-- Loading -->
        <div v-if="status === 'pending'" class="py-20 text-center">
          <USpinner size="lg" />
        </div>

        <!-- Error -->
        <div
          v-else-if="status === 'error'"
          class="py-20 text-center text-red-500"
        >
          <ErrorComponent />
        </div>

        <!-- Content -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <article
            v-for="post in displayedPosts"
            :key="post.id"
            class="group cursor-pointer"
          >
            <div
              class="relative rounded-[32px] overflow-hidden mb-6 aspect-[4/3]"
            >
              <img
                :src="`https://picsum.photos/id/${post.id + 10}/600/450`"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <UBadge class="absolute top-4 left-4" color="white"
                >Design</UBadge
              >
            </div>

            <div class="space-y-3">
              <div
                class="flex items-center gap-2 text-xs text-gray-500 font-medium"
              >
                <span>{{ new Date().toLocaleDateString() }}</span>
                <span>•</span>
                <span>5 min de lecture</span>
              </div>

              <h3
                class="text-xl font-bold leading-snug group-hover:text-teal-700 transition"
              >
                {{ post.title }}
              </h3>

              <p class="text-gray-600 line-clamp-2 text-sm">
                {{ post.body }}
              </p>

              <div class="flex items-center gap-3 pt-4">
                <UAvatar
                  :src="`https://i.pravatar.cc/150?u=${post.userId}`"
                  size="sm"
                />
                <span class="text-sm font-semibold text-gray-700">
                  Auteur #{{ post.userId }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        class="bg-teal-50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-8"
      >
        <div class="flex-1 space-y-4">
          <h2 class="text-3xl font-bold text-teal-900">Restez inspiré.</h2>
          <p class="text-teal-700">
            Recevez nos meilleurs conseils en design et architecture chaque
            semaine.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <UInput
              placeholder="Votre email"
              size="xl"
              class="flex-1 rounded-full"
            />
            <UButton size="xl" color="teal" class="rounded-full px-8"
              >S'inscrire</UButton
            >
          </div>
        </div>
        <div class="hidden md:block flex-1">
          <img
            src="https://picsum.photos/id/160/600/400"
            class="rounded-[32px] shadow-xl transform rotate-2"
          />
        </div>
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import HeroSection from "~/components/HeroSection.vue";
import { usePosts } from "~/composables/usePosts";

// Composable
const { posts, status, fetchData } = usePosts(
  "https://jsonplaceholder.typicode.com"
);

// Pagination
const currentPage = ref(1);
const limit = ref(6);

// Fetch au montage
onMounted(() => {
  fetchData(currentPage.value, limit.value);
});

// Posts affichés (on enlève le premier si besoin ailleurs)
const displayedPosts = computed(() =>
  posts.value ? posts.value.slice(0, limit.value) : []
);

// SEO
useSeoMeta({
  title: "Ghost - Accueil",
  description: "Un seul mot d'ordre, consommer des mots",
});
</script>
