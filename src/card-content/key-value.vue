<script setup>
import { toRef, reactive } from 'vue'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {

} = props

const values = [{
  key: '镜像名称',
  value: '宝塔Linux面板',
  thumbnail: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/tc-console/tea-static-lighthouse/src/styles/slice/bt-panel.svg',
  menus: [{
    label: '重置应用',
    color: 'red',
    click: '',
  }, {
    label: '制作镜像',
    click: '',
  }]
}, {
  key: '镜像类型',
  value: '应用镜像',
}]

</script>

<template>
<div class="flex flex-col text-xs mt-2">
  <div class="inline-flex flex-row items-center  mb-3" v-for="(item, index) in values" :key="index">
    <div class="mr-4 text-gray-400">{{item.key}}</div>
    <div class="inline-flex flex-row items-center">
      <div class=" inline-flex flow-row items-center">
        <img v-if="item.thumbnail" :src="item.thumbnail" alt="" srcset="" class="h-full p-0 m-0 w-auto mr-2">
        <span>{{item.value}}</span>
      </div>
      <div class="cursor-pointer ml-2 hover:shadow" v-for="(menu, menuIndex) in item.menus" :key="menuIndex" :style="`color: ${menu.color || '#05f'}`">
        {{menu.label}}
      </div>
    </div>
  </div>
</div>
</template>
