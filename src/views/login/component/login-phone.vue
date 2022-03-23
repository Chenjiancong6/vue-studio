<template>
    <div class="login-phone">
        <el-form label-width="70px" :rules="rulesPhone" :model="phone" ref="formRef">
            <el-form-item label="手机号" prop="num">
                <el-input v-model="phone.num" />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <div class="get-code">
                    <el-input v-model="phone.code" />
                    <el-button type="primary" class="get-btn">获取验证码</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rulesPhone } from "./config";
import { ElForm } from "element-plus";
export default defineComponent({
    setup() {
        const phone = reactive({
            num: "",
            code: ""
        });
        const formRef = ref<InstanceType<typeof ElForm>>();
        // loginAction该函数，可以被父组件通过ref的方式调用
        const loginAction = () => {
            // 通过校验后才会执行
            formRef.value?.validate((valid: boolean) => {
                if (valid) {
                    console.log("手机真正执行登录逻辑");
                }
            });
        };
        return {
            phone,
            rulesPhone,
            formRef,
            loginAction
        };
    }
});
</script>

<style lang="less" scoped>
.get-code {
    display: flex;
}

.get-btn {
    margin-left: 8px;
}
</style>