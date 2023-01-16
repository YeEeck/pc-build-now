<template>
    <div class="wrap">
        <div class="data-outer-block ma-2" style="flex: 1">
            <information-collection></information-collection>
        </div>
        <div class="data-outer-block ma-2">
            <echarts-pie-chart-price-composition></echarts-pie-chart-price-composition>
        </div>
    </div>
</template>

<script>
import EchartsPieChartPriceComposition from "./TotalInformationCard/EchartsPieChartPriceComposition.vue"
import InformationCollection from "./TotalInformationCard/InformationCollection.vue"
export default {
    components: {
        EchartsPieChartPriceComposition,
        InformationCollection,
    },
}
</script>

<style scoped>
.wrap {
    display: flex;
}

.data-outer-block {
    background: rgb(248, 248, 248);
    border-radius: 10px;

    width: fit-content;
}
</style>
