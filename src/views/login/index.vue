<template>
    <div class="login-box">
        <div class="login-form">
            <h1>中后台管理系统</h1>
            <el-form :model="userInfo" :rules="rules" center class="login-info">
                <el-form-item prop="username">
                    <el-input v-model="userInfo.username" placeholder="请输入用户名" :prefix-icon="User" type="text"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="userInfo.password" placeholder="请输入密码" :prefix-icon="Lock"
                        type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="userLogin" class="login-btn">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const userInfo = reactive({
    username: "birne9",
    password: "123456",
});

const rules = reactive({
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const router = useRouter();
const userLogin = () => {
    userStore.storeUserLogin(userInfo).then(
        (res) => {
            console.log(res, "res");
            router.push("/");
        },
        (err) => {
            console.log(err, "err");
        }
    );
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

        h1 {
            margin-bottom: 10px;
        }

        .login-info {
            height: max-content;

            .login-btn {
                width: 100%;
            }
        }
    }
}
</style>
