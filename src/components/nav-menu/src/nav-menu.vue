<template>
    <div class="nav-menu">
        <div class="menu-logo">
            <img class="img" src="../../../assets/img/logo.svg" alt="logo">
            <span v-if="!collapse" class="title">vue-studio</span>
        </div>
        <el-menu
            default-active="2"
            class="el-menu-vertical"
            text-color="#b7bdc3"
            :collapse="collapse"
            active-text-color="#0a60bd"
            >
            <div v-for="item in userMenus" :key="item.id">
                <!--有二级和或者三级的菜单-->
                <template v-if="item.type === 1">
                    <el-sub-menu :index="item.id + ''">
                        <template #title>
                            <i v-if="item.icon" :class="item.icon"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <!--二级菜单-->
                        <div v-for="subitem in item.children" :key="subitem.id">
                            <!--有三级菜单的情况-->
                            <!-- <template v-if="subitem.children">
                                <div v-for="threeMenu in subitem.children" :key="threeMenu.id">
                                    <el-sub-menu :index="threeMenu.id + ''">
                                        <template #title>
                                            <i v-if="threeMenu.icon" :class="threeMenu.icon"></i>
                                            <span>{{threeMenu.name}}</span>
                                        </template>
                                         <el-menu-item 
                                         :index="threeMenu.id + ''"
                                          @click="handleMenuItemClick(threeMenu)">
                                            <i v-if="threeMenu.icon" :class="threeMenu.icon"></i>
                                            <span>{{ threeMenu.name }}</span>
                                        </el-menu-item>
                                    </el-sub-menu>
                                </div>
                            </template> -->
                             <!--没有三级菜单的情况-->
                            <!-- <template v-else> -->
                                <el-menu-item 
                                    :index="subitem.id + ''"
                                    @click="handleMenuItemClick(subitem)">
                                    <i v-if="subitem.icon" :class="subitem.icon"></i>
                                    <span>{{ subitem.name }}</span>
                                </el-menu-item>
                            <!-- </template> -->
                        </div>
                    </el-sub-menu>
                </template>

                <!--只有一级的菜单，不能展开子菜单的菜单-->
                <template v-else-if="item.type === 2">
                     <el-menu-item :index="item.id + ''"  @click="handleMenuItemClick(item)">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </div>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
// import { useStore } from "@/store";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
    props: {
        collapse: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        // 计算属性获取vuex中的菜单列表
        const store = useStore();
        const userMenus = computed(() => store.state.Login.userMenus);

        /**
         * 点击菜单跳转路由
         */
        const router = useRouter();

        const handleMenuItemClick = (item: any) => {
            console.log(item);
            // 路由切换
            router.push({
                path: item.url ?? '/not-found'
            });
        };
        return {
            userMenus,
            handleMenuItemClick
        };
    }
});
</script>

<style scoped lang='less'>
.nav-menu {
    height: 100%;
    // background-color: #001529;
    .menu-logo {
        display: flex;
        height: 28px;
        padding: 12px 10px 8px 10px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .img {
            height: 100%;
            margin: 0 10px;
        }

        .title {
            font-size: 16px;
            font-weight: 700;
            color: white;
        }
    }
    .el-menu {
        border-right: none;
    }

    // 目录
    .el-submenu {
        background-color: #001529 !important;
        // 二级菜单 ( 默认背景 )
        .el-menu-item {
            padding-left: 50px !important;
            background-color: #0c2135 !important;
        }
    }

    ::v-deep .el-submenu__title {
        background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
        color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
        // color: #fff !important;
        // background-color: #0a60bd !important;
    }
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
}
</style>