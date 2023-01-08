<template>
    <div class="home">
        <information-edit-card></information-edit-card>
    </div>
</template>

<script>
import InformationEditCard from "../components/EditView/InformationEditCard.vue"

export default {
    name: "HomeView",
    components: {
        InformationEditCard,
    },
    data: () => ({
    }),
    mounted() {
        document.title =
            "(编辑视图)来装机吧！——一站式PC装机配置单编写查看与分析"
    },
    methods: {
    },
}
</script>
