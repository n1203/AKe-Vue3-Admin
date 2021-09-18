<script setup>
import { toRef, reactive } from 'vue'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {

} = props

const cols = [{
  label: '用户数量',
  value: '99',
}, {
  label: '用户组',
  value: '2',
}, {
  label: '子用户',
  value: '8',
}]

</script>

<template>
  <div class="flex flex-row items-center w-full">
    <div class="flex-1 p-2 hover:bg-gray-50 cursor-pointer" v-for="(item, index) in cols" :key="index">
      <div class="mb-1 text-sm text-gray-400">{{item.label}}</div>
      <div class="font-bold text-base">{{item.value}}</div>
    </div>
  </div>
</template>
