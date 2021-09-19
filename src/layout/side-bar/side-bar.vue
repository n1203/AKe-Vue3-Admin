<template>
  <a-menu
    class="h-full relative p-0 m-0"
    style="max-width: 256px; min-width: 80px"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <div class="text-center bg-gray-900 mt-4 px-2 mb-3 text-base text-white line-clamp-1 overflow-ellipsis overflow-y-hidden">
      项目A项目A项目A项目A项目A项目A项目A项目A项目A项目A项目A项目A
    </div>
    <a-menu-item key="1">
      <template #icon>
        <PieChartOutlined />
      </template>
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <DesktopOutlined />
      </template>
      <span>Option 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <template #icon>
        <InboxOutlined />
      </template>
      <span>Option 3</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <div class="absolute bottom-0 left-0 right-0 text-center bg-black pt-3 pb-5 text-base hover:bg-gray-900 cursor-pointer" @click="toggleCollapsed" >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </div>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
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

    return {
      ...toRefs(state),
      toggleCollapsed,
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
});
</script>

