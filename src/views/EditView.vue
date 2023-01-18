<template>
  <div class="home">
    <v-stepper v-model="step_main">
      <v-stepper-header class="pl-16 pr-16">
        <v-stepper-step :complete="step_main > 1" editable step="1">
          主机配置调整
          <small> 调整你为PC主机准备的详细配置 </small>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step_main > 2" editable step="2">
          外设配置调整
          <small> 调整主机外设的详细配置（可选） </small>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step_main > 3" editable step="3">
          数据总览
          <small> 核对整体数据以进一步调整 </small>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step_main > 4" editable step="4">
          配置发布
          <small> 调整发布的形式 </small>
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-content step="1">
        <inner-component-edit-card></inner-component-edit-card>
        <v-btn color="primary" class="mt-4" block @click="step_main = 2">
          下一步
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <outer-component-edit-card></outer-component-edit-card>
        <v-btn color="primary" class="mt-4" block @click="step_main = 3">
          下一步
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <total-information-card></total-information-card>
        <v-btn color="primary" class="mt-4" block @click="step_main = 4">
          信息核对无误，下一步
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <relese-list-card></relese-list-card>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import InnerComponentEditCard from "../components/EditView/InnerComponentEditCard.vue"
import TotalInformationCard from "../components/EditView/TotalInformationCard.vue"
import OuterComponentEditCard from "../components/EditView/OuterComponentEditCard.vue"
import ReleseListCard from "../components/EditView/ReleseListCard.vue"

export default {
  name: "HomeView",
  components: {
    InnerComponentEditCard,
    TotalInformationCard,
    OuterComponentEditCard,
    ReleseListCard,
  },
  data: () => ({
    step_main: 1,
  }),
  mounted() {
    document.title = "(编辑视图)来装机吧！——一站式PC装机配置单编写查看与分析"
  },
  methods: {},
}
</script>
