<script setup>
import { reactive } from 'vue'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {

} = props

const menus = [{
  label: '用户数量',
  icon: '<IeOutlined />',
}, {
  label: '用户组',
  icon: '<IeOutlined />',
}, {
  label: '子用户',
  icon: '<IeOutlined />',
}, {
  label: '子用户',
  icon: '<IeOutlined />',
}]

</script>

<template>
  <div class="flex flex-row items-center w-full flex-wrap">
    <div class="w-36 inline-flex items-center flex-row p-2 bg-gray-50 hover:bg-blue-50 cursor-pointer text-sm mb-2 mr-2" v-for="(item, index) in menus" :key="index">
      <ake-icon class="mr-1" color="#666" :name="item.icon" />
      <div class="text-gray-500">{{item.label}}</div>
    </div>
  </div>
</template>
