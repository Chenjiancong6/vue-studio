<template>
    <div class="nav-header">
        <div class="fold-menu"  @click="handleFoldClick">
            <el-icon v-if="!isFold"><d-arrow-right /></el-icon>
            <el-icon v-if="isFold"><d-arrow-left /></el-icon>
        </div>
        <div class="content">
            <user-info />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { DArrowRight, DArrowLeft } from '@element-plus/icons-vue';
import UserInfo from './user-info.vue';
export default defineComponent({
    // vue3，子组件向父组件传值的方法
    emits: ['foldChange'],
    components: {
        DArrowRight,
        DArrowLeft,
        UserInfo
    },
    setup(props, { emit }) {
        const isFold = ref(false);
        const handleFoldClick = () => {
            isFold.value = !isFold.value; // 取反
            // 子组件向父组件传值
            emit('foldChange', isFold.value);
        };
        return {
            isFold,
            handleFoldClick
        };
    }
});
</script>

<style scope lang="less">
.nav-header {
    display: flex;
    width: 100%;
    .fold-menu {
        // font-size: 30px;
        cursor: pointer;
    }
    .content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        padding: 0 20px;
    }
}
</style>