<template>
    <div class="sidebar">
        <el-menu
        default-active="/"
 
      >
        <el-menu-item index="/">项目介绍</el-menu-item>
        <el-menu-item index="/user">用户列表</el-menu-item>
        <el-menu-item index="/roles">角色列表</el-menu-item>
        <el-menu-item index="/auth">权限列表</el-menu-item>
      </el-menu>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.sidebar{
    height:100%;
    .el-menu{
        height:100%;
    }
}
</style>