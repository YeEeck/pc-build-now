<template>
    <v-snackbar :value="value" :timeout="3000" @input="close" text>
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn color="primary" text v-bind="attrs" @click="close">
                关闭({{ timeout_seconds }})
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    data: () => ({
        timeout_seconds: 3,
    }),
    props: {
        text: String,
        value: Boolean,
    },
    watch: {
        value(newValue) {
            if (newValue == true) {
                this.timeout_seconds = 3
                let interval = setInterval(() => {
                    this.timeout_seconds -= 1
                }, 1000)
                setTimeout(() => {
                    clearInterval(interval)
                }, 3000)
            }
        },
    },
    methods: {
        close() {
            this.$emit("input", false)
        },
    },
}
</script>
