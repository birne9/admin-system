<template>
   <div class="header">
      <div class="flex-center">
         logo区域
      </div>
      <div class="flex-grow">

      </div>
      <div class="flex-center m05 color-dark-black">
         <i-ep-user></i-ep-user>
         {{ userName }}
      </div>
      <div class="flex-center m05 color-dark-black pointer" @click="openSetting">
         <i-ep-setting></i-ep-setting>
      </div>


      <el-drawer v-model="showSetting" title="项目设置" :direction="direction" :width-header="false" size="300">
         <div class="setting">
            <div class="login-out">
               <el-button type="primary" @click="loginOut">退出</el-button>
            </div>
         </div>

      </el-drawer>
   </div>
</template>
<script lant="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {useUserStoreHook} from "@/store/user/index";

const userStore = useUserStoreHook();
const userName=ref(userStore.userName);
const router = useRouter();
const showSetting = ref(false);
const openSetting = () => {
   showSetting.value = true;
}
const loginOut = () => {
   // 退出登录
   showSetting.value = false;
   sessionStorage.clear('userInfo');
   router.push('/login');
}
</script>
<style lang="less" scoped>
.header {
   display: flex;
   align-items: center;
   width: 100%;
   height: 60px;
   box-sizing: border-box;
   padding: 0 15px;
   border-bottom: 1px solid #f5f5f5;
}


.setting {
   position: relative;
   width: 100%;
   height: 100%;

   .login-out {
      width: 100%;
      position: absolute;
      bottom: 20px;
      right: 0;
      left: 0;

      .el-button {
         width: 100%;
      }
   }
}
</style>
