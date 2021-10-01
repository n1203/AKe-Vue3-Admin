
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import service from '../../service'
import { useRouter } from 'vue-router'


export default defineComponent({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['0'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
      navs: service.sidebar,
      projectName: '示例项目'
    });

    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    // 路由跳转
    const router = useRouter()
    const goto = path => {
      router.push(path)
    }

    return {
      ...toRefs(state),
      toggleCollapsed,
      goto,
    };
  },
  components: {},
});
</script>



<template>
  <a-menu
    class="relative p-0 m-0 bottom-0 left-0 h-full"
    style="max-width: 256px; min-width: 80px"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <div class="text-center bg-gr
    ay-900 mt-4 px-2 mb-3 text-base text-white line-clamp-1 overflow-ellipsis overflow-y-hidden">
      {{projectName}}
    </div>
    <template v-for="(nav, index) in navs" :key="index">
      <a-sub-menu v-if="nav.children" :key="`sub${String(index)}`" >
        <template #icon>
          <ake-icon v-if="nav.icon" :name="nav.icon" className="mr-2" />
        </template>
        <template #title>{{nav.meta.title}}</template>
        <a-menu-item
          v-for="(subNav, subIndex) in nav.children"
          :key="`menu${String(index)}-${String(subIndex)}`"
          @click="goto(subNav.path)">
          {{subNav.meta.title}}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item :key="`menu${String(index)}`"  v-else @click="goto(nav.path)">
        <template #icon>
          <ake-icon v-if="nav.icon" :name="nav.icon" className="mr-2" />
        </template>
        <span>{{nav.meta.title}}</span>
      </a-menu-item>
    </template>
    <div class="absolute bottom-0 left-0 right-0 text-center bg-black pt-3 pb-5 text-base hover:bg-gray-900 cursor-pointer" @click="toggleCollapsed" >
      <ake-icon name="MenuUnfoldOutlined" v-if="collapsed" />
      <ake-icon name="MenuFoldOutlined" v-else />
    </div>
  </a-menu>
</template>