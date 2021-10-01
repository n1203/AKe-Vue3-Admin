<script setup>
import service from "../service";
import clipboard from "clipboard";
import { message } from 'ant-design-vue';

const copy = (e, name) => {
  new clipboard(e.target, {
    text: () => name,
  });
  message.success(`复制${name}成功`)
};
</script>

<template>
  <div class="flex flex-row items-center w-full flex-wrap">
    <div
      class="h-20 inline-flex items-center justify-center flex-col p-8 py-12 bg-gray-50 hover:bg-blue-50 cursor-pointer text-sm mb-2 mr-2"
      v-for="(icon, index) in service.icons"
      :key="index"
      @click="(e) => copy(e, icon)"
    >
      <ake-icon class="mr-1 text-2xl mb-4" color="#666" :name="icon" />
      <div class="text-gray-500 text-xs">{{ icon }}</div>
    </div>
    <button class="opacity-0 btn"></button>
  </div>
</template>
