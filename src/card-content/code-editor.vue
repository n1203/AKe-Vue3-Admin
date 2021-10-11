<script setup>
import { reactive, effect } from 'vue'
import { v4 as uuidv4 } from "uuid";
import E from "wangeditor";
import {VAceEditor} from 'vue3-ace-editor'
// const Editor = new AceEditor({
//   theme:"ace/theme/monokai",
//   value:"console.log('hello world');"
// })
// console.log('%cMyProject%cline:6%cEditor', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px', Editor)
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

// const id = `code-editor-${uuidv4()}`
// effect(() => {
//   setTimeout(() => {
//     const editor = new E(`#${id}`);
//     editor.config.height = 500
//     editor.config.focus = true

//     editor.create();
//   }, 0);

// })


// const style = `
//   height: ${height}px;
// `

const init = e => {
  require('brace/ext/language_tools') //language extension prerequsite...
  require('brace/mode/html')
  require('brace/mode/javascript')    //language
  require('brace/mode/less')
  require('brace/theme/chrome')
  require('brace/snippets/javascript') //snippet
};

const state = reactive({
  content: ''
})

</script>

<template>
<VAceEditor
    v-model:value="state.content"
    @init="init"
    lang="js"
    theme="chrome"
    style="height: 600px" />
</template>
