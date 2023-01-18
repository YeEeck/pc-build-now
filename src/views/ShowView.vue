<template>
  <div>
    {{ list_data }}
  </div>
</template>

<script>
const Base64 = require("js-base64").Base64
export default {
  data: () => ({
    url_query: "",
    list_data_json: "",
    list_data: null,
  }),
  mounted() {
    this.url_query = this.$route.query.data
    this.list_data_json = Base64.decode(this.url_query)
    console.log(this.list_data_json)
    this.list_data = JSON.parse(this.list_data_json)
    console.log(this.list_data)
  },
}
</script>
