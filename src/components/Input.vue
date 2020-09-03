<template>
    <div :class="['custom-input', valid ? '' : 'custom-input__error']">
        <img :src="iconPath" v-if="iconName" />
        <label v-if="label">{{label}}</label>
        <input
            :placeholder="placeholder"
            @keyup.enter="onSubmit"
            :value="value"
            @input="onInput"
        />
        <span v-if="!valid" class="error">{{validation}}</span>
    </div>
</template>

<script>

import '../mixins/globalMixins';

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
        },
        label: {
            type: String
        },
        valid: {
            type: Boolean,
            default: true
        },
        validation: {
            type: String
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
    display: flex;
    flex-direction: column;

    img {
        position: absolute;
        left: 15px;
        top: calc(50% - 10px);

        width: 20px;
        height: 20px;

        & + input {
            padding-left: 50px;
        }
    }

    label {
        color: #170C3A;
        font-size: 1.42rem;
        font-weight: 600;
    }

    input {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.42rem;
        margin: 15px 0;
        background: #f5f4f6 0% 0% no-repeat padding-box;
        border: 1px solid #ebeaed;
        border-radius: 5px;
        height: 50px;
        width: 100%;
        padding: 0 20px;
        color: #170c3a;

        &::placeholder {
            color: #b1adb9;
            font-size: 1.42rem;
        }

        &:focus {
            outline: none !important;
        }
    }

    .error {
        color: #F95E5A;
        text-align: right;
    }

    &__error {
        input {
            background: #FEEFEE 0% 0% no-repeat padding-box;
            border: 1px solid #F95E5A;
            color: #F95E5A;
        }
    }
}
</style>
