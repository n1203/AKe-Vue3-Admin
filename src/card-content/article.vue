<script setup>
import { reactive } from 'vue'
const {props = {}} = defineProps(['props'])
const {
  // 当点击列表找你某一项
  onClick = () => {},
  // 列表数据
  data = [
    // {
    //   date: new Date(),
    //   title: '测试公告',
    //   description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
    //   url: 'http://www.baidu.com'
    // }
  ]
} = props

function onClickItem (event, item, index) {
  typeof props.onClick === 'function' && props.onClick(item, {event, item, index})
}

</script>

<template>
  <div class="">
    <div v-for="(item, index) in props.data" :key="index" class="mb-2 cursor-pointer group" @click="e => onClickItem(e, item, index)">
      <div class="flex flex-row items-center">
        <div class="text-xs text-center mr-3">
          <div class="bg-gray-50 group-hover:bg-blue-50 mb-1 w-12 ">{{item.date.getMonth() + 1}}月</div>
          <div class="bg-gray-50 group-hover:bg-blue-50 text-base w-12">
            {{item.date.getDate()}}
          </div>
        </div>
        <div class="overflow-ellipsis">
          <div class="mb-1 line-clamp-1 group-hover:text-blue-500">{{item.title}}</div>
          <div class="text-xs line-clamp-2 text-gray-400 group-hover:text-gray-600">{{item.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
