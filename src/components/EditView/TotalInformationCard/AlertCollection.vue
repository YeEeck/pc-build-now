<template>
  <div>
    <v-alert type="warning" dismissible>
      主机电源尚未配置，请核查。如果你确定配置单中不包含上述配件，则可以点击右侧按钮关闭。

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
export default {}
</script>

<style scoped>
.data-outer-block {
  background: rgb(248, 248, 248);
  border-radius: 10px;

  width: fit-content;
}
</style>
