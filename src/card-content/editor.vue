<script setup>
import { toRef, reactive } from 'vue'
import { v4 as uuidv4 } from "uuid";
import E from "wangeditor";
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

const id = uuidv4()
setTimeout(() => {
  const editor = new E(`#${id}`);
  editor.create();
}, 0);

</script>

<template>
  <div :id="id" class="w-full h-full" />
</template>
