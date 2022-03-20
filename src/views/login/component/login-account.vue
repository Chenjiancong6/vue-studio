<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rulesAccount" :model="account" ref="formRef">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password" />
            </el-form-item>
        </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rulesAccount } from "./config";
import { ElForm } from "element-plus";
export default defineComponent({
    setup() {
        const account = reactive({
            name: "",
            password: ""
        });

        const formRef = ref<InstanceType<typeof ElForm>>();
        // loginAction该函数，可以被父组件通过ref的方式调用
        const loginAction = () => {
            // 通过校验后才会执行
            formRef.value?.validate((valid) => {
                if (valid) {
                    console.log("真正执行登录逻辑");
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