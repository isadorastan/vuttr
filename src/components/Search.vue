<template>
    <Input placeholder="Search.." iconName="search-icon.svg" v-model="searchValue" @change="onChange" />
</template>

<script>
import Input from './Input';

export default {
    name: 'Search',
    components: {
        Input
    },
    data: () => {
        return {
            searchValue: ''
        };
    },
    methods: {
        onChange() {
            this.$emit('on-search', this.searchValue);
        }
    }
};
</script>

<style lang="less" scoped></style>
