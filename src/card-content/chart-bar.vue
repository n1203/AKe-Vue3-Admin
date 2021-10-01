<script setup>
import { toRef, reactive } from 'vue'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {
  height = 200,
} = props

const options = {
      grid: {
        top: '15px',
        left: '50px',
        right: '15px',
        bottom: '30px',
      },
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '22', '223', '3434', '2222', '2323']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [150, 230, 224, 218, 135, 147, 260, 266, 263, 255, 256, 267],
          smooth: true,
          showSymbol: false,
          type: 'bar'
      }]
  }

</script>

<template>
  <div class="w-full h-full"><ake-echart :options="options" :height="height" /></div>
</template>
