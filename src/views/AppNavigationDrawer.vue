<template>
    <div class="d-flex flex-column align-center justify-space-between">
        <drawer-menu-list></drawer-menu-list>

        <!-- 图表不错，但不应该出现在这里 2023.1.9 -->
        <!-- <echarts-pie-chart-price-composition></echarts-pie-chart-price-composition> -->
    </div>
</template>

<script>
// import EchartsPieChartPriceComposition from "../components/AppNavigationDrawer/EchartsPieChartPriceComposition.vue"
import DrawerMenuList from "../components/AppNavigationDrawer/DrawerMenuList.vue"
export default {
    components: { DrawerMenuList },
    data: () => ({}),
    watch: {},
}
</script>
