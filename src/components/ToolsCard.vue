<template>
    <div class="tools">
        <div class="tools__header">
            <h1 class="tools__name">Notion</h1>
            <p class="tools__delete">Remove</p>
        </div>
        <div class="tools__content">
            <p class="tools__description">All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.</p>
            <p class="tools__tags">#organization #planning</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToolsCard',
    props: {
        // tool: {
        //     type: Object,
        //     required: true
        // }
    }
};
</script>

<style scoped lang="less">
    .tools {
        background: red;
        max-width: 750px;
        padding: 10px 10px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 15px 20px #00000012;
        border: 1px solid #EBEAED;
        border-radius: 5px;

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__content {
            text-align: left;
        }
    }
</style>
