<script setup>
import Card from '@/layout/card'
import bg from "@/assist/bg.jpg"
import { createStore } from 'vuex'
import schema from './home.schema.js'
import Layout from './layout'
import Editor from './editor.vue'
const store = createStore(schema)
const editStore = createStore({
  state: {
    isEdit: false,
  },
  mutations: {
    toggleEdit (state) {
      state.isEdit = !state.isEdit
    }
  }
})
// https://jbaysolutions.github.io/vue-grid-layout/guide/10-drag-from-outside.html
const makeTree = card => store.state.cards2
  .filter(childCard => childCard.layout.parent === card.id)
  .map(childCard => ({
    ...childCard,
    childCards: makeTree(childCard)
  }))

let cards = store.state.cards2
  .filter(card => card.layout.parent === 'root')
  .map(card => ({
    ...card,
    childCards: makeTree(card)
  }))
</script>

<template>
  <div class="relative">
    <div class="bg-black absolute w-full background"><img class=" m-auto" :src="bg" alt="" srcset=""></div>
    <div class="text-right text-white max-w-screen-xl mx-auto sm:px-8 pt-16 mb-4">
      <div class="hover:text-blue-300 cursor-pointer" v-if="!editStore.state.isEdit" @click="editStore.commit('toggleEdit')">
        编辑此页面
      </div>
      <div class="text-blue-300 cursor-pointer" v-if="editStore.state.isEdit" @click="editStore.commit('toggleEdit')">
        退出编辑
      </div>
    </div>
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between z-10">
      <div class="inline-flex flex-row w-full space-x-2 first-letter:space-y-2">
        <div v-for="(card, index) in cards" :key="index" :style="`
          width: ${card.layout.width || 'auto'};
          height: ${card.layout.height || 'fit-content'};
        `" :class="[
          'inline-flex',
          ['auto', undefined, ''].includes(card.layout.width) && 'flex-1',
          `flex-${card.layout.dictation || 'col'}`,
        ]">
          <Card v-if="!card.layout.hideCard" :options="card" :editStore="editStore" />
          <Layout v-if="card.childCards.length" :cards="card.childCards" :editStore="editStore" />
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