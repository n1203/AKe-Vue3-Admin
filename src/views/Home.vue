<script setup>
import Card from '@/layout/card'
import bg from "@/assist/bg.jpg"
import { createStore } from 'vuex'
import schema from './home.schema.js'
import Layout from './layout'
const store = createStore(schema)

const makeTree = card => store.state.cards2.filter(childCard => childCard.layout.parent === card.id).map(childCard => ({
  ...childCard,
  childCards: makeTree(childCard)
}))

let cards = store.state.cards2.filter(card => card.layout.parent === 'root').map(card => ({
  ...card,
  childCards: makeTree(card)
}))
</script>

<template>
  <div class="relative">
    <div class="bg-black absolute w-full background"><img class=" m-auto" :src="bg" alt="" srcset=""></div>
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between z-10">
      <div class="inline-flex flex-row w-full space-x-2 first-letter:space-y-2">
        <div v-for="(card, index) in cards" :key="index" :style="`
          width: ${card.layout.width || 'auto'};
          height: ${card.layout.height || 'fit-content'};
        `" :class="[
          'inline-flex',
          ['auto', undefined, ''].includes(card.layout.width) && 'flex-1',
          `flex-${card.layout.dictation || 'col'}`,
        ]">
          <Card v-if="!card.layout.hideCard" :options="card" />
          <Layout v-if="card.childCards.length" :cards="card.childCards" />
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