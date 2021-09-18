<script setup>
import Card from '@/layout/card'
import avatar from "@/assist/avatar.png"
import bg from "@/assist/bg.jpg"
import { createStore } from 'vuex'

const store = createStore({
  state: {
    cards: {
  left: [{
    title: '用户信息', type: 'user',
    props: {
      avatar,
      username: '无双',
      options: [{
        label: '账号ID',
        value: '2988947947',
      }, {
        label: '实名认证',
        value: '未实名',
        extra: {
          content: '立即实名',
          color: 'blue',
          onClick: () => {}
        }
      }]
    },
    events: [{
      key: 'onClickOption',
      code: `(a) => console.log(a)`
    }],
    childrens: [{
      title: '公告', type: 'article',
    }]
  }, {
    title: '订单', type: 'table',
  }],
  right: [{
    title: '用户信息', type: 'user',
    props: {
      avatar,
      username: '无双',
      options: [{
        label: '账号ID',
        value: '2988947947',
      }, {
        label: '实名认证',
        value: '未实名',
        extra: {
          content: '立即实名',
          color: 'blue',
          onClick: () => {}
        }
      }]
    },
  }, {
    title: '公告', type: 'article',
    props: {
      onClick: value => {
        console.log('%cMyProject%cline:16%cvalue', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', value, this)
      },
      data: [{
        date: new Date(),
        title: '测试公告',
        description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
        url: 'http://www.baidu.com'
      }, {
        date: new Date(),
        title: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
        description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
        url: 'http://www.baidu.com'
      }, {
        date: new Date(),
        title: '测试公告',
        description: '测试公告测试公告测试公告测试公告测试公告测测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告试公告测试公告测试公告测试公告',
        url: 'http://www.baidu.com'
      }]
    }
  }, {
    title: '费用信息',
    type: 'counter'
  }]
}}})

console.log(store);

setTimeout(() => {
  store.state.cards.right[1].props.data = [{
        date: new Date(),
        title: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
        description: '测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告',
        url: 'http://www.baidu.com'
      }, {
        date: new Date(),
        title: '测试公告',
        description: '测试公告测试公告测试公告测试公告测试公告测测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告试公告测试公告测试公告测试公告',
        url: 'http://www.baidu.com'
      }]
}, 5000);
</script>

<template>
  <div class="relative">
    <div class="bg-black absolute w-full background"><img class=" m-auto" :src="bg" alt="" srcset=""></div>
    <!-- <div class="bg-gray-50">
      <div
        class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-blue-600 sm:text-4xl sm:leading-10"
        >
          QTool
          <br />
          <span class="text-gray-600 text-2xl">简单 · 快速 · 简洁 · 美观</span>
        </h2>
        <va-button> 立即试用 </va-button>
      </div>
    </div> -->

    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between z-10">
      <div class="flex flex-row w-full">
        <div class="flex-grow mr-4">
          <Card v-for="(card, index) in store.state.cards.left" :key="index" :options="card" />
        </div>
        <div class="flex-none max-w-sm">
          <Card v-for="(card, index) in store.state.cards.right" :key="index" :options="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
    z-index: -1;
}

</style>