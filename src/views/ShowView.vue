<template>
  <div>
    <result-table
      :listData="list_data.inner_component_data"
      title="主机配件"
    ></result-table>
    <br />
    <result-table
      :listData="list_data.outer_component_data"
      title="外设配件"
    ></result-table>
  </div>
</template>

<script>
const Base64 = require("js-base64").Base64
import ResultTable from "../components/ShowView/ResultTable.vue"
export default {
  data: () => ({
    url_query: "",
    list_data_json: "",
    list_data: null,
  }),
  components: {
    ResultTable,
  },
  mounted() {
    this.url_query = this.$route.query.data
    this.list_data_json = Base64.decode(this.url_query)
    // console.log(this.list_data_json)
    this.list_data = JSON.parse(this.list_data_json)
    // console.log(this.list_data)
  },
}
</script>
