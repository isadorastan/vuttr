<template>
    <div class="tools">
        <h4 class="tools__name">{{ tool.title }}</h4>
        <img class="tools__delete" src="../assets/images/close-icon.svg" @click="onDeleteClick"/>

        <div class="tools__content">
            <p class="tools__description">
                {{ tool.description }}
            </p>
            <ul class="tools__tags">
                <li class="body-smallest" v-for="tag in tool.tags" :key="tag">#{{ tag }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToolsCard',
    props: {
        tool: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDeleteClick() {
            this.$emit('on-delete-click', this.tool.id);
        }
    }
};
</script>

<style scoped lang="less">
.tools {
    // max-width: 90%;
    padding: 10px 10px;
    text-align: left;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 20px #00000012;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    position: relative;

    & + div {
        margin-top: 20px;
    }

    .tools__delete {
        position: absolute;
        top: 10px;
        right: 15px;

        cursor: pointer;
        width: 14px;
        height: 14px;
    }

    &__name {
        margin-bottom: 10px;
    }

    &__tags {
        list-style: none;
        display: flex;
        margin-top: 15px;

        li {
            & + li {
                margin-left: 8px;
            }
        }
    }
}
</style>
