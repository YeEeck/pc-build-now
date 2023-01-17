<template>
  <div>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>
          <br />
          <v-chip label color="primary"> 总价： {{ total_money }} 元 </v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>主机配件</v-list-item-title>
        <v-list-item-subtitle>
          <br />
          <div v-if="$store.state.inner_component_data.length == 0">
            主机配件为空。
          </div>
          <v-row
            v-for="(item, i) in $store.state.inner_component_data"
            :key="i"
            align="baseline"
            dense
          >
            <v-col cols="2">{{ item.type }}</v-col>
            <v-col cols="8">{{ item.name }}</v-col>
            <v-col cols="1" align-self="baseline">
              {{ item.cost * item.amount }} 元
            </v-col>
            <v-col cols="1">
              <v-btn
                icon
                @click="linkTo(item.link)"
                :disabled="item.link == ''"
              >
                <v-icon>mdi-link-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>外设配件</v-list-item-title>

        <v-list-item-subtitle>
          <br />
          <div v-if="$store.state.outer_component_data.length == 0">
            外设配件为空。
          </div>
          <v-row
            v-for="(item, i) in $store.state.outer_component_data"
            :key="i"
            dense
            align="baseline"
          >
            <v-col cols="2">{{ item.type }}</v-col>
            <v-col cols="8">{{ item.name }}</v-col>
            <v-col cols="1">
              {{ item.cost * item.amount }}
            </v-col>
            <v-col cols="1">
              <v-btn
                icon
                @click="linkTo(item.link)"
                :disabled="item.link == ''"
              >
                <v-icon>mdi-link-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data: () => ({
    total_money: 0,
  }),
  watch: {
    "$store.state.inner_component_data": {
      deep: true,
      handler: function (newValue) {
        // 将价格数据处理为Echarts能够接受的形式
        let total_money = 0
        for (let index = 0; index < newValue.length; index++) {
          const element = newValue[index]
          total_money += element.cost * element.amount
        }
        this.total_money = total_money
      },
    },
  },
  methods: {
    linkTo(link) {
      window.open(link)
    },
  },
}
</script>
