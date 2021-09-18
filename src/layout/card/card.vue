<script setup>
import CardBase from './card-base'
const {options = {}} = defineProps(['options'])
const instance = new CardBase(options)
const {
  title,  // 卡片标题
  type, // 卡片类型，用于获取对应卡片
  props = {}, // 卡片类型对应数据值
  childrens, // 卡片子集数据
  content,
} = instance
</script>

<template>
  <div class="mb-4 bg-white p-4 shadow-md w-full">
    <div class="mb-4 font-bold">{{title || '未命名模块'}}
  </div>
    <div>
      <component :is="content" v-if="content" :props="props" :instance="instance" />
      <div v-if="!content">没有找到该Card(模块)</div>
      <div v-if="childrens">
        <div v-for="(children, index) in childrens" :key="index">
          <component :is="children.content" v-if="children.content" :props="children.props" :instance="instance" />
          <div v-if="!content">没有找到该Card(模块)【子集】</div>
        </div>
      </div>
    </div>
  </div>
</template>