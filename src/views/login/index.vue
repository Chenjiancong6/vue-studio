<template>
    <div class="login">
        <login-panel></login-panel>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from './component/login-panel.vue';
export default defineComponent({
    components: {
        LoginPanel
    }
});
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../assets/img/login-bg.svg');
}
</style>
