<template>
  <button @click="onClick" :type="type" :class="[className]">
      {{cta}}
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        cta: {
            type: String,
            required: true
        },
        type: {
            type: String
        },
        className: {
            type: String
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped lang="less">
    button {
        background: #365DF0 0% 0% no-repeat padding-box;
        border-radius: 5px;
        height: 50px;
        padding: 14px 26px;
        border: 0;
        color: #fff;
        font-weight: 600;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.14rem;
        cursor: pointer;

        &:hover {
           background: #2F55CC 0% 0% no-repeat padding-box;
        }

        &:active {
            border: 0;
        }

        &:focus {
            outline: none !important;
        }

        &.secondary {
            background: #E1E7FD;
            color: #365DF0;
        }
    }
</style>