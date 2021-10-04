<script setup>
import { reactive } from "vue";
</script>

<template>
  <div class="fixed bottom-14 right-2 flex flex-col items-center z-50">
  <div class="
        relative
        overflow-hidden
        hover:overflow-visible
        px-4
        ">

    <div
      class="
        bg-blue-500
        hover:bg-blue-600
        cursor-pointer
        inline-flex
        items-center
        justify-center
        w-10
        h-10
        shadow-lg
        mb-4
        rounded-full
      "
    >
      <ake-icon name="CustomerServiceOutlined" color="#fff" />
      <div class="absolute right-full top-0 bg-white shadow-xl w-72">
        <div class="border-b border-solid border-gray-100 p-4 group">
          <div class=" text-base mb-2 group-hover:text-blue-500">
            售前在线咨询
          </div>
          <div class=" text-xs">
            专属客户经理在线解答，提供专业的上云方案
          </div>
        </div>
        <div class="border-b border-solid border-gray-100 p-4 group">
          <div class=" text-base mb-2 group-hover:text-blue-500">
            售后在线支持
          </div>
          <div class=" text-xs">
            7*24 获取专业工程师的帮助，快速解决您的问题
          </div>
        </div>
      </div>
    </div>
  </div>

    <a-tooltip title="点击打开查阅文档" placement="left">
      <a
        class="
          bg-gray-50
          hover:bg-gray-100
          cursor-pointer
          inline-flex
          items-center
          justify-center
          w-10
          h-10
          shadow-lg
          mb-4
          rounded-full
        "
        href="https://twitter.com/JunpingHu"
        target="_blank"
      >
        <ake-icon name="FileSearchOutlined" color="#555" />
      </a>
    </a-tooltip>

    <a-tooltip title="点击立即关注AkeAdmin作者Twitter" placement="left">
      <a
        class="
          bg-gray-50
          hover:bg-gray-100
          cursor-pointer
          inline-flex
          items-center
          justify-center
          w-10
          h-10
          shadow-lg
          mb-4
          rounded-full
        "
        href="https://twitter.com/JunpingHu"
        target="_blank"
      >
        <ake-icon name="TwitterOutlined" color="#555" />
      </a>
    </a-tooltip>
  </div>
</template>

<style scoped></style>
