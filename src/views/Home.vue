<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>{{ $store.state.name }}</h1>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="danger">Info</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    components: {}
});
</script>
