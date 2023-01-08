<template>
    <div id="app">
        <!-- App.vue -->

        <v-app>
            <v-navigation-drawer app>
                {{ $store.state.inner_component_data }}
            </v-navigation-drawer>

            <v-app-bar app>
                <!-- -->
                <v-toolbar-title>来装机吧！</v-toolbar-title>
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

<style></style>
