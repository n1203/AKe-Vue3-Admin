<script setup>
import { ref } from 'vue'
import Header from '@/layout/header'
import SideBar from '@/layout/side-bar'
</script>

<template>
<div class="h-screen w-screen flex flex-col">
  <Header />
  <main class="flex flex-row w-full flex-grow shadow-inner">
    <SideBar />
    <div class=" flex-grow"><router-view /></div>
  </main>
</div>
</template>
