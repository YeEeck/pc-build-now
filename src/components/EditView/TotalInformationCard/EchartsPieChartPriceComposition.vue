<template>
  <div
    id="EchartsPieChartPriceComposition"
    style="width: 500px; height: 500px"
  ></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core"
// 引入柱状图图表，图表后缀都为 Chart
import { PieChart } from "echarts/charts"
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  GraphicComponent,
} from "echarts/components"
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features"
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from "echarts/renderers"

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  GraphicComponent,
  PieChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
])
let myChart = null
export default {
  data: () => ({
    price_data_processed: [],
    total_money: 0,
  }),
  mounted() {
    myChart = echarts.init(
      document.getElementById("EchartsPieChartPriceComposition")
    )
  },
  watch: {
    "$store.state.inner_component_data": {
      deep: true,
      handler: function (newValue) {
        // 将价格数据处理为Echarts能够接受的形式
        let res = []
        for (let index = 0; index < newValue.length; index++) {
          const element = newValue[index]
          res.push({
            value: element.cost * element.amount,
            name: element.type,
          })
          this.price_data_processed = res
        }
        let total_money = 0
        for (let index = 0; index < newValue.length; index++) {
          const element = newValue[index]
          total_money += element.cost * element.amount
        }
        this.total_money = total_money
        myChart.setOption({
          series: [
            {
              name: "价格组成",
              type: "pie",
              data: this.price_data_processed,
              radius: ["30%", "60%"],
              label: {
                //饼图文字的显示
                show: true, //默认  显示文字
                formatter: function (arg) {
                  return arg.name + "\n" + arg.percent + "%"
                },
              },
            },
          ],
          graphic: [
            {
              type: "circle",
              id: "circle",
              left: 178,
              top: 178,
              shape: {
                r: 72,
              },
              style: {
                fill: "#00ACC1",
              },
            },
            {
              type: "text",
              left: "center",
              top: "45%",
              style: {
                text: this.total_money + " 元",
                fill: "#fff",
                width: 30,
                height: 30,
                fontSize: 18,
              },
            },
            {
              type: "text",
              left: "center",
              top: "52%",
              style: {
                text: "价格组成",
                fill: "#fff",
                width: 30,
                height: 30,
                fontSize: 22,
              },
            },
          ],
        })
      },
    },
  },
}
</script>
