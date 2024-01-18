<template>
  <div class="login-box">
    <div class="login-form">
      <h1>中后台管理系统</h1>
      <el-form :mode="userInfo" :rules="rules" center class="login-info">
        <el-form-item prop="username">
          <el-input
            v-model="userInfo.username"
            placeholder="请输入用户名"
            :prefix-icon="User"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="userInfo.password"
            placeholder="请输入密码"
            :prefix-icon="Lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="userLogin" class="login-btn"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const userInfo = reactive({
  username: "birne9",
  password: "123456",
});

const rules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const userLogin = () => {
//   userStore.login(userInfo);
};
</script>
<style lang="less" scope>
.login-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-color: var(--birne9-background-color);
  .login-form {
    width: 300px;
    text-align: center;
    .login-info {
      height: max-content;
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
