<template>
    <div class="nav-header">
        <div class="fold-menu"  @click="handleFoldClick">
            <el-icon v-if="!isFold"><d-arrow-right /></el-icon>
            <el-icon v-if="isFold"><d-arrow-left /></el-icon>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { DArrowRight, DArrowLeft } from "@element-plus/icons-vue";
export default defineComponent({
    // vue3，子组件向父组件传值的方法
    emits: ["foldChange"],
    components: {
        DArrowRight,
        DArrowLeft
    },
    setup(props, { emit }) {
        const isFold = ref(false);
        const handleFoldClick = () => {
            isFold.value = !isFold.value; // 取反
            // 子组件向父组件传值
            emit("foldChange", isFold.value);
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
    .fold-menu {
        // font-size: 30px;
        cursor: pointer;
    }
}
</style>