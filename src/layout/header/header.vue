<script setup>
import { reactive } from 'vue'
import LogoFull from "@/assist/logo_full.svg";
import Avatar from "@/assist/avatar.png";
import Dropmenus from "@/layout/drop-view/index.js";
import UserDropMenu from '@/layout/user-drop-menu'
import anime from 'animejs';

let navs = [{
  name: '首页',
  route: '/',
}, {
  name: '产品',
  icon: '<CaretDownOutlined />',
  size: 'large',
  route: '/index',
  dorpViewKey: 'Production'
}]

const navs2 = [{
  name: '最新活动',
  route: '/index',
}]

const searchValue = reactive('')
const onClick = e => {
  anime({
    targets: e.target,
    width: '300px',
  })
}

const onBulr = e => {
  anime({
    targets: e.target,
    width: '200px',
  })
}

</script>

<template>
  <div class="h-16 bg-gray-900 flex flex-row items-center text-gray-500 fixed right-0 left-0 top-0 shadow-lg z-50">
    <div class="flex-row items-center inline-flex flex-grow h-16 m-4">
      <img :src="LogoFull" class="mr-4" alt="" srcset="">
      <div class="flex-grow inline-flex h-16 items-center">
        <div class="flex-row items-center inline-flex">
          <div class="flex flex-row items-center relative h-16 overflow-hidden hover:overflow-visible px-2" v-for="(nav, index) in navs" :key="index">
            <span
              class="hover:text-gray-300 cursor-pointer"
              @click="this.$router.push('/')">
              {{ nav.name }}
            </span>
            <ake-icon v-if="nav.icon" :name="nav.icon" />
            <div v-if="nav.dorpViewKey" class="absolute mt-16 bg-black top-0 left-0 max-h-96 overflow-hidden overflow-y-scroll hover:text-gray-500 drop-shadow-md shadow-inner">
              <component :is="Dropmenus[nav.dorpViewKey]"></component>
            </div>
          </div>
        </div>
        <span class="h-0 pt-3 pb-3 border-r-2 border-solid border-gray-500 opacity-20 mx-2"></span>
        <div class="flex flex-row px-2">
          <div class=" hover:text-gray-300 cursor-pointer" v-for="(nav, index) in navs2" :key="index">
            {{ nav.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="items-center justify-end inline-flex">
      <div class="h-8 px-2 bg-gray-800 search">
        <input
          id="searchRef"
          class="w-full bg-gray-800 outline-none border-none h-8"
          v-model="searchValue"
          placeholder="请输入需要搜索的内容"
          @click="onClick"
          @mouseout="onBulr"
        />
      </div>
      <div class="relative overflow-hidden hover:overflow-visible">
        <div class="cursor-pointer inline-flex flex-row items-center h-16 pl-4 pr-4">
          <img :src="Avatar" alt="" srcset="" class="mr-2 h-10 w-10">
          <ake-icon />
        </div>
        <div class="absolute top-0 mt-16 right-0">
          <UserDropMenu />
        </div>
      </div>
    </div>
  </div>
</template>
