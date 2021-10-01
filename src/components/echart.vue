<script setup>
import * as echarts from 'echarts';
import { v4 as uuidv4 } from "uuid";
const {
  options,
  height
} = defineProps({
  color: String,
  options: {},
  height: Number,
})
const id = `ake-echart-${uuidv4()}`
setTimeout(() => {
  const Chart = echarts.init(document.getElementById(id));
  options && Chart.setOption(options);
  window.onresize = function () {
    Chart.resize()
  }
}, 0);

const style = {
  height: `${height || 150}px`
}


</script>

<template>
  <div :id="id" class="w-full p-0 m-0" :style="style" />
</template>
