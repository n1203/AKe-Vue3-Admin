<script setup>
import { toRef, reactive } from 'vue'
import * as echarts from 'echarts'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {

} = props

const options = {
    title: {
        text: '20%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, 1)'],
    legend: {
        show: false,
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '66%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '02',
            value: 20
        }]
    }]
}

</script>

<template>
  <div class="w-full h-full"><ake-echart :options="options" :height="140" /></div>
</template>
