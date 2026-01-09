<script setup lang="ts">
import { usePosts } from "~/composables/usePosts";

const { posts, status, fetchData } = usePosts(
  "https://jsonplaceholder.typicode.com/"
);

const currentPage = ref(1);

const limit = ref(7);

onMounted(() => {
  fetchData(currentPage.value, limit.value);
});
</script>

<template>
  <div class="p-8">
    <!-- Loading -->
    <div v-if="status === 'pending'" class="text-center py-20">
      <USpinner size="lg" color="primary" />
    </div>

    <!-- Error -->
    <div v-else-if="status === 'error'" class="text-center py-20 text-red-500">
      <ErrorComponent />
    </div>

    <!-- Content -->
    <div
      v-else-if="posts?.length"
      class="grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      <!-- Featured post -->
      <div class="space-y-6 group cursor-pointer">
        <div class="overflow-hidden rounded-[32px]">
          <img
            src="https://picsum.photos/id/20/800/500"
            class="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold">{{ posts[0].title }}</h3>
          <p class="text-gray-600 line-clamp-2">{{ posts[0].body }}</p>

          <div class="flex items-center justify-between pt-2">
            <div class="flex items-center gap-3">
              <UAvatar src="https://i.pravatar.cc/150?u=1" size="sm" />
              <span class="font-medium">By Steven Nice</span>
            </div>
            <span
              class="text-xs font-bold uppercase tracking-wider text-gray-400"
            >
              Marketing
            </span>
          </div>
        </div>
      </div>

      <!-- Other posts -->
      <div class="space-y-8">
        <div
          v-for="post in posts.slice(1, 4)"
          :key="post.id"
          class="flex gap-6 items-center group cursor-pointer"
        >
          <img
            :src="`https://picsum.photos/id/${post.id + 10}/200/200`"
            class="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
          />

          <div class="flex-1 space-y-2">
            <h4 class="font-bold group-hover:text-[#5c56f1] transition">
              {{ post.title.slice(0, 50) }}…
            </h4>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <UAvatar
                  :src="`https://i.pravatar.cc/150?u=${post.id}`"
                  size="2xs"
                />
                <span class="text-xs text-gray-500">James Miller</span>
              </div>

              <span class="text-[10px] font-bold uppercase text-gray-400">
                Tutorial
              </span>
            </div>

            <div class="border-b border-gray-100 pt-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
