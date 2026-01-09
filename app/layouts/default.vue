<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
import ScropToTopButton from '~/components/ScropToTopButton.vue';
</script>

<template>
  <div>
    <AppHeader/>
    <slot />
    <ScropToTopButton/>
    <AppFooter/>
  </div>
</template>
