<template>
    <div class="w">
        <ul class="main clearfix">
            <li>
                <a href="" class="left"> <img src="../assets/vue.svg" alt="" /> </a>
                <span class="right">
                    <a href="">Vue3</a>
                    <p>这是一段介绍</p>
                    <span>文章数：0篇</span>
                </span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Column'
};
</script>

<style scoped>
.main {
    float: left;
    background-color: #fff;
}

ul :nth-child(3n) {
    margin-right: 0 !important;
}

li {
    float: left;
    width: 250px;
    height: 80px;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin: 15px 15px;
}
li .left {
    float: left;
}
li .right a {
    font-size: 18px;
    font-weight: 700;
}

li .right p {
    height: 40px;
    font-size: 14px;
}
li .right span {
    font-size: 10px;
    color: #919da9;
}

li img {
    height: 80px;
    margin-right: 10px;
    vertical-align: middle;
}
</style>
