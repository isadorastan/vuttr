<template>
    <div v-if="show" class="loading">
        <div class="loading__content"></div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="less" scoped>
.loading {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid #365df0;
        animation: spin 1s linear infinite;
        border-left-color: transparent;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
}
</style>
