<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rulesAccount" :model="account" ref="formRef">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password" show-password/>
            </el-form-item>
        </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { rulesAccount } from "./config";
import { ElForm } from "element-plus";
import localCache from "@/utils/cache";

export default defineComponent({
    setup() {
        // 使用vuex
        const store = useStore();

        const account = reactive({
            name: localCache.getCache("name") ?? "",
            password: localCache.getCache("password") ?? ""
        });

        const formRef = ref<InstanceType<typeof ElForm>>();
        // loginAction该函数，可以被父组件通过ref的方式调用
        const loginAction = (isKeepPassword: boolean) => {
            // 通过校验后才会执行
            formRef.value?.validate((valid: boolean) => {
                if (valid) {
                    // 是否记住密码
                    if (isKeepPassword) {
                        localCache.setCache("name", account.name);
                        localCache.setCache("password", account.password);
                    } else {
                        localCache.deleteCache("name");
                        localCache.deleteCache("password");
                    }
                    //2. 通过校验后，开始进行登录验证
                    store.dispatch("accountLoginAction", { ...account });
                }
            });
        };

        return {
            account,
            rulesAccount,
            formRef,
            loginAction
        };
    }
});
</script>

<style lang="less" scoped>
</style>