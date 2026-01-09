<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  {
    label: 'Accueil',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Blog',
    to: '/posts',
    active: route.path.startsWith('/posts')
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact')
  }
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-8 lg:h-10 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>