<script setup>
import { reactive, effect } from 'vue'
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
  ],
  height = 600
} = props

const id = `editor-${uuidv4()}`
effect(() => {
  setTimeout(() => {
    const editor = new E(`#${id}`);
    editor.config.height = 500
    editor.config.focus = true

    editor.create();
  }, 0);

})


const style = `
  height: ${height}px;
`

</script>

<template>
  <div :id="id" class="w-full h-full" :style="style">
     <div>
       编辑器能力
     </div>
  </div>
</template>
