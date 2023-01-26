<template>
    <div id="app">
        <!-- App.vue -->

        <v-app>
            <v-navigation-drawer app>
                <app-navigation-drawer></app-navigation-drawer>
            </v-navigation-drawer>

            <v-app-bar app color="primary" dark>
                <!-- -->
                <v-toolbar-title>Build PC Now! 来装机吧！</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu left bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                            <v-list-item-title
                                >Option {{ n }}</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>

            <!-- 根据应用组件来调整你的内容 -->
            <v-main>
                <!-- 给应用提供合适的间距 -->
                <v-container fluid>
                    <!-- 如果使用 vue-router -->
                    <router-view></router-view>
                </v-container>
            </v-main>

            <v-footer app>
                <!-- -->
            </v-footer>
        </v-app>
    </div>
</template>

<script>
import AppNavigationDrawer from "./views/AppNavigationDrawer.vue"
export default {
    components: {
        AppNavigationDrawer,
    },
    mounted() {
        // 关闭public/index.html中的加载页面
        document.onreadystatechange = function () {
            if (document.getElementById("Loading-Background"))
                document.getElementById("Loading-Background").remove()
        }
    },
}
</script>

<style></style>
