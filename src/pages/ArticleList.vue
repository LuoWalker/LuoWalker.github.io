<template>
    <Item></Item>
    <SlideNav></SlideNav>
</template>

<script>
import Item from '../components/Item.vue';
import SlideNav from '../components/SlideNav.vue';
export default {
    name: 'ArticleList',
    components: {
        Item,
        SlideNav
    },
    setup() {}
};
</script>

<style scoped></style>
