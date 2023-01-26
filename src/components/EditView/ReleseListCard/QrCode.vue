<template>
    <div class="qrcode" ref="qrCodeUrl"></div>
</template>

<script>
import QRCode from "qrcodejs2"
export default {
    data: () => ({
        timeout_code: null,
    }),
    props: {
        url: String,
        lazyUpdate: Boolean,
        lazyTimeout: {
            type: Number,
            default: 3000,
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.createQrCode(this.url)
        })
    },
    watch: {
        url(newValue) {
            if (this.lazyUpdate == true) {
                clearTimeout(this.timeout_code)
                this.timeout_code = setTimeout(() => {
                    this.createQrCode(newValue)
                }, this.lazyTimeout)
            } else {
                this.createQrCode(newValue)
            }
        },
    },
    methods: {
        createQrCode(url) {
            this.$refs.qrCodeUrl.innerHTML = ""
            new QRCode(this.$refs.qrCodeUrl, {
                text: url, // 需要转换为二维码的内容
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

<style scoped>
.qrcode {
    width: fit-content;
    height: fit-content;
}
</style>
