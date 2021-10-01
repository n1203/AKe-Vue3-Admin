<script setup>
import * as Icons from '@ant-design/icons-vue'
const {
  name = '<CaretDownOutlined />',
  style	 = {},
  className = '',
  spin = false,
  twoToneColor = '',
  color = ''
} = defineProps({
  name: {
    type: String,
    required: true,
  },
  style: Object,
  spin: Boolean,
  twoToneColor: String,
  color: String,
})
const Icon = Icons[name.replace('<', '').replace('/>', '').replace(' ', '')]

const styles = `
  color: ${color};
` + style

</script>

<template>
  <Icon :style="styles" :spin="spin" :twoToneColor="twoToneColor" />
</template>
