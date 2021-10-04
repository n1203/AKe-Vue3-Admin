<script setup>
import { reactive } from 'vue'
import * as Icons from '@ant-design/icons-vue'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {

} = props
const Icon = Icons['InfoCircleOutlined']
</script>

<template>
  <div class="bg-gray-100 p-4">
    <div class="mb-4 text-sm text-gray-500 inline-flex flex-row items-center">
      <span class="mr-2">代金券</span>
      <a-tooltip placement="topLeft" title="Prompt Text">
        <Icon />
      </a-tooltip>
    </div>
    <div class="flex flex-row items-center">
      <span class="text-2xl flex-grow">290.00</span>
      <a-button type="primary">兑换</a-button>
    </div>
  </div>
</template>