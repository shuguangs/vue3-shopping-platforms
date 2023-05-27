<script setup>
import LayoutNav from './component/LayoutNav.vue'
import LayoutHeader from './component/LayoutHeader.vue'
import LayoutFooter from './component/LayoutFooter.vue'
import Fixed from '@/views/Layout/component/Fixed.vue'
import { useCategoryStore } from '@/stores/category.js';
import { onMounted } from 'vue';

const useCategory = useCategoryStore()

onMounted(() => {
      useCategory.getCategory()
    })

</script>

<template>
  <Fixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<style>

</style>