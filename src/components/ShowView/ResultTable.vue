<template>
  <div>
    <!-- 由于不想展示默认的分页、计数，使用hide-default-footer属性隐藏默认脚标 -->
    <!-- 由于展示的要求，分页也是不需要的，使用disable-pagination禁用分页 -->
    <v-data-table
      :headers="headers"
      :items="list_data"
      class="elevation-1"
      hide-default-footer
      disable-pagination
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> {{ title }} </v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:[`item.link`]="{ item }">
        <v-btn
          icon
          small
          @click="linkTo(item.link)"
          :disabled="item.link == ''"
        >
          <v-icon>mdi-link-variant</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "配件类型",
        align: "start",
        value: "type",
      },
      { text: "配件名称", value: "name" },
      { text: "单价", value: "cost" },
      { text: "数量", value: "amount" },
      { text: "配件价格", value: "price" },
      { text: "配件链接", value: "link", sortable: false, align: "center" },
    ],
    list_data: [],
  }),
  props: {
    listData: Array,
    title: String,
  },
  mounted() {
    // 由于展示页面不涉及到数据的更改，直接将listData参数转换为data后修改即可。
    this.$nextTick(() => {
      this.list_data = JSON.parse(JSON.stringify(this.listData))
      this.formatData()
    })
  },
  methods: {
    linkTo(link) {
      window.open(link)
    },
    formatData() {
      // 格式化数据，为数据计算总价price
      for (let index = 0; index < this.list_data.length; index++) {
        const element = this.list_data[index]
        element.price = element.cost * element.amount
      }
    },
  },
}
</script>
