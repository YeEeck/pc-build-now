<template>
  <div>
    <v-alert type="warning" dismissible>
      主机
      {{ neededComponentList2String }}
      尚未配置，请核查。如果你确定配置单中不包含上述配件，则可以点击右侧按钮关闭该提示。

      <!-- <v-col class="shrink">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined v-bind="attrs" v-on="on">我已核查无误</v-btn>
            </template>
            <span>如果你确定配置单中不包含上述配件，则点击确认</span>
          </v-tooltip>
        </v-col>
      </v-row> -->
    </v-alert>
  </div>
</template>

<script>
export default {
  data: () => ({
    needed_component_list: [],
  }),
  computed: {
    neededComponentList2String() {
      let res = this.needed_component_list[0]
      for (let index = 1; index < this.needed_component_list.length; index++) {
        const element = this.needed_component_list[index]
        res += "、" + element
      }
      return res
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getInnerComponentUnseted()
    })
  },
  watch: {
    "$store.state.inner_component_data": {
      deep: true,
      handler: function () {
        this.getInnerComponentUnseted()
      },
    },
  },
  methods: {
    getInnerComponentUnseted() {
      this.needed_component_list = [
        "CPU",
        "主板",
        "固态硬盘",
        "机械硬盘",
        "内存",
        "电源",
        "CPU散热器",
        "显卡",
        "机箱",
      ]
      for (
        let index = 0;
        index < this.$store.state.inner_component_data.length;
        index++
      ) {
        const element = this.$store.state.inner_component_data[index]
        if (element.type == "CPU主板套装") {
          this.needed_component_list.splice(
            this.needed_component_list.indexOf("CPU"),
            1
          )
          this.needed_component_list.splice(
            this.needed_component_list.indexOf("主板"),
            1
          )
          continue
        }
        let pos = this.needed_component_list.indexOf(element.type)
        if (pos != -1) {
          this.needed_component_list.splice(pos, 1)
        }
      }
    },
  },
}
</script>

<style scoped>
.data-outer-block {
  background: rgb(248, 248, 248);
  border-radius: 10px;

  width: fit-content;
}
</style>
