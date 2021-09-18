<script setup>
import { toRef, reactive } from 'vue'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {

} = props
</script>

<template>
  <div class="bg-gray-100 p-4">
    <div class="mb-4 text-sm text-gray-500 inline-flex flex-row items-center">
      <span>代金券</span>
    </div>
    <div class="flex flex-row items-center">
      <span class="text-2xl flex-grow">290.00</span>
      <!-- <va-button class="">兑换</va-button> -->
    </div>
  </div>
</template>
