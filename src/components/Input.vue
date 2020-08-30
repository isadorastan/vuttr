<template>
    <div class="custom-input">
        <img :src="iconPath" v-if="iconName" />
        <input
            :placeholder="placeholder"
            @keyup.enter="onSubmit"
            :value="value"
            @input="onInput"
        />
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        placeholder: {
            type: String
        },
        iconName: {
            type: String
        },
        value: {
            type: String,
            required: true
        }
    },
    data: () => {
        return {
            inputValue: ''
        };
    },
    created() {
        this.inputValue = this.value;
    },
    computed: {
        text() {
            return this.type === 'text';
        },
        checkbox() {
            return this.type === 'checkbox';
        },
        iconPath() {
            return require(`../assets/images/${this.iconName}`);
        }
    },
    methods: {
        onSubmit() {
            this.$emit('on-submit');
        },
        onInput(ev) {
            this.$emit('input', ev.target.value);
        }
    },
    watch: {
        value(value) {
            this.$emit('change', value);
        }
    }
};
</script>

<style lang="less" scoped>
.custom-input {
    position: relative;
    margin: 15px 0;

    img {
        position: absolute;
        left: 15px;
        top: calc(50% - 10px);

        width: 20px;
        height: 20px;

        & + input {
            padding-left: 55px;
        }
    }

    input {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.42rem;
        margin: 15px 0;
        background: #f5f4f6 0% 0% no-repeat padding-box;
        border: 1px solid #ebeaed;
        border-radius: 5px;
        height: 50px;
        width: 403px;
        padding-right: 20px;
        color: #170c3a;

        &::placeholder {
            color: #b1adb9;
            font-size: 1.42rem;
        }

        &:focus {
            outline: none !important;
        }
    }
}
</style>
