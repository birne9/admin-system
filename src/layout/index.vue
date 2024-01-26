<template>
  <div class="layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sidebar></Sidebar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>
<style lang="less" scoped>
.layout {
  height: 100vh;
}

.el-header {
  padding: 0;
}

.el-container {
  height: 100%;
}
</style>
