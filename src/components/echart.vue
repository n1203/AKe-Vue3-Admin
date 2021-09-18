<script setup>
import * as echarts from 'echarts';
import { v4 as uuidv4 } from "uuid";
const {
} = defineProps({
  color: String,
})
const id = `ake-echart-${uuidv4()}`
setTimeout(() => {
  const Chart = echarts.init(document.getElementById(id));
  let option = {
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
          type: 'line'
      }]
  };
  option && Chart.setOption(option);

  window.onresize = function () {
    Chart.resize()
  }
}, 0);


</script>

<template>
  <div :id="id" class="w-full h-40 p-0 m-0" />
</template>
