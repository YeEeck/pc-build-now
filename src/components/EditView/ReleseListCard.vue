<template>
    <div>
        <br />
        <v-text-field
            outlined
            readonly
            :value="list_data_base64_url"
            label="分享网址"
        ></v-text-field>
        <div class="qrcode" ref="qrCodeUrl"></div>
    </div>
</template>

<script>
const Base64 = require("js-base64").Base64
import QRCode from "qrcodejs2"
export default {
    data: () => ({
        list_data: {
            inner_component_data: null,
            outer_component_data: null,
            qrcode_update_timeout: null,
        },
    }),
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
        list_data_base64_url() {
            if (this.qrcode_update_timeout != null) {
                clearTimeout(this.qrcode_update_timeout)
            }
            // 当用户3秒未输入时才再次渲染二维码，减少输入卡顿
            this.qrcode_update_timeout = setTimeout(() => {
                this.createQrCode()
            }, 3000)
        },
    },
    mounted() {},
    methods: {
        createQrCode() {
            this.$refs.qrCodeUrl.innerHTML = ""
            new QRCode(this.$refs.qrCodeUrl, {
                text: this.list_data_base64_url, // 需要转换为二维码的内容
                width: 300,
                height: 300,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M,
            })
        },
    },
}
</script>
