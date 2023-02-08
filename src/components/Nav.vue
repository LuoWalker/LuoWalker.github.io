<template>
    <div class="nav">
        <el-menu
            router
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            style="box-shadow: var(--el-box-shadow)"
        >
            <h1 class="logo">Simple Blog</h1>
            <el-menu-item index="/article">文章</el-menu-item>
            <el-menu-item index="/column">专栏</el-menu-item>
            <el-menu-item index="/member">成员</el-menu-item>
            <span class="word" @click="getWord()">
                <h3>{{ message.hitokoto }}</h3>
                <p class="from">{{ '——' + message.from }}</p>
            </span>
        </el-menu>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: 'Nav',
    setup() {
        const activeIndex = ref('/article');
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath);
        };
        let message = ref('');
        async function getWord() {
            await axios
                .get('https://v1.hitokoto.cn')
                .then((response) => {
                    console.log('请求成功', response.data);
                    message.value = response.data;
                })
                .catch((error) => {
                    console.log('请求失败', error);
                });
            console.log('-----', message);
        }

        return {
            activeIndex,
            handleSelect,
            getWord,
            message
        };
    },
    mounted() {
        this.getWord();
    }
};
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
.nav {
    margin-bottom: 50px;
    height: 50px;
    line-height: 55px;
    background-color: #fff;
}
.logo {
    color: #2b73af;
    margin: 0 100px;
    margin-right: 50px;
    line-height: 60px;
}
.word {
    position: absolute;
    right: 100px;
}
.from {
    position: absolute;
    font-size: small;
    opacity: 0.5;
    top: 20px;
    right: 0;
}
</style>
