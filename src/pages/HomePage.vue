<template>
    <div class="home">
        <header>
            <h1>VUTTR</h1>
            <h3>Very Useful Tools to Remember</h3>
        </header>

        <div class="home__controlls">
            <div class="home__search">
                <Search @on-search="onSearch" />
                <div class="only-tags">
                    <input type="checkbox" id="tag" name="tag" v-model="onlyTags" />
                    <label for="tag">Search in tags only</label>
                </div>
            </div>
            <Button cta="+ Add" />
        </div>

        <div class="home__content">
            <ToolsCard v-for="tool in displayedList" :key="tool.id" :tool="tool" />
        </div>
    </div>
</template>

<script>
import ToolsCard from '../components/ToolsCard';
import Search from '../components/Search';
import Button from '../components/Button';

import axios from 'axios';

export default {
    name: 'HomePage',
    components: {
        ToolsCard,
        Search,
        Button
    },
    data: () => {
        return {
            toolsList: [],
            displayedList: [],
            onlyTags: false
        };
    },
    props: {
        msg: String
    },
    created() {
        axios.get('http://localhost:3000/tools').then(response => {
            this.toolsList = response.data;
            this.displayedList = this.toolsList;
        });
    },
    methods: {
        onSearch(query) {
            if (this.onlyTags) {
                this.displayedList = this.toolsList.filter(tool => {
                    const queryLowerCase = query.toLowerCase();
                    let tagsLowerCase = tool.tags.map(tag => tag.toLowerCase());
                    tagsLowerCase = tagsLowerCase.join(' ');
                    return tagsLowerCase.includes(queryLowerCase);
                });
                return;
            }

            this.displayedList = this.toolsList.filter(tool => {
                const queryLowerCase = query.toLowerCase();
                const titleLowerCase = tool.title.toLowerCase();
                return titleLowerCase.includes(queryLowerCase);
            });
        }
    },
    watch: {
        onlyTags() {
            this.displayedList = this.toolsList;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
    // background: purple;
    max-width: 900px;
    margin: 0 auto;
    text-align: left;

    header {
        text-align: left;
        margin: 30px 0;
    }

    &__search {
        display: flex;
        align-items: center;

        .only-tags {
            margin-left: 15px;
            input {
                width: 15px;
                height: 15px;
            }

            label {
                font-size: 1.42rem;
                margin-left: 10px;
            }
        }
    }

    &__controlls {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__content {
        margin-bottom: 70px;
    }
}
</style>
