<template>
    <div class="slideNav">
        <el-container style="box-shadow: var(--el-box-shadow-lighter)">
            <el-header class="header">
                <h2>专栏导航</h2>
            </el-header>
            <el-divider class="divider" />
            <el-main class="class">
                <ul class="list">
                    <li>
                        <a href="#" class="left"><img src="../assets/vue.svg" alt="" />Vue3</a>
                        <p class="right">0篇</p>
                    </li>
                    <li>
                        <a href="#" class="left"><img src="../assets/vue.svg" alt="" />Vue3</a>
                        <p class="right">0篇</p>
                    </li>
                    <li>
                        <a href="#" class="left"><img src="../assets/vue.svg" alt="" />Vue3</a>
                        <p class="right">0篇</p>
                    </li>
                    <li>
                        <a href="#" class="left"><img src="../assets/vue.svg" alt="" />Vue3</a>
                        <p class="right">0篇</p>
                    </li>
                </ul>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'SlideNav'
};
</script>

<style scoped>
.slideNav {
    float: right;
    width: 290px;
    background-color: #fff;
}
h2 {
    text-align: center;
}
.header {
    height: 50px;
    line-height: 50px;
}
.divider {
    margin: 0;
}
.list li {
    width: 250px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.list .left {
    float: left;
}
.list .left img {
    width: 40px;
    margin: 5px;
    vertical-align: middle;
}
.list .right {
    color: gray;
    font-size: small;
    float: right;
}
</style>
