<template>
    <div>
        <br />
        <snack-bar :text="snack_text" v-model="snackbar"></snack-bar>
        <v-row align="baseline">
            <v-col cols="11">
                <v-text-field
                    outlined
                    readonly
                    :value="list_data_base64_url"
                    label="分享网址"
                ></v-text-field>
            </v-col>
            <v-col class="text-center">
                <v-btn
                    icon
                    @click="linkTo(list_data_base64_url)"
                    :disabled="list_data_base64_url == ''"
                >
                    <v-icon>mdi-link-variant</v-icon>
                </v-btn>
                <v-btn icon @click="copyDataURL">
                    <v-icon>mdi-file-export</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <qr-code :url="list_data_base64_url" lazyUpdate></qr-code>
    </div>
</template>

<script>
const Base64 = require("js-base64").Base64
import SnackBar from "../PublicUtil/SnackBar.vue"
import QrCode from "./ReleseListCard/QrCode.vue"
export default {
    data: () => ({
        list_data: {
            inner_component_data: null,
            outer_component_data: null,
            qrcode_update_timeout: null,
        },
        snack_text: "",
        snackbar: false,
    }),
    components: {
        SnackBar,
        QrCode,
    },
    mounted() {},
    computed: {
        list_data_base64_url() {
            let list_data_json = JSON.stringify(this.list_data)
            // console.log(list_data_json)
            // 由于生成的Base64要放在URL里传输，如果不使用encodeURL，+和=字符会产生错误。
            let list_data_json_base64 = Base64.encodeURL(list_data_json)
            return window.location.href + "show?data=" + list_data_json_base64
        },
    },
    watch: {
        "$store.state.inner_component_data": {
            deep: true,
            handler: function (newValue) {
                this.list_data.inner_component_data = newValue
            },
        },
        "$store.state.outer_component_data": {
            deep: true,
            handler: function (newValue) {
                this.list_data.outer_component_data = newValue
            },
        },
        // list_data_base64_url() {
        //     if (this.qrcode_update_timeout != null) {
        //         clearTimeout(this.qrcode_update_timeout)
        //     }
        //     // 当用户3秒未输入时才再次渲染二维码，减少输入卡顿
        //     this.qrcode_update_timeout = setTimeout(() => {
        //         this.res_list_data_base64_url = this.list_data_base64_url
        //     }, 3000)
        // },
    },
    methods: {
        copyDataURL() {
            navigator.clipboard
                .writeText(this.list_data_base64_url)
                .then(() => {
                    this.snack_text = "链接复制已完成"
                    this.snackbar = true
                })
                .catch(() => {
                    this.snack_text =
                        "复制请求出错，如有提示，请同意网页访问剪贴板"
                    this.snackbar = true
                })
        },
    },
}
</script>
