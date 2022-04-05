<template>
    <div class="login-panel">
        <h2 class="title">vue-studio后台管理系统</h2>
        <el-tabs
            type="border-card"
            class="demo-tabs"
            stretch
            v-model="currentTab"
        >
            <el-tab-pane name="account">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon><avatar /></el-icon>
                        <span>账号登录</span>
                    </span>
                </template>
                <login-account ref="accountRef" />
            </el-tab-pane>
            <el-tab-pane name="phone">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon><Cellphone /></el-icon>
                        <span>手机登录</span>
                    </span>
                </template>
                <login-phone ref="phoneRef"></login-phone>
            </el-tab-pane>
        </el-tabs>
        <div class="account-control">
            <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button type="primary" class="login-btn" @click="handleLoginClick"
            >立即登录</el-button
        >
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Avatar, Cellphone } from '@element-plus/icons-vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';
export default defineComponent({
    components: {
        Avatar,
        Cellphone,
        LoginAccount,
        LoginPhone
    },
    setup() {
        const isKeepPassword = ref(true);
        // 通过ref 获取组件内部事件
        const accountRef = ref<InstanceType<typeof LoginAccount>>();
        // const phoneRef = ref<InstanceType<typeof LoginPhone>>();
        // 区分是账号登录还是手机登录
        const currentTab = ref('account');

        const handleLoginClick = () => {
            if (currentTab.value == 'account') {
                // 账号登录
                // 传递记住密码的参数
                accountRef.value?.loginAction(isKeepPassword.value);
                console.log('账号登录');
            } else {
                // 手机登录
                console.log('手机登录');
            }
        };

        return {
            isKeepPassword,
            accountRef,
            // phoneRef,
            handleLoginClick,
            currentTab
        };
    }
});
</script>

<style lang="less" scoped>
.login-panel {
    width: 380px;
    margin-bottom: 130px;
    .title {
        text-align: center;
    }
    .account-control {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    .login-btn {
        width: 100%;
        margin-top: 10px;
    }
}
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>
