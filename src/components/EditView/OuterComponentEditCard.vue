<template>
    <div>
        <v-row
            class="mt-4"
            dense
            justify="center"
            align="baseline"
            v-for="(item, i) in component_data"
            :key="i"
        >
            <v-col cols="2">
                <v-combobox
                    v-model="item.type"
                    :items="pc_component_types_processed"
                    label="配件类别"
                    outlined
                    dense
                ></v-combobox>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    outlined
                    dense
                    label="型号"
                    v-model="item.name"
                ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-text-field
                    outlined
                    dense
                    label="单价"
                    v-model="item.cost"
                ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-text-field
                    outlined
                    dense
                    label="数量"
                    v-model="item.amount"
                ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-text-field
                    dense
                    outlined
                    readonly
                    label="总价"
                    :value="item.cost * item.amount"
                ></v-text-field>
            </v-col>
            <v-col cols="1" class="text-align-center">
                <v-btn icon @click="deleteComponentDataItem(i)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    outlined
                    dense
                    label="链接（可选）"
                    v-model="item.link"
                ></v-text-field>
            </v-col>
            <v-col><v-divider></v-divider><br /></v-col>
        </v-row>
        <v-btn icon @click="addComponentDataItem">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>
<script>
// 配件表空数据模板
const component_data_item_model = {
    type: "",
    name: "",
    cost: "",
    amount: 1,
    link: "",
}
export default {
    name: "InformationEditCard",
    data: () => ({
        pc_component_types: ["显示器", "鼠标", "键盘", "耳机", "音响"],
        component_data: [],
    }),
    computed: {
        pc_component_types_processed() {
            let types_result = JSON.parse(
                JSON.stringify(this.pc_component_types)
            )
            for (let index = 0; index < this.component_data.length; index++) {
                const element = this.component_data[index]
                let type_index = types_result.indexOf(element.type)
                if (type_index != -1) {
                    types_result.splice(type_index, 1)
                }
            }
            return types_result
        },
    },
    watch: {
        component_data: {
            handler(item_new) {
                // 数据改变后则备份
                this.backupComponentData()
                this.$store.commit(
                    "update_outer_component_data",
                    JSON.parse(JSON.stringify(item_new))
                )
            },
            deep: true,
        },
    },
    mounted() {
        // 页面载入时从localStorage中恢复数据
        this.recoverComponentData()
        // 页面载入后设定每十秒备份数据到localStorage
        // setInterval(() => {
        //     this.backupComponentData()
        // }, 10000)
        // 页面载入时如果localStorage中数据为空则为配件表新增第一个空数据
        // 外设为可选项，因此取消第一个空数据的新增
        if (this.component_data == null) {
            this.component_data = []
            // this.addComponentDataItem()
        }
    },
    methods: {
        addComponentDataItem() {
            // 为配件表新增一行空数据
            this.component_data.push(
                JSON.parse(JSON.stringify(component_data_item_model))
            )
        },
        deleteComponentDataItem(index) {
            // 为配件表删除一行指定的数据
            this.component_data.splice(index, 1)
        },
        backupComponentData() {
            // 将配件表备份入localStorage
            localStorage.setItem(
                "outer_component_data",
                JSON.stringify(this.component_data)
            )
        },
        recoverComponentData() {
            // 将配件表数据从localStorage中恢复
            this.component_data = JSON.parse(
                localStorage.getItem("outer_component_data")
            )
        },
    },
}
</script>

<style scoped>
.text-align-center {
    text-align: center;
}
</style>
