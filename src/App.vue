<script setup>
import { ref, computed } from 'vue'
import Header from '@/layout/header'
import SideBar from '@/layout/side-bar'
</script>

<template>
<Header />
<main class="h-screen w-screen flex flex-row flex-grow shadow-inner pt-16">
  <SideBar />
  <div class="flex-grow overflow-y-scroll h-full"><router-view /></div>
</main>
</template>
