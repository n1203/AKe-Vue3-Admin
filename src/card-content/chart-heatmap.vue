<script setup>
import { reactive } from 'vue'
import * as echarts from 'echarts'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {
  height = 200
} = props

function getVirtulData(year) {
  year = year || '2017';
  var date = +echarts.number.parseDate(year + '-01-01');
  var end = +echarts.number.parseDate(+year + 1 + '-01-01');
  var dayTime = 3600 * 24 * 1000;
  var data = [];
  for (var time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 10000)
    ]);
  }
  return data;
}

const options = {
  tooltip: {},
  visualMap: {
    min: 0,
    max: 10000,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 0
  },
  calendar: {
    top: 40,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: '2016',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: false }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtulData('2016'),
    label: {
      color: "#00f"
    }
  }
}

</script>

<template>
  <div class="w-full h-full"><ake-echart :options="options" :height="height" /></div>
</template>
