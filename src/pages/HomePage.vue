<template>
    <div class="home">
        <Loading :show="loading" />
        <ToolsCreate ref="toolCreate" @on-tool-created="loadTools" />
        <ToolsDeletion ref="toolDelete" @on-tool-deleted="loadTools" />
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
            <Button cta="+ Add" @click="addNewTool" />
        </div>

        <div class="mobile-add" @click="addNewTool">+</div>

        <div class="home__content">
            <ToolsCard v-for="tool in displayedList" :key="tool.id" :tool="tool" @on-delete-click="onDeleteClick" />
        </div>
    </div>
</template>

<script>
import ToolsCard from '../components/ToolsCard';
import Search from '../components/Search';
import Button from '../components/Button';
import ToolsCreate from '../components/ToolsCreate';
import ToolsDeletion from '../components/ToolsDeletion';
import Loading from '../components/Loading';

import axios from 'axios';

export default {
    name: 'HomePage',
    components: {
        ToolsCard,
        Search,
        Button,
        ToolsCreate,
        ToolsDeletion,
        Loading
    },
    data: () => {
        return {
            toolsList: [],
            displayedList: [],
            onlyTags: false,
            loading: false
        };
    },
    props: {
        msg: String
    },
    created() {
        this.loadTools();
    },
    methods: {
        loadTools() {
            this.loading = true;
            axios
                .get('http://localhost:3000/tools')
                .then(response => {
                    setTimeout(() => {
                        this.toolsList = response.data.reverse();
                        this.displayedList = this.toolsList;
                        this.loading = false;
                    }, 1000);
                })
                .catch(error => {
                    console.error('Error loading tools list', error);
                });
        },
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
        },
        addNewTool() {
            this.$refs.toolCreate.openCreateModal();
        },
        onDeleteClick(id) {
            this.$refs.toolDelete.openDeleteModal(id);
        }
    },
    watch: {
        onlyTags() {
            this.displayedList = this.toolsList;
        }
    }
};
</script>

<style scoped lang="less">
.home {
    max-width: 900px;
    margin: 0 auto;
    text-align: left;
    
    .mobile-add {
        display: none;
    }

    header {
        text-align: left;
        margin: 30px 0;
    }

    &__search {
        display: flex;
        align-items: center;
        flex-grow: 1;

        .only-tags {
            margin-left: 15px;
            input {
                width: 15px;
                height: 15px;
            }

            label {
                font-size: 1.42rem;
                margin-left: 10px;
                color: #8f8a9b;
            }
        }
    }

    &__controlls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    &__content {
        margin-bottom: 70px;
    }

    @media (max-width: 600px) {
        margin: 0 15px;

        &__controlls {
            flex-direction: column;
            align-items: flex-end;
            margin-bottom: 20px;

            button {
                display: none;
            }
        }

        &__search {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;

            .custom-input {
                margin: 0;
                width: 100%;
            }

            label {
                width: 100%;
            }
        }

        .mobile-add {
            width: 60px;
            height: 60px;
            background: #365df0;
            border-radius: 50%;
            position: fixed;
            bottom: 50px;
            right: 30px;
            color: white;
            z-index: 1;
            display: flex;
            font-size: 30px;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
    }
}
</style>
