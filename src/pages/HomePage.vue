<template>
    <div class="home-page">
        <header>
            <h1>VUTTR</h1>
            <h3>Very Useful Tools to Remember</h3>
        </header>

        <div class="content">
            <ToolsCard v-for="tool in toolsList" :key="tool.id" :tool="tool" />
        </div>
    </div>
</template>

<script>
import ToolsCard from '../components/ToolsCard';
import axios from 'axios';

export default {
    name: 'HomePage',
    components: {
        ToolsCard
    },
    data: () => {
        return {
            toolsList: []
        };
    },
    props: {
        msg: String
    },
    created() {
        axios.get('http://localhost:3000/tools').then(response => {
            this.toolsList = response.data;
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-page {
    max-width: 800px;
    margin: 0 auto;

    header {
        text-align: left;
        margin: 30px 0;
    }
}
</style>
