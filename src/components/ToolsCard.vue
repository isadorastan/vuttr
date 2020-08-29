<template>
    <div class="tools">
        <h4 class="tools__name">Notion</h4>
        <img class="tools__delete" src="../assets/images/close-icon.svg" />

        <div class="tools__content">
            <p class="tools__description">
                All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.
            </p>
            <p class="tools__tags body-smallest">#organization #planning</p>
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
}
</style>
