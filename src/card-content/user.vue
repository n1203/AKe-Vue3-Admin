<script setup>
import { toRef, reactive } from 'vue'
import defaultAvatar from '@/assist/default-avatar.png'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {
  avatar = '',  // 用户头像，可以直接引入或者URL地址
  username = '无用户名',  // 用户名
  // 列表项
  options = [
    {
      label: '标签',  // 标签内容
      value: '标签内容',  // 文字内容
      // 额外文字
      extra: {
        content: '',  // 额外文字内容
        color: '',  // 额外文字颜色，默认红色
      }
    }
  ]
} = props
let src = avatar
</script>

<template>
  <div class="flex flex-row items-center">
    <img :src="src" alt="" srcset="" class="mr-4 p-1 w-20 h-20" :onerror="e => e.currentTarget.src = defaultAvatar
" >
    <div>
      <div class="mb-3">{{username}}</div>
      <div class="text-xs mb-1" v-for="(option, index) in options" :key="index">
        <span class="text-gray-400 mr-2">{{option.label}}</span>
        <span>{{option.value}}</span>
        <span v-if="option.extra" :class="[
          'cursor-pointer',
          'text-red-500 ml-1'
        ]" :style="{
          color: option.extra.color
        }" @click="instance.event.fire('onClickOption', option)">{{option.extra.content}}</span>
      </div>
    </div>
  </div>
</template>
