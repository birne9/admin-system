<template>
  <div class="sidebar">
    <el-menu :default-active="currentPath" router>
      <el-menu-item v-for="(item, index) in menuList" :index="item.path" :key="index">{{ item.meta.title }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
//获取配置的路由菜单
const menuList = router.getRoutes().filter((route) => {
  return route.meta.isShow;
});
//获取当前路由路径
const currentPath = route.path;
</script>
<style lang="less" scoped>
.sidebar {
  height: 100%;

  .el-menu {
    height: 100%;
  }
}
</style>