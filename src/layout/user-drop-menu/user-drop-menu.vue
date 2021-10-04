<script setup>
import { reactive } from 'vue'

const menus = [{
  label: '主页',
  route: 'xxx',
  icon: '<MenuFoldOutlined />',
}, {
  label: '主页',
  route: 'xxx',
  icon: '<MenuFoldOutlined />',
}, {
  label: '主页',
  route: 'xxx',
  icon: '<MenuFoldOutlined />',
}, {
  label: '主页',
  route: 'xxx',
  icon: '<MenuFoldOutlined />',
}]

</script>

<template>
  <div class="flex-col inline-flex relative bg-black w-52">
    <div class="p-4 border-b-2 border-solid border-white border-opacity-10">
      <div class="mb-1">无双</div>
      <div class="text-xs">pingxi8@dingtalk.com</div>
    </div>
    <div class="border-b-2 border-solid border-white border-opacity-10 inline-flex flex-col p-2 pl-0 pr-0">
      <div class="p-2 pl-3 pr-4 inline-flex flex-row items-center hover:bg-gray-900 cursor-pointer" v-for="(menu, index) in menus" :key="index">
        <ake-icon :name="menu.icon" class="mr-2" />
        <div class="text-sm">{{menu.label}}</div>
      </div>
    </div>
    <div class="p-4 inline-flex flex-row items-center hover:bg-gray-900 cursor-pointer">
      <ake-icon name="MenuFoldOutlined" class="mr-2" />
      <div class="text-sm">退出</div>
    </div>
  </div>
</template>

<style scoped>
</style>