<template>
    <div class="modal" v-if="show">
        <div class="modal__content">
            <span class="modal__close" @click="onCloseModal">&times;</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onCloseModal() {
            this.$emit('on-modal-close');
        }
    }
};
</script>

<style scoped lang="less">
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    &__content {
        max-width: 600px;
        background-color: #fefefe;
        margin: 10% auto;
        padding: 30px;
        border: 0;
        width: 80%;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 20px 25px #0000001a;
        border-radius: 5px;
        position: relative;
    }

    &__close {
        position: absolute;
        top: 5px;
        right: 15px;
        font-size: 28px;
    }

    &__close:hover,
    &__close:focus {
        cursor: pointer;
    }
}
</style>
