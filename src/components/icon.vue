<script setup>
import * as Icons from '@ant-design/icons-vue'
const {
  name = '<CaretDownOutlined />',
  style	 = {},
  className = '',
  spin = false,
  rotate = false,
  twoToneColor = '',
} = defineProps({
  name: {
    type: String,
    required: true,
  },
  style: Object,
  className: [Object, String],
  spin: Boolean,
  rotate: Boolean,
  twoToneColor: String
})
const Icon = Icons[name.replace('<', '').replace('/>', '').replace(' ', '')]
</script>

<template>
  <Icon :style="style" :class="className" :spin="spin" :rotate="rotate" :twoToneColor="twoToneColor" />
</template>
