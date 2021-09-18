<script setup>
import { toRef, reactive } from 'vue'

</script>

<template>
  <div class="container flex-row inline-flex relative">
    <div class="h-96 p-4 sticky top-0 bg-black">
      <div class="mb-4">最近访问</div>
      <div class="w-40 inline-flex flex-col">
        <div class="pt-2 pb-2 pl-4 pr-4 bg-gray-900 mb-2">云擎</div>
        <div class="pt-2 pb-2 pl-4 pr-4 bg-gray-900 mb-2">QTool <span class=" text-sm text-red-500">新品</span> </div>
      </div>
      <div class="mb-4 mt-4">热门</div>
      <div class="w-40 inline-flex flex-col">
        <div class="mb-2 text-gray-300 text-sm">测试1</div>
        <div class="mb-2 text-gray-300 text-sm">测试1</div>
      </div>
    </div>
    <div class="w-full p-4 bg-gray-800">
      <div>
        <div class="mb-4 text-gray-500 inline-flex flex-row items-center">
          <!-- <va-icon
            name="apps"
            color="gray"
            size="small"
            class="mr-2"
          /> -->
          <span>软件服务</span>
        </div>
        <div class="flex flex-row">
          <div>云擎</div>
          <div>云擎</div>
        </div>
      </div>

      <div class="mt-5">
        <div class="mb-4 text-gray-500 inline-flex flex-row items-center">
          <!-- <va-icon
            name="apps"
            color="gray"
            size="small"
            class="mr-2"
          /> -->
          <span>视频业务</span>
        </div>
        <div class="flex flex-row">
          <div>云擎</div>
          <div>云擎</div>
        </div>
      </div>

      <div class="mt-5">
        <div class="mb-4 text-gray-500 inline-flex flex-row items-center">
          <!-- <va-icon
            name="apps"
            color="gray"
            size="small"
            class="mr-2"
          /> -->
          <span>开发服务</span>
        </div>
        <div class="flex flex-row">
          <div>云擎</div>
          <div>云擎</div>
        </div>
      </div>

      <div class="mt-5">
        <div class="mb-4 text-gray-500 inline-flex flex-row items-center">
          <!-- <va-icon
            name="apps"
            color="gray"
            size="small"
            class="mr-2"
          /> -->
          <span>微信小程序</span>
        </div>
        <div class="flex flex-row">
          <div>云擎</div>
          <div>云擎</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container {
      width: 800px;
  }

</style>